<template>
  <!--
    This example requires updating your template:

    ```
    <html class="tw-h-full">
    <body class="tw-h-full">
    ```
  -->
  <main class="tw-relative tw-isolate tw-min-h-full">
    <img
      src="~assets/tijs-van-leur-9bd6LStI8ug-unsplash.jpg"
      alt=""
      class="tw-absolute tw-inset-0 tw-z--10 tw-h-full tw-w-full tw-object-cover tw-object-top"
    />
    <div
      class="tw-mx-auto tw-max-w-7xl tw-px-6 tw-py-32 tw-text-center sm:tw-py-40 lg:tw-px-8"
    >
      <p class="tw-text-base tw-font-semibold tw-leading-8 tw-text-white">
        404
      </p>
      <h1
        class="tw-mt-4 tw-text-3xl tw-font-bold tw-tracking-tight tw-text-white sm:tw-text-5xl"
      >
        Page not found
      </h1>
      <p class="tw-mt-4 tw-text-base tw-text-white/70 sm:tw-mt-6">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div class="tw-mt-10 tw-flex tw-justify-center">
        <a
          href="#"
          class="tw-text-sm tw-font-semibold tw-leading-7 tw-text-white"
          ><span aria-hidden="true">&larr;</span>
          <q-btn
            class="tw-q-mt-xl"
            color="white"
            text-color="blue"
            unelevated
            to="/"
            label="Go Home"
            no-caps
        /></a>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
onMounted(() => {
  document.body.classList.add('tw-h-full');
  document.documentElement.classList.add('tw-h-full');
  const quasarApp = document.getElementById('q-app');
  if (quasarApp) quasarApp.classList.add('tw-h-full');
});

onUnmounted(() => {
  document.body.classList.remove('tw-h-full');
  document.documentElement.classList.remove('tw-h-full');
  const quasarApp = document.getElementById('q-app');
  if (quasarApp) quasarApp.classList.remove('tw-h-full');
});
</script>
