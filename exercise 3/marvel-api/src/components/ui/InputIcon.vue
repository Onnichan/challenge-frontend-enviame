<script setup>
const props = defineProps({
    type: {
        type: String,
        required: false,
        default: "text",
    },
    placeholder: {
        type: String,
        required: false,
        default: "",
    },
    id: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false,
    },
    required: {
        type: Boolean,
        required: false,
        default: false,
    },
});
</script>
<template>
    <div class="input__wrapper">
        <input
            :type="type"
            class="input__content"
            :placeholder="placeholder"
            :id="id"
            :name="name"
            :required="required"
        />
        <div class="input__icon">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
.input__wrapper {
    height: 60px;
    height: 100%;
    position: relative;
}

.input__content {
    position: relative;
    outline: none;
    padding: 10px 10px 10px 40px;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 1px solid gray;
    color: lightseagreen;
}

.input__content:focus {
    border: 1px solid black;
}

.input__content::placeholder {
    color: lightseagreen;
    font-weight: 700;
}

.input__icon {
    position: absolute;
    left: 10px;
    top: 25%;
    bottom: 25%;
    height: 50%;
}
</style>
