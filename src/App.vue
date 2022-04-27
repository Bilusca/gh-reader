<template>
  <main class="app">
    <HeaderComponent />

    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue";
</script>

<style lang="scss">
@import "./assets/base.scss";

.app {
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 50px 25px;

  background-image: radial-gradient(
    circle farthest-corner at 12.3% 19.3%,
    rgba(85, 88, 218, 1) 0%,
    rgba(95, 209, 249, 1) 100.2%
  );
}

::-webkit-scrollbar {
  width: 10px;
  border-radius: 15px;
}

::-webkit-scrollbar-thumb {
  border-radius: 15px;
  background: rgba(85, 88, 218, 1);
}
</style>
