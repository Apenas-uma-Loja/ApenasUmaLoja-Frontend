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

}
@media screen and (max-width: 768px) {
    .container-image {
        width: 100%;
        height: 50vh;
        margin-top: 5rem;
    }
    .product-image {
        width: 90%;
        height: 90%;
    }
    
}
</style>