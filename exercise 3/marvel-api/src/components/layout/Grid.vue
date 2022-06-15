<script setup>
import Card from "../ui/Card.vue";
const props = defineProps({
    characters: {
        type: Array,
        required: true,
    },
});
</script>
<template>
    <section class="grid">
        <span class="grid__title">Characters of Marvel</span>
        <div class="grid__body">
            <Card
                v-for="character in characters"
                :key="character.id"
                :character="character"
            ></Card>
        </div>
    </section>
</template>

<style scoped>
.grid {
    margin-top: 80px;
}
.grid__title {
    display: block;
    text-align: center;
    margin-bottom: 20px;
    font-size: 2em;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--bg-logo);
}
.grid__body {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}
</style>
