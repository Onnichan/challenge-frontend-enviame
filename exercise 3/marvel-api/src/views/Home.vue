<script setup>
import { onBeforeMount, onMounted } from "vue";
import { getCharacters } from "../api/index";
import { useModalStore } from "../stores/modal";
import { useCharacterStore } from "../stores/character";
import { storeToRefs } from "pinia";
import Grid from "../components/layout/Grid.vue";
import Loading from "../components/ui/Loading.vue";
import Modal from "../components/ui/Modal.vue";

const { showModal } = storeToRefs(useModalStore());
const storeCharacter = useCharacterStore();
const { addCharacterToFinish, setLoading, addOffset } = useCharacterStore();

onBeforeMount(async () => {
    const resp = await getCharacters(
        storeCharacter.limit,
        storeCharacter.offset
    );
    addOffset();
    setLoading(false);
    addCharacterToFinish(resp.data.results);
});

onMounted(() => {
    window.addEventListener("scroll", infiniteScroll);
});

const infiniteScroll = async () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        const resp = await getCharacters(
            storeCharacter.limit,
            storeCharacter.offset
        );
        addCharacterToFinish(resp.data.results);
        addOffset();
    }
};
</script>

<template>
    <main class="content">
        <Loading v-if="storeCharacter.loading"></Loading>
        <Grid :characters="storeCharacter.characters" v-else></Grid>
        <Teleport to="body">
            <Modal v-show="showModal"></Modal>
        </Teleport>
    </main>
</template>
<style scoped>
.content {
    padding: 40px var(--px-container);
}
</style>
