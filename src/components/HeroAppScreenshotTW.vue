<template>
  <div class="tw-bg-white">
    <header class="tw-absolute tw-inset-x-0 tw-top-0 tw-z-50">
      <nav
        class="tw-flex tw-items-center tw-justify-between tw-p-6 lg:tw-px-8"
        aria-label="Global"
      >
        <div class="tw-flex lg:tw-flex-1">
          <a href="#" class="tw--m-1.5 tw-p-1.5">
            <span class="tw-sr-only">Your Company</span>
            <img
              class="tw-h-8 tw-w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div class="tw-flex lg:tw-hidden">
          <button
            type="button"
            class="tw--m-2.5 tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-p-2.5 tw-text-gray-700"
            @click="mobileMenuOpen = true"
          >
            <span class="tw-sr-only">Open main menu</span>
            <Bars3Icon class="tw-h-6 tw-w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="tw-hidden lg:tw-flex lg:tw-gap-x-12">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900"
            >{{ item.name }}</a
          >
        </div>
        <div class="tw-hidden lg:tw-flex lg:tw-flex-1 lg:tw-justify-end">
          <a href="#" class="tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900"
            >Log in <span aria-hidden="true">&rarr;</span></a
          >
        </div>
      </nav>
      <Dialog
        as="div"
        class="lg:tw-hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="tw-fixed tw-inset-0 tw-z-50" />
        <DialogPanel
          class="tw-fixed tw-inset-y-0 tw-right-0 tw-z-50 tw-w-full tw-overflow-y-auto tw-bg-white tw-px-6 tw-py-6 sm:tw-max-w-sm sm:tw-ring-1 sm:tw-ring-gray-900/10"
        >
          <div class="tw-flex tw-items-center tw-justify-between">
            <a href="#" class="tw--m-1.5 tw-p-1.5">
              <span class="tw-sr-only">Your Company</span>
              <img
                class="tw-h-8 tw-w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              class="tw--m-2.5 tw-rounded-md tw-p-2.5 tw-text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="tw-sr-only">Close menu</span>
              <XMarkIcon class="tw-h-6 tw-w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="tw-mt-6 tw-flow-root">
            <div class="tw--my-6 tw-divide-y tw-divide-gray-500/10">
              <div class="tw-space-y-2 tw-py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="tw--mx-3 tw-block tw-rounded-lg tw-px-3 tw-py-2 tw-text-base tw-font-semibold tw-leading-7 tw-text-gray-900 hover:tw-bg-gray-50"
                  >{{ item.name }}</a
                >
              </div>
              <div class="tw-py-6">
                <a
                  href="#"
                  class="tw--mx-3 tw-block tw-rounded-lg tw-px-3 tw-py-2.5 tw-text-base tw-font-semibold tw-leading-7 tw-text-gray-900 hover:tw-bg-gray-50"
                  >Log in</a
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <div class="tw-relative tw-isolate tw-pt-14">
      <div
        class="tw-absolute tw-inset-x-0 tw--top-40 tw-z--10 tw-transform-gpu tw-overflow-hidden tw-blur-3xl sm:tw--top-80"
        aria-hidden="true"
      >
        <div
          class="tw-relative tw-left-[calc(50%-11rem)] tw-aspect-[1155/678] tw-w-[36.125rem] tw--translate-x-1/2 tw-rotate-[30deg] tw-bg-gradient-to-tr tw-from-[#ff80b5] tw-to-[#9089fc] tw-opacity-30 sm:tw-left-[calc(50%-30rem)] sm:tw-w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
      <div class="tw-py-24 sm:tw-py-32 lg:tw-pb-40">
        <div class="tw-mx-auto tw-max-w-7xl tw-px-6 lg:tw-px-8">
          <div class="tw-mx-auto tw-max-w-2xl tw-text-center">
            <h1
              class="tw-text-4xl tw-font-bold tw-tracking-tight tw-text-gray-900 sm:tw-text-6xl"
            >
              Data to enrich your online business
            </h1>
            <p class="tw-mt-6 tw-text-lg tw-leading-8 tw-text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div class="tw-mt-10 tw-flex tw-items-center tw-justify-center tw-gap-x-6">
              <a
                href="#"
                class="tw-rounded-md tw-bg-indigo-600 tw-px-3.5 tw-py-2.5 tw-text-sm tw-font-semibold tw-text-white tw-shadow-sm hover:tw-bg-indigo-500 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-indigo-600"
                >Get started</a
              >
              <a href="#" class="tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900"
                >Learn more <span aria-hidden="true">→</span></a
              >
            </div>
          </div>
          <div class="tw-mt-16 tw-flow-root sm:tw-mt-24">
            <div
              class="tw--m-2 tw-rounded-xl tw-bg-gray-900/5 tw-p-2 tw-ring-1 tw-ring-inset tw-ring-gray-900/10 lg:tw--m-4 lg:tw-rounded-2xl lg:tw-p-4"
            >
              <img
                src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                alt="App screenshot"
                width="2432"
                height="1442"
                class="tw-rounded-md tw-shadow-2xl tw-ring-1 tw-ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="tw-absolute tw-inset-x-0 tw-top-[calc(100%-13rem)] tw-z--10 tw-transform-gpu tw-overflow-hidden tw-blur-3xl sm:tw-top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          class="tw-relative tw-left-[calc(50%+3rem)] tw-aspect-[1155/678] tw-w-[36.125rem] tw--translate-x-1/2 tw-bg-gradient-to-tr tw-from-[#ff80b5] tw-to-[#9089fc] tw-opacity-30 sm:tw-left-[calc(50%+36rem)] sm:tw-w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Dialog, DialogPanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

const mobileMenuOpen = ref(false);
</script>

