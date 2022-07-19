<script setup>
import { formateDate } from "../../util/date.js";
import { RouterLink } from "vue-router";
import { useModalStore } from "../../stores/modal.js";

const storeModal = useModalStore();
const props = defineProps({
    character: {
        type: Object,
        required: true,
    },
});

function pathLocation(id) {
    return `/character/${id}`;
}

function sendId(id) {
    storeModal.show();
    storeModal.changeButton(true);
    storeModal.changeTitle();
    const charId = document.getElementById("character-id");
    console.log(charId);
    charId.value = id;
}
</script>
<template>
    <div class="card">
        <router-link :to="pathLocation(character.id)" class="card__thumbnail">
            <img
                :src="
                    character.thumbnail.path.concat(
                        '.' + character.thumbnail.extension
                    )
                "
                class="card__image"
                :alt="character.name"
                :title="character.name"
                loading="lazy"
            />
        </router-link>
        <div class="card__body">
            <div class="card__title">{{ character.name }}</div>
            <div class="card__body-description">
                {{ character.description }}
            </div>
            <div class="card__body-modified">
                {{ formateDate(character.modified) }}
            </div>
        </div>
        <div class="card__options">
            <button @click="sendId(character.id)" class="card__button">
                Editar
            </button>
        </div>
    </div>
</template>
<style scoped>
.card {
    position: relative;
    display: grid;
    grid-template-rows: 1fr auto;
    margin-bottom: 10px;
    break-inside: avoid;
}
.card__image {
    width: 100%;
    display: block;
    border-radius: 4px;
    object-fit: cover;
    background: gray;
    height: 100%;
    grid-row: 1 / -1;
    grid-column: 1;
}

.card__thumbnail::before {
    /* position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    transition: background-color 1.2s ease-in-out;
    z-index: 1; */
}
.card__thumbnail:hover::before {
    /* background-color: var(--bg-hover-before);
    cursor: pointer; */
}

.card__body {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    /* height: 100%; */
    z-index: 10;
}

.card__body::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
    height: 70px;
    z-index: 0;
}

.card__title {
    text-align: center;
    font-weight: 900;
    font-size: 16px;
    padding: 12px;
    transform: translate3d(0, 0, 0);
}

.card__thumbnail {
    width: 100%;
    height: 100%;
}

.card__body-description {
    max-height: 0;
    overflow: hidden;
    padding: 0 12px;
}

.card__body-modified {
    color: var(--bg-logo);
    max-height: 0;
    overflow: hidden;
}

.card__options {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    padding: 10px;
    display: flex;
    width: 100%;
    justify-content: flex-end;
}

.card__button {
}
</style>
