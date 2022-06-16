<script setup>
const props = defineProps({
    type: {
        type: String,
        required: false,
    },
});
</script>
<template>
    <button class="button__wrapper" :type="type">
        <div class="button__icon">
            <slot name="icon"></slot>
        </div>
        <div class="button__content">
            <slot name="text"></slot>
        </div>
    </button>
</template>
<style scoped>
.button__wrapper {
    /* height: 60px; */
    display: flex;
    border-radius: 4px;
    outline: none;
    padding: 10px 10px 10px 40px;
}

.button__content {
    width: 100%;
    height: 100%;
}

.button__icon {
    position: absolute;
    left: 10px;
    top: 25%;
    bottom: 25%;
    height: 50%;
}
</style>
