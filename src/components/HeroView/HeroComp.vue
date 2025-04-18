<script setup>
import TitleDescription from './TitleDescription.vue';
import ButtonAboutWant from './ButtonAboutWant.vue';
import SideImage from './SideImage.vue';
import InfoCupom from './InfoCupom.vue';
</script>

<template>
    <div class="container-hero">
        <div class="container-hero-content">
            <div class="container-left">
                <div class="container-hero-title-description">
                    <TitleDescription />
                </div>
                <div class="container-hero-button-info">
                    <ButtonAboutWant />
                    <InfoCupom />
                </div>
            </div>
            <div class="container-right">
                    <SideImage />
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-hero {
    width: 100%;
    height: 100vh;
    background-image: url('../../../public/BackGroundImage.png');
    background-size: cover;
}

.container-hero-content {
    display: flex;

}

.container-left {
    width: 50%;
    height: 100vh;
}

.container-right {
    width: 50%;
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    justify-items: center;
}

.container-hero-title-description {
    width: 100%;
    height: 60%;
    background-color: rgba(139, 47, 24, 0.555);
}

.container-hero-button-info {
    width: 100%;    
    height: 40%;
    background-color: rgba(0, 0, 255, 0.466);
}

.container-hero-info-cupom {
    width: 100%;
    height: 50%;
    background-color: rgba(217, 217, 233, 0.466);
}
</style>