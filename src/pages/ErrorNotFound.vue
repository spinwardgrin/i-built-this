<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full">
    <body class="h-full">
    ```
  -->
  <main class="relative isolate min-h-full">
    <img
      src="~assets/tijs-van-leur-9bd6LStI8ug-unsplash.jpg"
      alt=""
      class="absolute inset-0 -z-10 h-full w-full object-cover object-top"
    />
    <div class="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
      <p class="text-base font-semibold leading-8 text-white">404</p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
        Page not found
      </h1>
      <p class="mt-4 text-base text-white/70 sm:mt-6">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div class="mt-10 flex justify-center">
        <a href="#" class="text-sm font-semibold leading-7 text-white"
          ><span aria-hidden="true">&larr;</span>

          <q-btn
            class="q-mt-xl"
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

<script setup lang="ts"></script>
