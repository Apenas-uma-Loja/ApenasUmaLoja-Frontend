<script setup>
import TextBox from './TextBox.vue'
import CharacteristicsImage from './CharacteristicsImage.vue';
</script>
<template>
    <section>
        <div class="container">
            <CharacteristicsImage />
            <TextBox title="CONFIABILIDADE" description="PARA VOCE QUE É FÃ DE APENAS UM SHOW, VOCE ESTÁ NO LUGAR CERTO! COMPRE SEUS PRODUTOS HOJE POR UM PREÇO JUSTO !" /> 
            <TextBox title="QUALIDADE" description="PRODUTOS DEDICADOS A VOCÊ QUE REALMENTE AMA APENAS UM SHOW!" />
        </div>
    </section>
</template>
<style scoped>
    section {
        width: 100%;
        height: 100%;
        background-image: url(/public/Group-5.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .container {
        width: 85%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
        align-items: center;
    }
    @media screen and (max-width: 768px) {
        .container {
            grid-template-columns: 1fr;
            width: 90%;
        }
        section {
            padding: 1rem;
            min-height: 25rem;
        }
        
    }
</style>