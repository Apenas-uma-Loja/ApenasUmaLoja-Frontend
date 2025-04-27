<script setup>
import { ref } from 'vue';
import { useProductStore } from '@/stores/products';
import ProductCart from './ProductCart.vue';

const productStore = useProductStore();
const cartProducts = ref(productStore.cart);
// const total = () =>{
//     let total = 0;
//     cartProducts.value.forEach(product => {
//         total += product.price * product.quantity;
//     });
//     return total;
// }
const total = ref(0);
const calculateTotal = () => {
    let totalValue = 0;
    cartProducts.value.forEach(product => {
        totalValue += product.price;
    });
    total.value = totalValue.toFixed(2).replace('.', ',');
}
calculateTotal();
</script>
<template>
    <section>
        <div class="container">
        <h1>CARRINHO DE COMPRAS</h1>
        <ProductCart v-for="(product, index) in cartProducts" :key="index" :product="product" />
         <!-- <div v-for="product in cartProducts"></div> -->
        <div class="total">
            <p>TOTAL: R$ {{ total }}</p>
        </div>
        <button class="buy">FINALIZAR COMPRA</button>
    </div>
    </section>
</template>
<style scoped>
section {
    width: 100%;
    min-height: 100vh;
    padding: 1rem;
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.container{
    margin: 2rem auto;
    width: 60%;
    height: 80%;
    gap: 1rem;
    border-radius: 10px;
    display: flex;
    padding: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
}
h1 {
    color: white;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
}
.total {
    width: 90%;
    /* height: 5rem; */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0E0E0E;
    /* border-radius: 10px; */
    border-top: 1px solid white;
    color: white;
    font-size: 1.5rem;
    margin-top: 1rem;
    padding: .5rem;
}
.total > p{
    text-align: end;
    width: 100%;
    height: 100%;
}
.buy{
    width: 50%;
    /* height: 5rem;; */
    border-radius: 10px;
    padding: 1rem;
    border: none;
    background-color: #38AC01;
    color: white;
    /* font-size: 1.5rem; */
    cursor: pointer;
    margin-top: 1rem;
    transition: all 0.3s ease;
}
.buy:hover{
    background-color: #1E1E1E;
}
</style>