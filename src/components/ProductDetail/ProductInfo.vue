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
        <p class="old-price-info">{{ productInfo.oldPrice }} €</p>
        <p class="price-info">{{ productInfo.price }} €</p>
        <p>quantidade: {{ productInfo.quantity }}</p>
        <div class="info-quantity">
            <p v-if="productInfo.quantity >= 20">estoque cheio</p>
            <p v-if="productInfo.quantity < 20 && productInfo.quantity > 0">ultimas unidades</p>
            <p v-if="productInfo.quantity == 0">estoque zerado</p>
        </div>
        <div class="input-quantity">
            <input type="number" v-model="productStore.state.products[productInfo.id-1].quantity" min="0" max="100" step="1" class="input-quantity" />
            <!-- <button class="btn-add">Adicionar ao carrinho</button> -->
        </div>
    </div>
</template>
<style scoped>
.container-info {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #0E0E0E;
    border-radius: 10px;
    color: white;
    padding: 1rem;
}
.title-info {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
}
.description-info {
    font-size: 1.2rem;
    margin-bottom: 1rem;
}
.old-price-info {
    font-size: 1.2rem;
    text-decoration: line-through;
    color: #595959;
    margin-bottom: 1rem;
}
.price-info{
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
}
</style>
