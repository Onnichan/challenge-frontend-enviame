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
        <div class="card__body">
            <router-link
                :to="pathLocation(character.id)"
                class="card__thumbnail"
            >
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
            <!-- <div class="card__body-description">{{character.description}}</div>
            <div class="card__body-modified">{{formateDate(character.modified)}}</div> -->
        </div>
        <div class="card__title">{{ character.name }}</div>
        <button @click="sendId(character.id)">Editar</button>
    </div>
</template>
<style scoped>
.card {
    padding: 10px;
    /* position: relative; */
}

.card__title {
    text-align: center;
    margin-top: 20px;
}

/* .card__body {
} */

.card__thumbnail {
    width: 100%;
    /* position: relative; */
}
.card__image {
    width: 100%;
    height: 300px;
    display: block;
    border-radius: 4px;
    object-fit: cover;
    /* z-index: 5; */
}

.card__thumbnail::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    transition: background-color 1.2s ease-in-out;
    z-index: 1;
}
.card__thumbnail:hover::before {
    background-color: var(--bg-hover-before);
    cursor: pointer;
}
</style>
