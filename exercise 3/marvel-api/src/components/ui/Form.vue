<script setup>
import InputIcon from "./InputIcon.vue";
import IconEdit from "../svg/icons/iconEdit.vue";
import IconLink from "../svg/icons/iconLink.vue";
import { useModalStore } from "../../stores/modal";
import { useCharacterStore } from "../../stores/character";
// import { storeToRefs } from "pinia";
import { formateDate } from "../../util/date";

const storeModal = useModalStore();
const { editCharacter, addCharacterToStart } = useCharacterStore();

function getData() {
    const id = document.getElementById("character-id").value;
    const name = document.getElementById("character-name").value;
    const modified = formateDate(
        document.getElementById("character-date").value
    );
    const description = document.getElementById("character-description").value;
    let url = document.getElementById("character-url").value;
    return { id, name, modified, description, url };
}

function submit(option) {
    const { id, description, modified, name, url } = getData();
    let lastIndex = url.lastIndexOf(".");
    const thumbnail = {
        extension: url.substring(lastIndex + 1),
        path: url.substring(0, lastIndex),
    };
    option
        ? editCharacter(id, { name, modified, description, thumbnail })
        : addCharacterToStart({ name, modified, description, thumbnail });
}

function addNewCharacter() {
    const { id, description, modified, name, url } = getData();
}
</script>
<template>
    <form
        class="form"
        id="form-data"
        @submit.prevent="submit(storeModal.update)"
        enctype="multipart/form-data"
    >
        <InputIcon type="hidden" id="character-id" name="id"></InputIcon>
        <InputIcon
            placeholder="Text the name"
            id="character-name"
            name="name"
            required
        >
            <IconEdit></IconEdit>
        </InputIcon>
        <InputIcon
            placeholder="Text the description"
            id="character-description"
            name="description"
            required
        >
            <IconEdit></IconEdit>
        </InputIcon>
        <InputIcon
            placeholder="Text the URL"
            type="url"
            id="character-url"
            name="url"
            required
        >
            <IconLink></IconLink>
        </InputIcon>
        <InputIcon
            type="date"
            id="character-date"
            name="date-modified"
            required
        ></InputIcon>
        <div class="form__buttons">
            <button
                type="button"
                class="form__button form__button--cancel"
                @click="storeModal.show"
            >
                Cancel
            </button>
            <button
                type="submit"
                class="form__button form__button--confirm"
                v-if="storeModal.update"
            >
                Update
            </button>
            <button
                type="submit"
                class="form__button form__button--confirm"
                v-else
            >
                Create
            </button>
        </div>
    </form>
</template>
<style>
.form {
    display: flex;
    flex-direction: column;
    padding: 30px;
    gap: 10px;
}

.form__input {
    outline: none;
    padding: 10px;
    border-radius: 4px;
}

.form__buttons {
    display: flex;
    justify-content: right;
    gap: 10px;
}

.form__button {
    border-radius: 5px;
    padding: 7px 15px;
    font-size: 1em;
    outline: none;
    border: none;
}

.form__button--cancel {
    background-color: var(--pink_two);
}

.form__button--confirm {
    background-color: var(--purple_one);
}
</style>
