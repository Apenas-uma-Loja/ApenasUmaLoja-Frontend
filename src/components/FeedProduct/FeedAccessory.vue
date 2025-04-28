<script setup>
import { useProductStore } from '@/stores/products';
import ProductCard from '../ProductsofWeek/ProductCard.vue';


const productStore = useProductStore()
</script>
<template>
    <div class="container">
        <div class="container-clothes">
            <div class="Title">
                <h1>
                    ACESSÓRIOS
                </h1>
            </div>
            <div class="products">
                <ProductCard v-for="product in productStore.accessories" :key="product.id" :product="product" />
            </div>
        </div>
    </div>
</template>
<style scoped>
.container {
    width: 100%;
    min-height: 70vh;
    background-color: #000000;
    justify-content: flex-start;
}

.container-clothes {
    width: 100%;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #000000;
}

.Title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15%;
}

h1 {
    font-family: 'inter';
    color: #967549;
}

.products {
    width: 90%;
    height: 70%;
    display: flex;
    justify-content: space-around;
    align-content: space-around;
    flex-wrap: wrap;
}

@media (max-width: 768px) {
    .container-clothes {

        justify-content: flex-start;
    }

    .Title {
        margin-top: 40%;
        margin-bottom: 20%;
    }

    .products {
        width: 100%;
        height: auto;
    }
    
}
</style>