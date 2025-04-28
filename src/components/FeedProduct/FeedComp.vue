<script setup>
import FeedClothes from '@/components/FeedProduct/FeedClothes.vue';
import FeedFigures from '@/components/FeedProduct/FeedFigures.vue';
import FeedAccessory from '@/components/FeedProduct/FeedAccessory.vue';
import FeedArt from '@/components/FeedProduct/FeedArt.vue';
import CharacteristicsComp from '@/components/CharacteristicsofProducts/CharacteristicsComp.vue';
import FooterComp from '@/components/footer/FooterComp.vue';
</script>
<template>
    <div class="container">
        <FeedClothes />
        <FeedFigures />
        <FeedAccessory />
        <FeedArt />
        <CharacteristicsComp />
        <FooterComp />
    </div>
</template>
<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
</style>