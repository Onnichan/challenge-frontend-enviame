<template>
    <div class="content-loading">
        <div class="content-loading__bar content-loading__bar--purple"></div>
        <div class="content-loading__bar content-loading__bar--pink"></div>
        <div class="content-loading__bar content-loading__bar--red"></div>
        <div class="content-loading__bar content-loading__bar--orange"></div>
        <div class="content-loading__bar content-loading__bar--yellow"></div>
        <div class="content-loading__bar content-loading__bar--yellow"></div>
        <div class="content-loading__bar content-loading__bar--orange"></div>
        <div class="content-loading__bar content-loading__bar--red"></div>
        <div class="content-loading__bar content-loading__bar--pink"></div>
        <div class="content-loading__bar content-loading__bar--purple"></div>
    </div>
</template>
<style>
.content-loading {
    position: fixed;
    top: 35%;
    left: 40%;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 200px;
    z-index: 20;
}
.content-loading__bar {
    width: 12px;
    height: 2px;
    border-radius: 10px;
    background-color: white;
    animation: up_down 1.5s ease-in-out infinite;
}
.content-loading__bar--purple {
    background-color: var(--purple_for);
    animation-delay: 1s;
}

.content-loading__bar--pink {
    background-color: var(--pink_three);
    animation-delay: 0.8s;
}

.content-loading__bar--red {
    background-color: var(--red_two);
    animation-delay: 0.6s;
}

.content-loading__bar--orange {
    background-color: var(--orange);
    animation-delay: 0.4s;
}

.content-loading__bar--yellow {
    background-color: var(--yellow);
    animation-delay: 0.2s;
}

@keyframes up_down {
    0%,
    100% {
        height: 2px;
    }

    50% {
        height: 80px;
    }
}
</style>
