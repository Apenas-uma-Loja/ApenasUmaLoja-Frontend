<script setup>
import { ref } from 'vue';

const menuAberto = ref(false);

function toggleMenu() {
    menuAberto.value = !menuAberto.value;
}
</script>

<template>
    <div class="container">
        <nav class="nav-bar">
            <ul>
                <li class="cart">
                    <img src="/public/Vector.svg" />
                </li>
                <li class="user">
                    <img src="/public/Vector-2.svg" />
                </li>
                <li class="menu" @click="toggleMenu">
                    <div class="hamburguer" :class="{ 'open': menuAberto }">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </li>
            </ul>
        </nav>

        <nav class="menu-responsivo" v-if="menuAberto">
            <ul>
                <li><a href="#">Entrar</a></li>
                <li><a href="#">Carrinho</a></li>
            </ul>
        </nav>
    </div>
    <main class="hero-bg"></main>
</template>

<style scoped>
ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    margin: 0;
}

li {
    cursor: pointer;
    list-style: none;
}

.hamburguer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 35px;
    height: 30px;
    cursor: pointer;
}

.hamburguer span {
    display: block;
    width: 35px;
    height: 4px;
    background-color: #fff;
    transition: all 0.3s ease;
}

.hamburguer.open span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}

.hamburguer.open span:nth-child(2) {
    opacity: 0;
}

.hamburguer.open span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}

.menu-responsivo {
    display: none;
}

@media screen and (min-width: 1001px) {
    .menu-dropdown {
        display: none;
    }

    .menu {
        display: none;
    }
}

@media (max-width: 1000px) {
    .menu {
        display: block;
    }

    .cart,
    .user {
        display: none;
    }

    ul {
        flex-direction: column;
        gap: 1rem;
    }

    a {
        text-decoration: none;
        color: #fff;
        font-size: 1.5rem;
        font-family: 'inter';
    }
    

    .menu-responsivo {
        position: absolute;
        right: 0;
        width: 40%;
        height: 30vh;
        background-color: #0F0B12;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

@media (max-width: 500px) {
    ul {
        justify-content: flex-end;
    }

    li {
        padding-block: 16px;
    }
}
</style>