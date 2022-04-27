<script lang="ts">
import RepositorieCard from "@/components/RepositorieCard.vue";
import { useRepositories } from "@/stores/repositories";
import { mapActions, mapState } from "pinia";
import BouncingText from "./BouncingText.vue";

type Repositorie = {
  owner: {
    avatar_url: string;
    login: string;
  };
  name: string;
  description: string;
  id: number;
};

export default {
  props: {
    repositories: [] as Repositorie[],
    isFavoriteList: Boolean,
  },
  components: {
    RepositorieCard,
    BouncingText,
  },
  computed: {
    ...mapState(useRepositories, ["loading", "errorMessage"]),
  },
  methods: {
    ...mapActions(useRepositories, ["addToFavorites", "removeFromFavorites"]),
    handleAddFavoriteRepo(repo: Repositorie) {
      this.addToFavorites(repo);
    },
    handleRemoveFavoriteRepo(repoId: number) {
      this.removeFromFavorites(repoId);
    },
  },
};
</script>

<template>
  <BouncingText v-if="loading" text-to-bouncing="Carregando..." />
  <span
    class="msg"
    v-if="repositories.length === 0 && !loading && !isFavoriteList"
    >{{ errorMessage }}</span
  >
  <div class="repositorie-list" v-if="repositories.length > 0 && !loading">
    <RepositorieCard
      v-for="repo in repositories"
      :key="repo.id"
      :repositorie="repo"
      @add-favorite-repo="handleAddFavoriteRepo"
      @remove-favorite-repo="handleRemoveFavoriteRepo"
      :is-favorite-list="isFavoriteList"
    />
  </div>
</template>

<style lang="scss" scoped>
.msg {
  font-weight: 600;
  font-size: 2.75rem;
  color: #fff;
}
.repositorie-list {
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(3, 1fr);
  overflow: auto;
  position: relative;
  width: 100%;
  padding: 0 20px 20px;
}
</style>
