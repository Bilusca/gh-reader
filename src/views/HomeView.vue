<template>
  <section class="home">
    <h1>Busque os repositórios pelo nome do usuário</h1>
    <SearchRepos />
    <RepositoriesList :repositories="repositories" :is-favorite-list="false" />
  </section>
</template>

<script lang="ts" module>
import { mapState } from "pinia";
import SearchRepos from "@/components/SearchRepos.vue";
import RepositoriesList from "@/components/RepositoriesList.vue";
import { useRepositories } from "@/stores/repositories";

export default {
  components: { SearchRepos, RepositoriesList },
  computed: {
    ...mapState(useRepositories, ["repositories"]),
  },
};
</script>

<style lang="scss" scoped>
.home {
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
