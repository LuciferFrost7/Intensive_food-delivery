import HomePage from "@/pages/page.vue";
import RestaurantsPage from "@/pages/restaurants/page.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/restaurants",
      name: "restaurants",
      component: RestaurantsPage,
    },
  ],
});

export default router;
