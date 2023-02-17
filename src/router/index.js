import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CharactersView from "../views/CharactersView.vue";
import CharacterDetailView from "../views/CharacterDetail.vue";
import FilmsView from "../views/FilmsView.vue";
import FilmDetailView from "../views/FilmDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/character",
      name: "character",
      component: CharactersView,
    },
    {
      path: "/films",
      name: "films",
      component: FilmsView,
    },
    {
      path: "/films/:id",
      name: "film_detail",
      component: FilmDetailView,
    },
    {
      path: "/character/:id",
      name: "characters_detail",
      component: CharacterDetailView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
