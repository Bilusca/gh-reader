import FavoriteReposViewVue from "@/views/FavoriteReposView.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/favorite-repos",
      name: "favoriteRepos",
      component: FavoriteReposViewVue,
    },
  ],
});

export default router;
