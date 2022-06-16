<script setup>
import { ref } from "vue";

const primes = ref(null);

function btnShowPrimes() {
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    primes.value = showPrimeNumbers(Number(from), Number(to));
}

function showPrimeNumbers(from, to) {
    const primes = [];
    for (let i = from + 1; i < to; i++) {
        let count = 0;
        for (let j = i; j >= 1; j--) {
            if (i % j == 0) {
                count++;
            }
        }
        if (count == 2) {
            primes.push(i);
        }
    }
    return primes;
}

//This function generates a new number array between of initial number and final number
// by salt of one
function range(from, to) {
    return Array.from({ length: to - from - 1 }, (v, i) => from + i + 1);
}

function onlyNumbers(e) {
    return e.charCode >= 48 && e.charCode <= 57;
}
</script>
<template>
    <main class="container">
        <form class="form" @submit.prevent="btnShowPrimes">
            <span class="form__title">Prime numbers</span>
            <input
                type="number"
                class="form__input"
                id="from"
                @keyup="onlyNumbers(event)"
                placeholder="Text your first number"
                required
            />
            <input
                type="number"
                class="form__input"
                id="to"
                @keyup="onlyNumbers(event)"
                placeholder="Text your second number"
                required
            />
            <button class="form__button" id="btnShow">Show Numbers</button>
        </form>
        <div class="grid" id="grid">
            <div class="grid__item" v-for="prime of primes">{{ prime }}</div>
        </div>
    </main>
</template>
<style scoped>
.container {
    padding: 150px var(--px-container);
    height: 100%;
    margin: 0 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.form {
    display: flex;
    flex-direction: column;
    line-height: 4em;
    gap: 20px;
    border: 1px solid white;
    padding: 30px;
    width: 400px;
}

.form__title {
    text-align: center;
    font-weight: 700;
    font-size: 2em;
    color: white;
}

.form__input {
    border-radius: 4px;
    padding: 10px;
}

.form__button {
    outline: none;
    padding: 10px;
    background-color: pink;
}

.form__button:hover {
    cursor: pointer;
}

.grid {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    /* grid-template-columns: repeat(auto-fit, minmax(40px, 1fr)); */
    /* grid-template-columns: 4fr;
  grid-template-rows: 1fr; */
    gap: 10px;
}

.grid__item {
    padding: 10px;
    color: white;
    font-weight: 700;
    background-color: pink;
    text-align: center;
}

@media only screen and (max-width: 700px) {
    /* .container{
    flex-direction: column;
  } */
}
</style>
