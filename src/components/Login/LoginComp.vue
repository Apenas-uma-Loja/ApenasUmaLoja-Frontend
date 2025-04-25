<script setup>
import imagemLeft from './imagem-left.vue';
</script>

<template>
    <div class="container">
       <div class="container-login">
        <div class="left">
            <imagem-left />
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
    width: 70%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0F0B12;
    box-shadow: 10px 10px 10px #0c0c0c;
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 1fr;
}

.left {
    width: 100%;
    height: 100%;
    grid-row: 1;
    grid-column: 1;
}
</style>