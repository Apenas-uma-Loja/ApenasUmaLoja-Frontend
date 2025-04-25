<script setup>
import { ref } from 'vue';
</script>
<template>
    <div class="container-product-card">
        <div class="image-product"></div>
        <p class="title-product">Action figure Mordecai 30x10cm edição de aniversário</p>
        <div class="price-product">
            <p class="old-price">R$ 0,00</p>
            <p class="price">R$ 0,00</p>
            <div class="payment"><img src="/public/Magnetic-Card.png" alt=""><p>ou R$ 125,90 até 3x de R$ 40,30</p></div>
        </div>
        <button class="access-product">VER</button>
    </div>
</template>
<style scoped>
.container-product-card {
    width: 18%;
    height: 25rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 0, 0);
    border-radius: 10px;
    border: 4px solid #fff;
    /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); */
}
.image-product {
    width: 70%;
    height: 50%;
    background-color: white;
    /* background-image: url('/public/mordecai-boneco.png'); */
    background-size: cover;
    background-position: center;
    /* border-radius: 15px 15px 0 0; */
}
.title-product {
    /* width: 90%; */
    /* height: 20%; */
    color: white;
    font-size: 15px;
    /* font-weight: 600; */
    /* text-align: center; */
    margin: 0.5rem 0;
}
.price-product {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
}
.old-price {
    color: #595959;
    font-size: 1.2rem;
    text-decoration: line-through;
}
.price {
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
}
.payment{
    width: 100%;
    height: 20%;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
}
.payment > p{
    margin: 0 0 0 .25rem;
    color: white;
    font-size: 0.7rem;
    font-weight: 600;
}
.access-product {
    width: 100%;
    height: 10%;
    margin: 1rem 0;
    background-color: #540756;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 15px;
    border: none;
    cursor: pointer;
}
.access-product:hover {
    background-color: #000;
    color: #fff;
    transition: background-color 0.3s ease, color 0.3s ease;
}
</style>