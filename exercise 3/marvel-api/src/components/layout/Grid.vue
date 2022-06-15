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
    <div class="grid">
        <Card
            v-for="character in characters"
            :key="character.id"
            :character="character"
        ></Card>
    </div>
</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}
</style>
