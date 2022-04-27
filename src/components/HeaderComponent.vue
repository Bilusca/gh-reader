<template>
  <aside class="header">
    <header>
      <img src="../assets/gh.png" alt="GH Explorer" />
      <h1>GH Explorer</h1>
      <nav>
        <RouterLink active-class="active" to="/">Home</RouterLink>
        <RouterLink active-class="active" to="/favorite-repos">
          Favorite Repos
        </RouterLink>
      </nav>
    </header>
  </aside>
</template>
<script lang="ts">
import { RouterLink } from "vue-router";

export default {
  components: { RouterLink },
};
</script>
<style lang="scss" scoped>
.header {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 3.25rem;
    color: #fff;
    margin-bottom: 30px;
    font-weight: 700;
  }

  img {
    width: 300px;
    height: auto;
    filter: invert(100);
  }

  nav {
    display: flex;
    justify-content: space-between;

    a {
      color: #fff;
      font-size: 1.75rem;
      font-weight: 500;
      text-decoration: none;
      transition: color 0.2s ease-in-out;

      &:hover {
        color: var(--vt-c-black-mute);
      }

      &.active {
        color: var(--vt-c-black-mute);
      }
    }
  }
}
</style>
