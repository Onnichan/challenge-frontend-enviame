<script setup>
import Logo from "../Logo.vue";
import { RouterLink } from "vue-router";
</script>
<template>
    <header class="header">
        <nav class="header__nav">
            <router-link to="/" class="header__nav-img">
                <Logo width="100"></Logo>
            </router-link>
            <ul class="header__nav-list">
                <routerLink to="/" class="header_nav-item">
                    <a href="#" class="header__nav-item link">About</a>
                </routerLink>
                <router-link to="/" class="header_nav-item">
                    <a href="#" class="header__nav-item link">Favorites</a>
                </router-link>
                <router-link to="/" class="header_nav-item">
                    <a href="#" class="header__nav-item link">Comics</a>
                </router-link>
            </ul>
        </nav>
    </header>
</template>
<style scoped>
.header {
    background-color: var(--bg-header-color);
    color: white;
    width: 100%;
    padding: 20px var(--px-container);
    position: fixed;
    margin-bottom: 200px;
    z-index: 10;
}
.header__nav {
    margin: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header__nav-list {
    display: flex;
    list-style: none;
    gap: 20px;
}

.header__nav-item.link {
    outline: none;
    text-decoration: none;
    color: white;
    font-size: 1.2em;
}
</style>
