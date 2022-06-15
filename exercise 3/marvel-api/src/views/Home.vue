<script setup>
import { onBeforeMount, onMounted, ref } from "vue";
import Grid from "../components/layout/Grid.vue";
import Sidebar from "../components/ui/Sidebar.vue";
import { getCharacters } from "../api/index";
import Loading from "../components/ui/Loading.vue";
import Modal from '../components/ui/Modal.vue';

let showSidebar = ref(false);
let characters = ref([]);
let limit = ref(20);
let offset = ref(0);
let loading = ref(true);
let showModal = ref(false);

onBeforeMount(async () => {
    const resp = await getCharacters(limit.value, offset.value);
    offset.value += 20;
    loading.value = false;
    characters.value = [...characters.value, ...resp.data.results];
});

onMounted(() => {
    window.addEventListener("scroll", infiniteScroll);
});

const infiniteScroll = async () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        const resp = await getCharacters(limit.value, offset.value);
        characters.value = [...characters.value, ...resp.data.results];
        offset.value += 20;
    }
};

const addNewCharacter = (e) => {
    e.preventDefault();

    characters.value = [...characters.value];
};

const editCharacter = (e) => {
    e.preventDefault();
};
</script>

<template>
    <main class="content">
        <!-- <Sidebar v-if="showSidebar"></Sidebar> -->
        <Teleport to="body">
            <Modal v-if="!showModal"></Modal>
        </Teleport>
        <Loading v-if="loading"></Loading>
        <Grid :characters="characters" v-else></Grid>
    </main>
</template>
<style scoped>
.content {
    padding: 40px var(--px-container);
}
</style>
