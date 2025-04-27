<script setup>
defineProps({
    imageUrl: {
        type: String,
        required: true,
    },
})
</script>
<template>
        <div class="container-image">
            <img :src="imageUrl" alt="Product Image" class="product-image" />
        </div>
</template>
<style scoped>
.container-image {
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0E0E0E;
    border-radius: 10px;
}
.product-image {
    width: 80%;
    height: 80%;
    /* border-radius: 10px; */
    /* object-fit: cover; */
    /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); */
}
</style>