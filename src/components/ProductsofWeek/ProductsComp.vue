<script setup>
import ProductCard from '@/components/ProductsofWeek/ProductCard.vue';
import { useProductStore } from '@/stores/products';

const productStore = useProductStore();
const exampleProducts = productStore.arts
</script>
<template>
    <section>
        <img src="../../../src/assets/OFERTAS-DA-SEMANA.png" alt="" class="title">
        <p class="subtitle">CONFIRA NOSSOS MELHORES DESCONTOS EXCLUSIVOS DESSA SEMANA. CORRE QUE ELES EXPIRAM LOGO!</p>
        <div class="container-products">
            <ProductCard v-for="product in exampleProducts" :key="product.id" :product="product" />
        </div>
    </section>
</template>
<style scoped>
section {
    width: 100%;
    height: 100%;
    padding: 1rem;
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.container-products {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}
.title {
    width: 50%;
    height: 10%;
    color: white;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin: 1rem 0;
}
.subtitle {
    width: 50%;
    height: 10%;
    color: white;
    font-size: 1.2rem;
    font-weight: 400;
    text-align: center;
    margin: 1rem 0;
}
@media screen and (max-width: 768px) {
    .container-products {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
    .title, .subtitle {
        width: 90%;
    }
    .title {
        font-size: 1.5rem;
    }
    .subtitle {
        font-size: 1rem;
    }
    
}
</style>