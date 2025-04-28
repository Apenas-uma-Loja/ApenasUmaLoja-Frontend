<script setup>
import { useProductStore } from '@/stores/products';

const productStore = useProductStore();
defineProps({product: Object});
</script>
<template>
    <div class="container-cart-product">
        <div class="info-section">
            <p>{{ product.title }}</p>
            <p>R$ {{ product.price.toFixed(2).replace('.', ',') }}</p>
        </div>
        <div class="btn-section">
            <button class="access-product" @click="productStore.productDetail(product.id)">VER</button>
            <button class="remove-product" @click="productStore.removeFromCart(product)">REMOVER</button>
        </div>
    </div>
</template>
<style scoped>
.container-cart-product {
    width: 90%;
    margin: 0 auto;
    height: 8rem;
    display: flex;
    flex-direction: column;
    background-color: #0E0E0E;
    border-radius: 10px;
    color: white;
    padding: 1rem;
}
.info-section {
    width: 100%;
    height: 50%;
    display: grid;
    grid-template-columns: 3fr 1fr;
}
.btn-section {
    width: 100%;
    height: 50%;
    display: grid;
    grid-template-columns: 3fr 1fr;
}
.access-product {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: none;
    background-color: #0E0E0E;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: ease-in-out 0.2s all;
}
.remove-product {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: none;
    background-color: #DA1C1C;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: ease-in-out 0.2s all;
}
.access-product:hover {
    background-color: #1E1E1E;
}
.remove-product:hover {
    background-color: #1E1E1E;
}
@media screen and (max-width: 1000px) {
    .container-cart-product {
        width: 90%;
        min-height: 10rem;
    }
    .info-section {
        width: 100%;
        height: 60%;
        display: grid;
        grid-template-columns: 3fr 1fr;
    }
    .btn-section {
        width: 100%;
        height: 40%;
        display: grid;
        grid-template-columns: 3fr 1fr;
    }
    .remove-product{
        padding: .25rem;
    }
    
}
</style>