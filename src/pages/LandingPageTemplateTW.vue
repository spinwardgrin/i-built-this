<template>
  <div class="tw-bg-gray-900">
    <main>
      <!-- Hero section -->
      <HeroWithBackgroundImageTW
        title="I made this"
        caption="My name is Aiden. I am 8 years old. I want to show you my creation."
        cta="What made this possible"
        ><WavyHeroTW
          :colors="[
            '#34D399', // Green
            '#EF4444', // Red
            '#FBBF24', // Yellow
            '#10B981', // Green
            '#38bdf8',
          ]"
          :blur="0"
          :waveWidth="13"
          backgroundFill="#101827" /></HeroWithBackgroundImageTW
      ><AboutUsTW
        id="aboutme"
        title="About me"
        caption="I am Aiden. I am 8 years old. I love to build things. I built this website with my dad. I hope you like it."
        :content="aboutUsContent"
      /><FeatureSectionInPanelTW
        id="ai"
        title="Ask Gemini AI"
        title2="anything you want"
        caption="My dad helped with this one."
        :features="chatFeatures"
      >
        <ChatWithGemini function-name="askGemini" /></FeatureSectionInPanelTW
      ><PricingSectionTW id="pricing" />
      <CTATemplateTW
        id="features"
        :benefits="[
          'Conquering towering peaks with courage.',
          'Inspiring others with unwavering perseverance.',
          'Fostering camaraderie and teamwork.',
          'Demonstrating exceptional problem-solving skills.',
          'Showcasing remarkable resilience in tough conditions.',
          'Elevating climbing with innovative techniques.',
        ]"
        title="Climbing mountains"
        subtitle="The benefits of rock climbing"
      />
      <FeatureSectionTW
        title="Basketball"
        subtitle="The Game of Kings"
        caption="The sport of legends, played by the best of the best."
      />

      <StatsWithImageTW
        title="Supercars"
        subtitle="The Fastest Cars in the World"
        caption="The most powerful cars on the planet. The peak of engineering."
        :stats="stats"
      />
    </main>

    <LandingPageFooter />
  </div>
</template>

<script setup>
const aboutUsContent = [
  'I love basketball, swimming and rock climbing. I also love to build things.',
  'When I grow up I want to become an engineer. I want to build buildings, cars, or robots.',
  'I watch my Dad code at night before we go to bed. I really liked building this with him.',
];

const chatFeatures = [
  {
    name: 'Real-time chat',
    description: 'Chat with Gemini.',
    icon: 'chat',
  },
  {
    name: 'Simple implementation',
    description: 'Drop in Vue component.',
    icon: 'code',
  },
  {
    name: 'Firebase integration',
    description: 'Easy installation with Firebase extension.',
    icon: 'add',
  },
];

const stats = [
  { id: 1, name: 'Number of Lamborghini cars sold annually', value: '8,000+' },
  { id: 2, name: 'Top speed of Lamborghini Aventador', value: '217 mph' },
  {
    id: 3,
    name: 'Acceleration of Lamborghini Huracan EVO',
    value: '0-60 mph in 2.5 seconds',
  },
  { id: 4, name: 'Price of Lamborghini Urus SUV', value: '$200,000+' },
];
</script>
