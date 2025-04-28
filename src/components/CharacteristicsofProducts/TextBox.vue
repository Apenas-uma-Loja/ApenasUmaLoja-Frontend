<script setup>
defineProps({
    title: {
        type: String,
        default: 'CONFIABILIDADE'
    },
    description: {
        type: String,
        default: 'PARA VOCE QUE É FÃ DE APENAS UM SHOW, VOCE ESTÁ NO LUGAR CERTO! COMPRE SEUS PRODUTOS HOJE POR UM PREÇO JUSTO !'
    }
})
</script>
<template>
    <div class="container-text">
        <h2 class="title">{{ title }}</h2>
        <p class="description">{{ description }}</p>
    </div>
</template>
<style scoped>
    .container-text {
        width: 100%;
        height: 50%;
        padding: 1rem;
        gap: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
    }
    .title {
        color: white;
        font-size: 2rem;
    }
    .description {
        color: white;
        font-size: 1.2rem;
    }
    @media screen and (max-width: 768px) {
        .container-text {
            width: 100%;
            height: 100%;
            padding: 0.5rem;
        }
        .title {
            font-size: 1.5rem;
        }
        .description {
            font-size: 1rem;
        }
    }
</style>