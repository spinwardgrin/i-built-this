<template>
  <div class="tw-relative tw-bg-white">
    <q-img
      class="tw-h-56 tw-w-full tw-bg-gray-50 tw-object-scale-down lg:tw-absolute lg:tw-inset-y-0 lg:tw-left-0 lg:tw-h-full lg:tw-w-1/2"
      src="../assets/toni-zaat-36TnchciHFE-unsplash.jpg"
      alt=""
    />
    <div class="tw-mx-auto tw-grid tw-max-w-7xl lg:tw-grid-cols-2">
      <div
        class="tw-px-6 tw-pb-24 tw-pt-16 sm:tw-pb-32 sm:tw-pt-20 lg:tw-col-start-2 lg:tw-px-8 lg:tw-pt-32"
      >
        <div class="tw-mx-auto tw-max-w-2xl lg:tw-mr-0 lg:tw-max-w-lg">
          <h2
            class="tw-text-base tw-font-semibold tw-leading-8 tw-text-indigo-600"
          >
            {{ subtitle }}
          </h2>
          <p
            class="tw-mt-2 tw-text-3xl tw-font-bold tw-tracking-tight tw-text-gray-900 sm:tw-text-4xl"
          >
            {{ title }}
          </p>
          <p class="tw-mt-6 tw-text-lg tw-leading-8 tw-text-gray-600">
            {{ caption }}
          </p>
          <dl
            class="tw-mt-16 tw-grid tw-max-w-xl tw-grid-cols-1 tw-gap-8 sm:tw-mt-20 sm:tw-grid-cols-2 xl:tw-mt-16"
          >
            <div
              v-for="stat in stats"
              :key="stat.id"
              class="tw-flex tw-flex-col tw-gap-y-3 tw-border-l tw-border-gray-900/10 tw-pl-6"
            >
              <dt class="tw-text-sm tw-leading-6 tw-text-gray-600">
                {{ stat.name }}
              </dt>
              <dd
                class="tw-order-first tw-text-3xl tw-font-semibold tw-tracking-tight tw-text-gray-900"
              >
                {{ stat.value }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  stats: { id: number; name: string; value: string }[];
  subtitle: string;
  title: string;
  caption: string;
}>();
</script>
