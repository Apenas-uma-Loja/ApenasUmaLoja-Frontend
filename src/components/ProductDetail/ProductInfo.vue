<script setup>
import { useProductStore } from '@/stores/products';
const productStore = useProductStore();
defineProps({
    productInfo: {
        type: Number,
        required: true,
    },
});
</script>
<template>
    <div class="container-info">
        <h1 class="title-info">{{ productInfo.title }}</h1>
        <p class="description-info">{{ productInfo.description }}</p>
        <p class="old-price-info">R$ {{ productInfo.oldPrice.toFixed(2).replace('.', ",") }}</p>
        <p class="price-info">R$ {{ productInfo.price.toFixed(2).replace('.', ",") }} <span class="little-text">à vista</span></p>
        <p>quantidade: {{ productInfo.quantity }}</p>
        <div class="info-quantity" :style="{ color: productInfo.quantity >= 20 ? 'green' : productInfo.quantity > 0 ? 'orange' : 'red' }">
            <p v-if="productInfo.quantity >= 20">estoque cheio</p>
            <p v-if="productInfo.quantity < 20 && productInfo.quantity > 0">ultimas unidades</p>
            <p v-if="productInfo.quantity == 0">estoque zerado</p>
        </div>
        <div class="input-quantity">
            <input type="number" v-model="productStore.state.products[productInfo.id-1].quantity" min="0" max="100" step="1" class="input-quantity" />
        </div>
        <button class="btn-add" @click="productStore.addToCart(productInfo)">Adicionar ao carrinho</button>
    </div>
</template>
<style scoped>
.container-info {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    background-color: #0E0E0E;
    border-radius: 10px;
    color: white;
    padding: 1rem;
}
.little-text{
    font-size: 0.8rem;
}
.title-info {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
}
.description-info {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #807C7C;
}
.old-price-info {
    font-size: 1.2rem;
    text-decoration: line-through;
    color: #595959;
}
.price-info{
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1rem;
}
.input-quantity{
    width: 100%;
    height: 2rem;
    display: flex;
}
.input-quantity input{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
    padding-left: 1rem;
}
.btn-add {
    width: 100%;
    height: 3rem;
    margin: 1rem auto;
    background-color: #38AC01;
    color: white;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}
.btn-add:hover {
    background-color: #2E8B00;
}
</style>
