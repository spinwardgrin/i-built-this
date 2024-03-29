<template>
  <div>
    <HeroWithBackgroundImageTW
      title="about my life"
      caption="my is aiden.i am 8 years old. i made this website. i hope you like it."
      cta="learn more"
      ><WavyHeroTW
        :colors="['#f0f', '#0ff', '#dcf70c', 'red', 'blue']"
        :waveWidth="55"
        :backgroundFill="'#000'"
        :blur="0"
        :speed="'slow'"
        :waveOpacity="0.5"
    /></HeroWithBackgroundImageTW>

    <AboutUsTW
      id="aboutme"
      title="about me"
      caption="i am aiden.i am 8 years old.i like to
    build things.i build this website.i hope you like it."
      :content="aboutMeContent"
      :stats="aboutMeStats"
    />
    <FeatureSectionInPanelTW
      id="ai"
      title="ask gemini"
      anything
      title2=""
      caption=""
      :features="chatFeatures"
    >
      <ChatWithGemini functionName="askGemini"
    /></FeatureSectionInPanelTW>
    <PricingSectionTW
      id="pricing"
      subtitle="My Dad built the template, I built the site."
      caption="An app is like a collection of building blocks."
      :chip-text="daysRemaining"
      :tiers="pricingTiers"
      title="you can build it too if you want."
    />
    <CTATemplateTW
      title="rock climbing"
      subtitle="the benefits of rock climbing"
      :benefits="[
        'Conquering towering peaks with courage.',
        'Inspiring others with unwavering perseverance.',
        'Fostering camaraderie and teamwork.',
        'Demonstrating exceptional problem-solving skills.',
        'Showcasing remarkable resilience in tough conditions.',
        'Elevating climbing with innovative techniques.',
      ]"
    />
    <FeatureSectionTW
      title="basketball"
      subtitle="the game of kings"
      caption="the sport of legends, played by the best of the best."
    />

    <StatsWithImageTW
      title="supercars"
      subtitle="the fastest cars in the world"
      caption="the most powerful cars on the planet. the peak of engineering."
      :stats="superCarStats"
    />
  </div>
</template>

<script setup lang="ts">
const aboutMeContent = ref([
  'i love basketball,swiming and rock climbing.i also iove to build things.',
  'when i grow up i want to be an engineer i want to build things that help people.',
  'I , watch  my dad code and i wanted to learn how to code too. so i did.',
]);

const aboutMeStats = [
  { label: 'Age', value: '8' },
  { label: 'Hobbies', value: 'Coding, Drawing, Playing and building things' },
  { label: 'Location', value: 'germany' },
  { label: 'School', value: 'Elementary' },
];
const chatFeatures = ref([
  {
    name: 'Chat with Gemini',
    description: 'She is a friendly AI that can answer your questions',
    icon: 'chat',
  },
  {
    name: 'Want to know about music?',
    description:
      'Who is the best singer in the world? What is the most popular song?',
    icon: 'clock',
  },
  {
    name: 'Ask Gemini about tall buildings',
    description: 'What is the tallest building in the world?',
    icon: 'settings',
  },
]);

const superCarStats = [
  { id: 1, name: 'Top Speed', value: '300 mph' },
  { id: 2, name: 'Acceleration', value: '0-60 in 2.5 seconds' },
  { id: 3, name: 'Horsepower', value: '1,000 hp' },
  { id: 4, name: 'Engine', value: 'V8' },
];

const pricingTiers = [
  {
    name: 'Get a link to the Github repo',
    id: 'tier-startup',
    href: 'https://square.link/u/7ZMg4tZy',
    price: '$19',
    frequency: { value: 'sale', priceSuffix: 'one time' },
    description: 'View the code that made it possible for me to build this.',
    features: [
      'Vue 3, Vite, and Quasar, with Typescript and the Composition API',
      'Tailwind styled Quasar components using UnoCSS',
      'Auto-imports of Vue imports and Quasar components',
      'Gemini AI Chat using Firebase integration',
      'Github action to automatically deploy to Firebase via CI/CD',
    ],
    mostPopular: true,
  },
];

// days remaining until May 1st
const daysRemaining = computed(() => {
  const today = new Date();
  const may1 = new Date(today.getFullYear(), 4, 1);
  const diff = may1.getTime() - today.getTime();
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  const daysRemaining = `${days} days left`;
  return daysRemaining;
});
</script>

<style scoped>
.stats {
  color: red;
}
</style>
