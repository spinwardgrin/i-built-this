<template>
  <div>
    <pre
      class="car character shimmer-text"
      v-if="visible"
      @click="repeatAnimation"
    >
                         ___..............._
                 __.. ' _'.""""""\""""""""- .`-._
       ______.-'         (_) |      \           ` \`-. _
      /_       --------------'-------\---....______\__`.`  -..___
      | T      _.----._           Xxx|x...           |          _.._`--. _
      | |    .' ..--.. `.         XXX|XXXXXXXXXxx==  |       .'.---..`.     -._
      \_j   /  /  __  \  \        XXX|XXXXXXXXXXX==  |      / /  __  \ \        `-.
       _|  |  |  /  \  |  |       XXX|""'            |     / |  /  \  | |          |
      |__\_j  |  \__/  |  L__________|_______________|_____j |  \__/  | L__________J
         `'\ \      / ./__________________________________\ \      / /___________\
            `.`----'.'   dp                                `.`----'.'
              `""""'                                         `""""'
      </pre
    >
  </div>
</template>

<script setup lange="ts">
function repeatAnimation() {
  const car = document.querySelector('.car');
  car.classList.remove('character');
  void car.offsetWidth;
  car.classList.add('character');
}

defineProps({
  visible: Boolean,
});
</script>

<style>
.car {
  color: lightgreen;
}
@keyframes character-animation {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.character {
  animation: character-animation 0.5s ease-in-out forwards;
  animation-delay: calc(var(--index) * 0.5s);
  opacity: 1;
}

.shimmer-text {
  background: -webkit-linear-gradient(left, red, orange, yellow, green, blue);
  -webkit-background-clip: text;
  animation: shimmer 5s linear infinite;
}

@keyframes shimmer {
  0% {
    color: transparent;
  }
  25% {
    color: orange;
  }
  50% {
    color: yellow;
  }
  75% {
    color: green;
  }
  100% {
    color: transparent;
  }
}
</style>
