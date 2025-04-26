<script setup></script>
<template>
    <div class="image-container">
        <img src="/public/image-16.png" alt="">
    </div>
</template>
<style scoped>
    .image-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media screen and (max-width: 768px) {
        .image-container{
            display: none;
        }
    }
</style>