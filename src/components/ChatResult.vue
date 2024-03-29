<template>
  <div class="tw-bg-gray-50 sm:tw-rounded-lg">
    <div class="tw-px-4 tw-py-5 sm:tw-p-6" >
      <div class="tw-mt-2 tw-max-w-xl tw-text-sm tw-text-gray-500">
        <p v-auto-animate><pre class="tw-text-wrap typewriter" style="white-space: pre-wrap;">{{ text }}</pre></p>
      </div>

    </div>
  </div>

</template>

<script setup>
import Typewriter from 'typewriter-effect/dist/core';

const props = defineProps({
  text: String,
});

onMounted(() => {
  const node = document.querySelector('.typewriter');
  if (props.text) {
    new Typewriter(node, {
      strings: props.text,
      autoStart: true,
      loop: false,
      delay: 20,
    });
  }
});
</script>
