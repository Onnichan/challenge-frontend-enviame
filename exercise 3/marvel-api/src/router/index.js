import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import NotFoundView from "../views/NotFound.vue";
import CharacterView from "../views/Character.vue";

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
        {
            path: "/character:id",
            name: "character",
            component: CharacterView,
        },
    ],
});

export default router;
