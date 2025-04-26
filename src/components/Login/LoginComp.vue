<script setup>
import ImagemLeft from './imagem-left.vue';
import InputRight from './Input-right.vue';
</script>

<template>
    <div class="container">
        <div class="container-login">
            <div class="left">
                <ImagemLeft />
            </div>
            <div class="right">
                <InputRight />
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100vh;
    background-image: url('/public/background-login.png');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container-login {
    width: 60%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0F0B12;
    box-shadow: 10px 10px 10px #0000009a;
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 1fr;
}

.left {
    width: 100%;
    height: 100%;
    grid-column: 1;
}

.right {
    width: 100%;
    height: 100%;
    grid-column: 2;
}

/* RESPONSIVIDADE */

@media (max-width: 1400px) {
    .left {
        display: none;
    }

    .right {
        grid-column: 1 / 2 span;
    }
}

@media (max-width: 550px) {
    .container-login {
        width: 100%;
        height: 100%;
        background-color: #00000000;
    }
}
</style>