<template>
  <div class="waviy">
    <span
      v-for="(letter, index) in textToBouncing.split('')"
      :style="`--i: ${index + 1}`"
      :key="letter"
      >{{ letter }}</span
    >
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  textToBouncing: string;
}>();
</script>

<style lang="scss">
.waviy {
  margin-top: 50px;
  position: relative;
  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
  font-size: 5rem;
  font-weight: 700;

  span {
    position: relative;
    display: inline-block;
    color: #fff;
    text-transform: uppercase;
    animation: waviy 1s infinite;
    animation-delay: calc(0.1s * var(--i));
  }
}
</style>
