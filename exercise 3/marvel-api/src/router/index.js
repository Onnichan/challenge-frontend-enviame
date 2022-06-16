import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import NotFoundView from "../views/NotFound.vue";
import CharacterView from "../views/Character.vue";
import Exercise1View from "../views/Exercise1.vue";
import Exercise2View from "../views/Exercise2.vue";

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
        {
            path: "/exercise1",
            name: "exercise1",
            component: Exercise1View,
        },
        {
            path: "/exercise2",
            name: "exercise2",
            component: Exercise2View,
        },
    ],
});

export default router;
