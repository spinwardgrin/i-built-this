<template>
  <div class="tw-bg-gray-900">
    <header class="tw-absolute tw-inset-x-0 tw-top-0 tw-z-50">
      <nav
        class="tw-flex tw-items-center tw-justify-between"
        aria-label="Global"
      >
        <div class="tw-flex lg:tw-flex-1">
          <span class="tw-sr-only">Building blocks</span>
          <img
            class="tw-h-24 tw-w-auto"
            src="~assets/lego logo cropped.png"
            alt=""
          />
        </div>
        <div class="tw-flex lg:tw-hidden"></div>
        <div class="tw-hidden lg:tw-flex lg:tw-gap-x-12">
          <router-link
            v-for="item in navigation"
            :to="{ path: item.path, hash: item.hash }"
            :key="item.name"
            class="tw-text-sm tw-font-semibold tw-leading-6 tw-text-white"
            >{{ item.name }}</router-link
          >
        </div>
        <div class="tw-hidden lg:tw-flex lg:tw-flex-1 lg:tw-justify-end"></div>
      </nav>
    </header>

    <div class="tw-relative tw-isolate tw-overflow-hidden tw-pt-14">
      <img
        v-if="false"
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        class="tw-absolute tw-inset-0 tw-z--10 tw-h-full tw-w-full tw-object-cover"
      />
      <div
        class="tw-absolute tw-inset-y--10 tw--top-40 tw-z--10 tw-transform-gpu sm:tw--top-80"
        aria-hidden="true"
      >
        <slot />
        <div
          class="tw-relative tw-left-[calc(50%-11rem)] tw-aspect-[1155/678] tw-w-[36.125rem] tw--translate-x-1/2 tw-rotate-[30deg] tw-bg-gradient-to-tr tw-from-[#ff80b5] tw-to-[#9089fc] tw-opacity-20 sm:tw-left-[calc(50%-30rem)] sm:tw-w-[72.1875rem]"
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
      <div class="tw-mx-auto tw-max-w-2xl tw-py-32 sm:tw-py-48 lg:tw-py-56">
        <div class="tw-hidden sm:tw-mb-8 sm:tw-flex sm:tw-justify-center">
          <div
            class="tw-relative tw-bg-gray-900 tw-rounded-full tw-px-3 tw-py-1 tw-text-sm tw-leading-6 tw-text-gray-400 tw-ring-1 tw-ring-white/10 hover:tw-ring-white/20"
          >
            {{ cta }}
            <router-link to="/playing" class="tw-font-semibold tw-text-white"
              ><span class="tw-absolute tw-inset-0" aria-hidden="true" />Read
              more <span aria-hidden="true">&rarr;</span></router-link
            >
          </div>
        </div>
        <div class="tw-text-center">
          <h1
            class="tw-text-4xl tw-font-bold tw-tracking-tight tw-text-white sm:tw-text-6xl tw-case-upper"
          >
            {{ title }}
          </h1>
          <p class="tw-mt-6 tw-text-lg tw-leading-8 tw-text-gray-300">
            {{ caption }}
          </p>
          <div
            class="tw-mt-10 tw-flex tw-items-center tw-justify-center tw-gap-x-6"
          >
            <router-link
              :to="{ path: '', hash: '#ai' }"
              class="tw-rounded-md tw-bg-indigo-500 tw-px-3.5 tw-py-2.5 tw-text-sm tw-font-semibold tw-text-white tw-shadow-sm hover:tw-bg-indigo-400 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-indigo-400"
              >Chat with AI</router-link
            >
            <router-link
              to="/playing"
              class="tw-text-sm tw-font-semibold tw-leading-6 tw-text-white"
              >playing <span aria-hidden="true">→</span></router-link
            >
          </div>
        </div>
      </div>
      <div
        class="tw-absolute tw-inset-x-0 tw-top-[calc(100%-13rem)] tw-z--10 tw-transform-gpu tw-overflow-hidden tw-blur-3xl sm:tw-top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          class="tw-relative tw-left-[calc(50%+3rem)] tw-aspect-[1155/678] tw-w-[36.125rem] tw--translate-x-1/2 tw-bg-gradient-to-tr tw-from-[#ff80b5] tw-to-[#9089fc] tw-opacity-20 sm:tw-left-[calc(50%+36rem)] sm:tw-w-[72.1875rem]"
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

<script setup lang="ts">
defineProps<{
  title: string;
  caption: string;
  cta: string;
}>();

const navigation = [
  { name: 'About me', hash: '#aboutme', path: '' },
  { name: 'AI', hash: '#ai', path: '' },
  { name: 'Pricing', hash: '#pricing', path: '' },
];
</script>
