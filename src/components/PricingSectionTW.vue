<template>
  <div class="tw-bg-gray-900 tw-py-24 sm:tw-py-32">
    <div class="tw-mx-auto tw-max-w-7xl tw-px-6 lg:tw-px-8">
      <div class="tw-mx-auto tw-max-w-4xl tw-text-center">
        <h2
          class="tw-text-base tw-font-semibold tw-leading-7 tw-text-indigo-400"
        >
          {{ subtitle }}
        </h2>
        <p
          class="tw-mt-2 tw-text-4xl tw-font-bold tw-tracking-tight tw-text-white sm:tw-text-5xl"
        >
          {{ title }}
        </p>
      </div>
      <p
        class="tw-mx-auto tw-mt-6 tw-max-w-2xl tw-text-center tw-text-lg tw-leading-8 tw-text-gray-300"
      >
        {{ caption }}
      </p>
      <div
        class="tw-isolate tw-mx-auto tw-mt-10 tw-grid tw-max-w-md tw-grid-cols-1 tw-gap-8 lg:tw-mx-0 lg:tw-max-w-none"
        :class="`lg:tw-grid-cols-${tiers.length}`"
      >
        <div
          v-for="tier in tiers"
          :key="tier.id"
          class="tw-bg-white/5 tw-ring-2 tw-ring-indigo-500 tw-rounded-3xl tw-p-8 xl:tw-p-10 tw-grid-cols-2"
        >
          <div class="tw-flex tw-items-center tw-justify-between tw-gap-x-4">
            <h3
              :id="tier.id"
              class="tw-text-lg tw-font-semibold tw-leading-8 tw-text-white"
            >
              {{ tier.name }}
            </h3>
            <p
              v-if="tier.mostPopular"
              class="tw-rounded-full tw-bg-indigo-500 tw-px-2.5 tw-py-1 tw-text-xs tw-font-semibold tw-leading-5 tw-text-white tw-text-center"
            >
              {{ chipText }}
            </p>
          </div>
          <p class="tw-mt-4 tw-text-sm tw-leading-6 tw-text-gray-300">
            {{ tier.description }}
          </p>
          <p class="tw-mt-6 tw-flex tw-items-baseline tw-gap-x-1">
            <span
              class="tw-text-4xl tw-font-bold tw-tracking-tight tw-text-white"
              >{{ tier.price }}</span
            >
            <span
              class="tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-300"
              >{{ tier.frequency.priceSuffix }}</span
            >
          </p>
          <a
            :href="tier.href"
            :aria-describedby="tier.id"
            class="tw-bg-indigo-500 tw-text-white tw-shadow-sm hover:tw-bg-indigo-400 focus-visible:tw-outline-indigo-500 tw-mt-6 tw-block tw-rounded-md tw-py-2 tw-px-3 tw-text-center tw-text-sm tw-font-semibold tw-leading-6 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2'"
            >Buy now</a
          >
          <ul
            role="list"
            class="tw-mt-8 tw-space-y-3 tw-text-sm tw-leading-6 tw-text-gray-300 xl:tw-mt-10"
          >
            <li
              v-for="feature in tier.features"
              :key="feature"
              class="tw-flex tw-gap-x-3"
            >
              <CheckIcon
                class="tw-h-6 tw-w-5 tw-flex-none tw-text-white"
                aria-hidden="true"
              />
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/20/solid';

defineProps<{
  title: string;
  subtitle: string;
  caption: string;
  chipText: string;
  tiers: {
    name: string;
    id: string;
    href: string;
    price: string;
    frequency: { value: string; priceSuffix: string };
    description: string;
    features: string[];
    mostPopular: boolean;
  }[];
}>();
</script>
