<template>
  <section class="favorites">
    <h1>Repositórios favoritos</h1>
    <RepositoriesList :repositories="favoritesRepos" :is-favorite-list="true" />
  </section>
</template>
<script lang="ts" module>
import RepositoriesList from "@/components/RepositoriesList.vue";
import { useRepositories } from "@/stores/repositories";
import { mapState } from "pinia";

export default {
  components: { RepositoriesList },
  computed: {
    ...mapState(useRepositories, ["favoritesRepos"]),
  },
};
</script>
<style lang="scss" scoped>
.favorites {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: bold;
    font-size: 3.25rem;
    margin-bottom: 50px;
    color: #fff;
  }
}
</style>
