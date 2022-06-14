import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import NotFoundView from "../views/NotFound.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "notFound",
            component: NotFoundView,
        },
    ],
});

export default router;
