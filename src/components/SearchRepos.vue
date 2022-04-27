<template>
  <div class="searchInput">
    <input
      type="text"
      v-model="username"
      placeholder="Busque os repositórios pelo usuário"
      @keyup.enter="searchRepos(username)"
    />
    <button @click="searchRepos(username)">Buscar repositórios</button>
  </div>
</template>

<script lang="ts">
import { mapActions } from "pinia";
import { reposByUser } from "../services/api";
import { useRepositories } from "../stores/repositories";

export default {
  methods: {
    ...mapActions(useRepositories, [
      "addRepositories",
      "setLoading",
      "setErrorMessage",
    ]),
    async searchRepos(username: string) {
      this.setLoading(true);
      try {
        const { data } = await reposByUser(username);

        if (data.length === 0) {
          this.setErrorMessage("Nenhum repositório encontrado");
        }

        this.setLoading(false);
        this.addRepositories(data);
      } catch (err) {
        console.log(err);
        this.setErrorMessage("Ocorreu um erro na busca!");
        this.setLoading(false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.searchInput {
  margin-bottom: 50px;

  input {
    height: 50px;
    width: 450px;
    border-radius: 8px;
    border: 1px solid var(--vt-c-black-mute);
    margin-right: 25px;
    padding: 0 20px;
    font-size: 20px;
  }

  button {
    height: 50px;
    padding: 0 20px;
    border-radius: 8px;
    border: 1px solid var(--vt-c-black-mute);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 20px;
    background: #fff;
    font-weight: 700;
    transition: 0.2s ease-in-out;

    &:hover {
      background: radial-gradient(
        circle farthest-corner at 12.3% 19.3%,
        rgba(85, 88, 218, 1) 0%,
        rgba(95, 209, 249, 1) 100.2%
      );
      color: #fff;
    }
  }
}
</style>
