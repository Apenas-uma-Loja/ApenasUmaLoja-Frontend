<script setup>
defineProps({
    title: {
        type: String,
        default: 'Title'
    },
    description: {
        type: String,
        default: 'LOREM IMPSUN LE VEGETE LA INS LORE LAREGE KADECTI  LAREGE KADECTI gdgdgsw LAREGE KADECTI'
    },
    imageUrl: {
        type: String,
        default: '/src/assets/musculoso-image.png'
    },
    color:{
        type: String,
        default: '#000'
    }
})
</script>
<template>
    <div class="type-card" @click="$emit('click')" :style="{borderBottomColor: color}">
        <div class="text"><h2 :style="{color: color}">{{ title }}</h2>
    <p>{{ description }}</p></div>
        <div class="caracter-image"><img :src=imageUrl alt=""></div>
    </div>
</template>
<style scoped>
.type-card {
    width: 85%;
    padding: .5rem 1rem 0 1rem; 
    margin: auto;
    height: 16rem;
    display: grid;
    grid-template-columns: 3fr 1fr;
    align-items: center;
    background-color: transparent;
    border-bottom: 4px solid;
}
.text{
    width: 100%;
    height: 100%;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    text-align: start;
}
.text > p{
    color: white
}
.text h2{
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 2rem 0;
    text-align: start;
}
.caracter-image{
    width: 100%;
    display: flex; 
}
@media screen and (max-width: 768px) {
    .type-card {
        width: 100%;
        height: 15rem;
        padding: 0;
        margin: auto;
        grid-template-columns: 1fr 1fr;
    }
    .text{
        width: 100%;
        height: 100%;
        display: flex; 
        flex-direction: column;
        justify-content: center;
    }
    .text h2{
        font-size: 1.5rem;
    }
    .caracter-image{
        width: 100%;
        height: 100%;
    }
    .caracter-image > img{
        width: 100%;
        height: 90%;
    }
    
}
</style>