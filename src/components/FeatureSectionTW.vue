<template>
  <div class="tw-bg-gray-900 tw-py-24 sm:tw-py-32">
    <div class="tw-mx-auto tw-max-w-7xl tw-px-6 lg:tw-px-8">
      <div class="tw-mx-auto tw-max-w-2xl sm:tw-text-center">
        <h2
          class="tw-text-base tw-font-semibold tw-leading-7 tw-text-indigo-400"
        >
          {{ subtitle }}
        </h2>
        <p
          class="tw-mt-2 tw-text-3xl tw-font-bold tw-tracking-tight tw-text-white sm:tw-text-4xl"
        >
          {{ title }}
        </p>
        <p class="tw-mt-6 tw-text-lg tw-leading-8 tw-text-gray-300">
          {{ caption }}
        </p>
      </div>
    </div>
    <div class="tw-relative tw-overflow-hidden tw-pt-16">
      <div class="tw-mx-auto tw-max-w-7xl tw-px-6 lg:tw-px-8">
        <img
          src="../assets/paul-hanaoka-5Iur1y9FtNs-unsplash (2).jpg"
          alt="App screenshot"
          class="tw-mb-[-12%] tw-rounded-xl tw-shadow-2xl tw-ring-1 tw-ring-white/10 tw-object-scale-down"
          width="2432"
          height="1442"
        />
        <div class="tw-relative" aria-hidden="true">
          <div
            class="tw-absolute tw--inset-x-20 tw-bottom-0 tw-bg-gradient-to-t tw-from-gray-900 tw-pt-[7%]"
          />
        </div>
      </div>
    </div>
    <div
      class="tw-mx-auto tw-mt-16 tw-max-w-7xl tw-px-6 sm:tw-mt-20 md:tw-mt-24 lg:tw-px-8"
    >
      <dl
        class="tw-mx-auto tw-grid tw-max-w-2xl tw-grid-cols-1 tw-gap-x-6 tw-gap-y-10 tw-text-base tw-leading-7 tw-text-gray-300 sm:tw-grid-cols-2 lg:tw-mx-0 lg:tw-max-w-none lg:tw-grid-cols-3 lg:tw-gap-x-8 lg:tw-gap-y-16"
      >
        <div
          v-for="feature in features"
          :key="feature.name"
          class="tw-relative tw-pl-9"
        >
          <dt class="tw-inline tw-font-semibold tw-text-white">
            <component
              :is="feature.icon"
              class="tw-absolute tw-left-1 tw-top-1 tw-h-5 tw-w-5 tw-text-indigo-500"
              aria-hidden="true"
            />
            {{ feature.name }}
          </dt>
          {{ ' ' }}
          <dd class="tw-inline">{{ feature.description }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/vue/20/solid';

defineProps<{
  title: string;
  subtitle: string;
  caption: string;
}>();

const features = [
  {
    name: 'Aiming tip',
    description: 'Aim at the square behind the hoop.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Shooting Tip',
    description:
      'Focus on proper hand placement and follow-through when shooting.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Dribbling Tip',
    description:
      'Practice dribbling with fingertips to maintain control and speed.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Footwork Tip',
    description:
      'Work on agility and balance through ladder drills to improve movement on the court.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Passing Tip',
    description:
      'Learn to pass with both hands to become a versatile team player.',
    icon: LockClosedIcon,
  },
  {
    name: 'Teamwork Tip',
    description:
      'Communicate with teammates and always be ready to assist or receive a pass.',
    icon: ServerIcon,
  },
];
</script>
