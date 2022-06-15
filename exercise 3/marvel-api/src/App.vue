<script setup>
import { RouterView } from "vue-router";
import Header from "./components/ui/Header.vue";
</script>
<template>
    <Header></Header>
    <RouterView></RouterView>
</template>

<style>
@import "./assets/base.css";
</style>
