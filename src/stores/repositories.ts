import { defineStore } from "pinia";
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster({ position: "top-right", duration: 1500 });

type Repositorie = {
  owner: {
    avatar_url: string;
    login: string;
  };
  name: string;
  description: string;
  id: number;
};

interface RepositoriesState {
  repositories: Repositorie[];
  favoritesRepos: Repositorie[];
  loading: boolean;
  errorMessage: string;
}

export const useRepositories = defineStore({
  id: "repositories",
  state: (): RepositoriesState => ({
    repositories: [] as Repositorie[],
    favoritesRepos: [] as Repositorie[],
    loading: false,
    errorMessage: "Faça aqui a busca dos seus repositórios favoritos",
  }),
  actions: {
    addRepositories(repositories: Repositorie[]): void {
      this.repositories = repositories;
    },
    addToFavorites(repositorie: Repositorie): void {
      const repositorieExists = this.favoritesRepos.findIndex(
        (favoriteRepo) => favoriteRepo.id === repositorie.id
      );

      if (repositorieExists === -1) {
        this.favoritesRepos = [...this.favoritesRepos, repositorie];

        toaster.success("Repoitório adicionado");
      } else {
        toaster.error("Esse repośtorio já foi adicionado");
      }
    },
    removeFromFavorites(repoId: number): void {
      this.favoritesRepos = this.favoritesRepos.filter(
        (repo) => repo.id !== repoId
      );

      toaster.success("Repositório removido");
    },
    setLoading(loading: boolean) {
      this.loading = loading;
    },
    setErrorMessage(msg: string) {
      this.errorMessage = msg;
    },
  },
  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: ["favoritesRepos"] }],
  },
});
