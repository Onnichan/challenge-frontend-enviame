<script setup>
import { onMounted, ref } from "vue";
import Grid from "../components/layout/Grid.vue";
import Sidebar from "../components/ui/Sidebar.vue";
import { getCharacters } from "../api/index";

let showSidebar = ref(false);
const characters = ref([]);

onMounted(async () => {
    const resp = await getCharacters();
    characters.value = resp.data.results;
    console.log(characters.value);
});
</script>

<template>
    <main class="content">
        <Sidebar v-if="showSidebar"></Sidebar>
        <Grid :characters="characters"></Grid>
    </main>
</template>

<style scoped>
.content{
    padding: 0 var(--px-container);        
}
</style>
