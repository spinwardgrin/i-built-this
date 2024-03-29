<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <!--
    This example requires updating your template:

    ```
    <html class="tw-h-full tw-bg-white">
    <body class="tw-h-full">
    ```
  -->
  <div class="tw-flex tw-min-h-full tw-flex-1 tw-bg-white">
    <div
      class="tw-flex tw-flex-1 tw-flex-col tw-justify-center tw-px-4 tw-py-12 sm:tw-px-6 lg:tw-flex-none lg:tw-px-20 xl:tw-px-24"
    >
      <div class="tw-mx-auto tw-w-full tw-max-w-sm lg:tw-w-96">
        <div>
          <img
            class="tw-h-24 tw-w-auto"
            src="../assets/rocket logo transparent.png"
            alt="Your Company"
          />
          <h2
            class="tw-mt-8 tw-text-2xl tw-font-bold tw-leading-9 tw-tracking-tight tw-text-gray-900"
          >
            Building Robots
          </h2>
          <p class="tw-mt-2 tw-text-sm tw-leading-6 tw-text-gray-500">
            Not a member?
            {{ ' ' }}
            <a
              href="#"
              class="tw-font-semibold tw-text-indigo-600 hover:tw-text-indigo-500"
              >Build for free for 14 days</a
            >
          </p>
        </div>

        <div class="tw-mt-10">
          <div>
            <form action="#" method="POST" class="tw-space-y-6">
              <div>
                <label
                  for="email"
                  class="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900"
                  >Email address</label
                >
                <div class="tw-mt-2">
                  <q-input
                    v-model="email"
                    id="email"
                    name="email"
                    type="email"
                    dense
                    autocomplete="email"
                    input-class="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6 before:border-none"
                  />
                </div>
              </div>

              <div>
                <label
                  for="password"
                  class="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900"
                  >Password</label
                >
                <div class="tw-mt-2">
                  <q-input
                    id="password"
                    name="password"
                    type="password"
                    v-model="password"
                    autocomplete="current-password"
                    dense
                    input-class="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                  />
                </div>
              </div>

              <div class="tw-flex tw-items-center tw-justify-between">
                <div class="tw-flex tw-items-center">
                  <q-checkbox
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    v-model="rememberMe"
                    input-class="tw-h-4 tw-w-4 tw-rounded tw-border-gray-300 tw-text-indigo-600 focus:tw-ring-indigo-600"
                  />
                  <label
                    for="remember-me"
                    class="tw-ml-3 tw-block tw-text-sm tw-leading-6 tw-text-gray-700"
                    >Remember me</label
                  >
                </div>

                <div class="tw-text-sm tw-leading-6">
                  <a
                    href="#"
                    class="tw-font-semibold tw-text-indigo-600 hover:tw-text-indigo-500"
                    >Forgot password?</a
                  >
                </div>
              </div>

              <div>
                <q-btn
                  type="submit"
                  class="tw-flex tw-w-full tw-justify-center tw-rounded-md tw-bg-indigo-600 tw-px-3 tw-py-1.5 tw-text-sm tw-font-semibold tw-leading-6 tw-text-white tw-shadow-sm hover:tw-bg-indigo-500 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-indigo-600"
                >
                  Sign in
                </q-btn>
              </div>
            </form>
          </div>

          <div class="tw-mt-10">
            <div class="tw-relative">
              <div
                class="tw-absolute tw-inset-0 tw-flex tw-items-center"
                aria-hidden="true"
              >
                <div class="tw-w-full tw-border-t tw-border-gray-200" />
              </div>
              <div
                class="tw-relative tw-flex tw-justify-center tw-text-sm tw-font-medium tw-leading-6"
              >
                <span class="tw-bg-white tw-px-6 tw-text-gray-900"
                  >Or continue with</span
                >
              </div>
            </div>

            <div class="tw-mt-6 tw-grid tw-grid-cols-2 tw-gap-4">
              <a
                href="#"
                class="tw-flex tw-w-full tw-items-center tw-justify-center tw-gap-3 tw-rounded-md tw-bg-white tw-px-3 tw-py-2 tw-text-sm tw-font-semibold tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 hover:tw-bg-gray-50 focus-visible:tw-ring-transparent"
              >
                <svg
                  class="tw-h-5 tw-w-5"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                    fill="#34A853"
                  />
                </svg>
                <span class="tw-text-sm tw-font-semibold tw-leading-6"
                  >Google</span
                >
              </a>

              <a
                href="#"
                class="tw-flex tw-w-full tw-items-center tw-justify-center tw-gap-3 tw-rounded-md tw-bg-white tw-px-3 tw-py-2 tw-text-sm tw-font-semibold tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 hover:tw-bg-gray-50 focus-visible:tw-ring-transparent"
              >
                <svg
                  class="tw-h-5 tw-w-5 tw-fill-[#24292F]"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="tw-text-sm tw-font-semibold tw-leading-6"
                  >GitHub</span
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tw-relative tw-hidden tw-w-0 tw-flex-1 lg:tw-block">
      <img
        class="tw-absolute tw-inset-0 tw-h-full tw-w-full tw-object-scale-down"
        src="../assets/gabriel-vasiliu-mVJzfw2Zm7Y-unsplash.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const rememberMe = ref(false);
</script>

<style scoped>
:deep(.q-field--standard .q-field__control:before) {
  /* removes the quasar border from the input fields */
  border-bottom: none;
}
</style>
