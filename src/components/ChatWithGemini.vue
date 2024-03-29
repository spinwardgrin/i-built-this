<template>
  <div class="tw-mx-auto tw-w-full tw-max-w-xl" v-auto-animate>
    <div class="tw-flex tw-items-start tw-space-x-4">
      <ChatAreaTW
        :loading="loading"
        @formSubmit="(result) => handleForm(result)"
      />
    </div>
    <div v-if="answerResult" class="tw-flex tw-justify-center">
      <ChatResult :text="answerResult" class="tw-mt-12" v-auto-animate />
    </div>
    <div v-else-if="loading" class="tw-flex tw-justify-center tw-mt-12">
      <q-linear-progress
        :value="progress"
        :buffer="buffer"
        track-color="red"
        color="indigo"
        class="q-mt-sm"
      />
      <q-spinner-comment color="indigo" size="xl" />
    </div>
    <div v-else-if="error" class="tw-flex tw-justify-center tw-mt-12">
      <ChatResult text="There was an error. Please try again." />
    </div>
  </div>
</template>

<script setup lang="ts">
import { functions, db } from 'src/boot/firebase';
import { HttpsCallableResult, httpsCallable } from 'firebase/functions';
import { useDocument } from 'vuefire';
import { doc } from 'firebase/firestore';

const props = defineProps<{
  functionName: string;
}>();

const COLLECTION = 'generate' as const;

const askGemeniAQuestion = httpsCallable(functions, props.functionName);

const loading = ref(false);
const error = ref(false);
const progress = ref(0.01);
const buffer = ref(0.01);
const context = 'Please answer this in just a few sentences: ';
//   'You are a teacher. You are pragmatic, patient, curious, and encouraging. You are being asked questions by elementary school children. Please explain in simple terms to someone with an elementary school level education. Do not include any of the previous information in your response. Give me a brief answer to this question: ';
const answerPath = ref();

// ' Explain in simple terms to someone with an elementary school level education.';

const answerDocRef = computed(() =>
  answerPath.value ? doc(db, `${COLLECTION}/${answerPath.value}`) : null
);

const answerDoc = useDocument(answerDocRef);
const answerResult = computed(() => answerDoc.value?.response);

watchEffect(() => {
  const state = answerDoc.value?.status?.state;
  if (state === 'ERROR') {
    loading.value = false;
    error.value = true;
  } else if (state === 'COMPLETED') {
    loading.value = false;
  }
});

async function handleForm(question: string) {
  loading.value = true;
  error.value = false;

  executeLoadingBar();

  const fullQuestion = context + question;

  const result = (await askGemeniAQuestion({
    question: fullQuestion,
  })) as HttpsCallableResult<{ documentId: string }>;

  const docID = result.data.documentId;
  answerPath.value = docID;
}

function executeLoadingBar() {
  progress.value = 0.01;
  buffer.value = 0.01;

  const interval = setInterval(() => {
    if (progress.value >= 1) {
      clearInterval(interval);
    }

    progress.value = Math.min(1, buffer.value, progress.value + 0.1);
    buffer.value = Math.min(1, buffer.value + Math.random() * 0.2);
  }, 700 + Math.random() * 100);
}
</script>

<style scoped></style>
