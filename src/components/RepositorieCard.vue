<template>
  <div class="repositorie">
    <aside class="header">
      <img :src="repositorie.owner.avatar_url" :alt="repositorie.owner.login" />
    </aside>
    <div class="body">
      <p class="title">{{ repositorie.name }}</p>
      <p class="description">{{ repositorie.description }}</p>
      <button
        v-if="!isFavoriteList"
        @click="$emit('addFavoriteRepo', repositorie)"
      >
        Adicionar aos favoritos
      </button>
      <button
        v-if="isFavoriteList"
        @click="$emit('removeFavoriteRepo', repositorie.id)"
      >
        Remover dos favoritos
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Repositorie = {
  owner: {
    avatar_url: string;
    login: string;
  };
  name: string;
  description: string;
  id: number;
};

defineProps<{ repositorie: Repositorie; isFavoriteList: boolean }>();
defineEmits<{
  (e: "addFavoriteRepo", repo: Repositorie): void;
  (e: "removeFavoriteRepo", repoId: number): void;
}>();
</script>

<style lang="scss" scoped>
.repositorie {
  width: 100%;
  display: flex;
  background: linear-gradient(to bottom, #fff, #cecece);
  padding: 15px;
  border-radius: 8px;
  height: 250px;
  animation: repoanimate 0.6s;

  aside.header {
    margin-right: 20px;

    img {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      margin: 0 auto;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    .title {
      font-size: 1.75rem;
      font-weight: 700;
      margin-bottom: 1.25rem;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      color: var(--vt-c-black-mute);
    }

    .description {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      font-weight: 400;
      font-size: 0.75rem;
      color: var(--vt-c-black-mute);
    }

    button {
      align-self: end;
      margin-top: auto;
      height: 40px;
      padding: 0 20px;
      border-radius: 8px;
      border: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 1rem;
      background: radial-gradient(
        circle farthest-corner at 12.3% 19.3%,
        rgba(85, 88, 218, 1) 0%,
        rgba(95, 209, 249, 1) 100.2%
      );
      color: #fff;
      font-weight: 700;
      transition: filter 0.2s ease-in-out, transform 0.2s ease-in-out;

      &:hover {
        filter: saturate(200%);
        transform: scale(1.1);
      }
    }
  }
}
</style>
