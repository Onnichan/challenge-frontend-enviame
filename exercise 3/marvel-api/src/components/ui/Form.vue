<script setup>
import InputIcon from "./InputIcon.vue";
import IconEdit from "../svg/icons/iconEdit.vue";
import IconLink from "../svg/icons/iconLink.vue";
</script>
<template>
    <form class="form">
        <InputIcon placeholder="Text the name">
            <IconEdit></IconEdit>
        </InputIcon>
        <InputIcon placeholder="Text the description">
            <IconEdit></IconEdit>
        </InputIcon>
        <InputIcon placeholder="Text the URL" type="url">
            <IconLink></IconLink>
        </InputIcon>
        <InputIcon placeholder="Text the modified - DD-MM-YYYY" type="date">
            <!-- <IconEdit></IconEdit> -->
        </InputIcon>
        <div class="form__buttons">
            <button class="form__button form__button--cancel">Cancel</button>
            <button class="form__button form__button--confirm">Save</button>
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
