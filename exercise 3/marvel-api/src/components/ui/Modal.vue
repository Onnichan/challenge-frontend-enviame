<script setup>
import Form from "./Form.vue";
import { useModalStore } from "../../stores/modal";
import { storeToRefs } from "pinia";

const { title } = storeToRefs(useModalStore());
</script>
<template>
    <Transition>
        <div class="modal">
            <h1 class="modal__title">{{ title }}</h1>
            <div class="modal__body">
                <Form></Form>
            </div>
            <!-- <div class="modal__options"></div> -->
            <!-- <button @click="$emit('close')" >Cerrar</button> -->
        </div>
    </Transition>
</template>
<style scoped>
.modal {
    background-color: rgba(247, 242, 242, 0.961);
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: 35%;
    right: 35%;
    color: black;
    z-index: 20;
    padding-top: 40px;
    border-radius: 10px;
}

.modal__title {
    text-align: center;
}

.modal__content-features {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-bottom: -94px;
    height: 150px;
    font-size: 0.9em;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    color: black;
}

.modal__content-featuresHabitat {
    width: 100%;
    display: flex;
}

.modal__content-featuresImage {
    width: 60px;
    height: 60px;
    display: block;
}

.modal__content-featuresRight,
.modal__content-featuresLeft {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}

.modal__content-features span:not(.modal__content-featuresHabitat) {
    /* background-color: #e3d7b2; */
    border-radius: 5px;
    padding: 0 10px;
    border: 1px solid black;
}

.modal__content-description {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.modal__content-descriptionImage {
    display: block;
    width: 40%;
    margin-bottom: -10px;
    border-radius: 50%;
    background-color: rgba(247, 242, 242, 0.961);
}

.modal__content-descriptionTitle {
    font-size: 1.4em;
    text-transform: uppercase;
}

.modal__content-descriptionParagraph {
    text-align: center;
    font-size: 0.8em;
    margin-top: 1em;
}

.modal__content-other {
    display: flex;
    justify-content: space-around;
    gap: 20px;
}

.modal__content-otherBreadcrumbAbility {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
}

.modal__content-otherBreadcrumbAbilities {
    margin-bottom: 10px;
}

.modal__content-otherStats {
    width: 60%;
}

.modal__content-otherStatsTitle {
    text-align: center;
}

.modal__content-otherStat {
    display: flex;
    flex-direction: column;
}

.modal__content-otherStatContent {
    font-size: 0.7em;
    display: flex;
    justify-content: space-between;
}

.modal__content-otherStatTimeLine {
    background-color: gray;
    width: 100%;
    height: 0.4em;
    border-radius: 5px;
    margin-bottom: 5px;
    position: relative;
}

/* .modal__content-otherStatTimeLine::after{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: inherit;
  border-radius: 5px;
  background-color: black;
  z-index: 10;
} */

.modal__content-otherStatTimeLineStat {
    position: absolute;
    top: 0;
    left: 0;
    height: inherit;
    border-radius: 5px;
    background-color: black;
    z-index: 10;
}

.dark::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--bg-after-color);
    z-index: 9;
}

.modal__close {
    position: absolute;
    top: -25px;
    right: 10px;
    background-color: transparent;
    border: none;
    outline: none;
    z-index: 11;
    font-size: 1.1em;
}

.modal__close:hover {
    cursor: pointer;
}

@media only screen and (max-width: 1030px) {
    .modal {
        right: 27%;
        left: 27%;
    }
}

@media only screen and (max-width: 760px) {
    .modal {
        right: 15%;
        left: 15%;
    }
}

@media only screen and (max-width: 550px) {
    .modal {
        right: 14%;
        left: 14%;
    }
}

@media only screen and (max-width: 430px) {
    .modal {
        right: 0;
        left: 0;
    }
}
</style>
