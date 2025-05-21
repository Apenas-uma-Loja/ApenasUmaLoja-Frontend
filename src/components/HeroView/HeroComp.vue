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
    background-image: url('../../../src/assets/BackGroundImage.png');
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
    justify-items: end;
}

.container-hero-title-description {
    width: 100%;
    height: 60%;
}

.container-hero-button-info {
    width: 100%;    
    height: 40%;
}

.container-hero-info-cupom {
    width: 100%;
    height: 50%;
}

/* RESPONSIVIDADE */

@media (max-width: 1250px) {
    .container-right {
        display: none;
    }

    .container-hero-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .container-left {
        width: 70%;
    }
}
</style>