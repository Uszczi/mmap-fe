import MapPage from "@/views/MapPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "map",
      component: MapPage,
    },
  ],
});

export default router;
