<script setup>
import {onMounted, ref} from 'vue';
import Grid from "../components/layout/Grid.vue";
import Container from "../components/layout/Container.vue";
import Sidebar from "../components/ui/Sidebar.vue";
import {getCharacters} from '../api/index';

let showSidebar = ref(true);
const characters = ref([]);

onMounted (async () => {
    const resp = await getCharacters();
    console.log(resp);
});

</script>

<template>
    <Sidebar v-if="showSidebar"></Sidebar>
    <Grid></Grid>
</template>
