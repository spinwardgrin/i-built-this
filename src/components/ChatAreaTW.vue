<template>
  <div class="tw-min-w-0 tw-flex-1">
    <q-form @submit="$emit('formSubmit', question)" class="tw-relative">
      <div
        class="tw-overflow-hidden tw-rounded-lg tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 focus-within:tw-ring-2 focus-within:tw-ring-indigo-600"
      >
        <label for="comment" class="tw-sr-only">Ask a question</label>
        <q-input
          dark
          color="white"
          rows="3"
          name="comment"
          id="comment"
          v-model="question"
          class="q-ml-md tw-w-100% tw-block tw-text-white tw-w-full tw-resize-none tw-border-0 tw-bg-transparent tw-py-1.5 tw-text-gray-900 placeholder:tw-text-gray-400 focus:tw-ring-0 sm:tw-text-sm sm:tw-leading-6"
          placeholder="Ask a question..."
        />

        <!-- Spacer element to match the height of the toolbar -->
        <div class="tw-py-2" aria-hidden="true">
          <!-- Matches height of button in toolbar (1px border + 36px content height) -->
          <div class="tw-py-px">
            <div class="tw-h-9" />
          </div>
        </div>
      </div>

      <div
        class="tw-absolute tw-inset-x-0 tw-bottom-0 tw-flex tw-justify-between tw-py-2 tw-pl-3 tw-pr-2"
      >
        <div class="tw-flex-shrink-0">
          <q-btn
            type="submit"
            :loading="loading"
            class="tw-inline-flex tw-items-center tw-rounded-md tw-bg-indigo-600 tw-px-3 tw-py-2 tw-text-sm tw-font-semibold tw-text-white tw-shadow-sm hover:tw-bg-indigo-500 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-indigo-600"
            >Ask a question</q-btn
          >
        </div>
      </div>
    </q-form>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  loading: boolean;
}>();

defineEmits<{
  formSubmit: [question: string];
}>();

const question = ref('');
</script>

<style scoped>
:deep(.q-field--standard .q-field__control:before) {
  /* removes the quasar border from the input fields */
  border-bottom: none;
}
</style>
