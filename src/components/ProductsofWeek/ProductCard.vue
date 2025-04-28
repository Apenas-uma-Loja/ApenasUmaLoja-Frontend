<script setup>
import { ref } from 'vue';

defineProps({
    product: {
        type: Object,
        required: true
    }
});
</script>
<template>
    <div class="container-product-card">
        <div class="image-product">
            <img :src=product.imageUrl alt="" style="width: 100%; height: 100%; border-radius: 15px 15px 0 0;">
        </div>
        <p class="title-product">{{ product.name }}</p>
        <div class="price-product">
            <p class="old-price">{{ product.oldPrice.toFixed(2).replace('.', ',') }}</p>
            <p class="price">{{ product.price.toFixed(2).replace('.', ',') }}</p>
            <div class="payment"><img src='/public/Magnetic-Card.png' alt=""><p>ou R$ 125,90 até 3x de R$ 40,30</p></div>
        </div>
        <button class="access-product">VER</button>
    </div>
</template>
<style scoped>
.container-product-card {
    width: 22%;
    height: 25rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 0, 0);
    border-radius: 10px;
    border: 4px solid #fff;
}
.image-product {
    width: 70%;
    height: 50%;
    background-color: white;
    background-size: cover;
    background-position: center;
}
.title-product {
    color: white;
    font-size: 15px;
    margin: 0.5rem 0;
}
.price-product {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    transition: background-color 0.3s ease, color 0.3s ease;

}
.access-product:hover {
    background-color: #000;
    color: #fff;
}
@media screen and (max-width: 768px) {
    .container-product-card {
        width: 90%;
        height: 30rem;
        margin: 1rem 0;
    }
    .image-product {
        width: 80%;
        height: 60%;
    }
    .title-product {
        font-size: 1.2rem;
    }
    .price-product {
        height: 20%;
    }
    .old-price {
        font-size: 1rem;
    }
    .price {
        font-size: 1.5rem;
    }
    .payment > p{
        font-size: 0.8rem;
    }
    .access-product {
        height: 15%;
        font-size: 1rem;
        margin: 1rem 0 .5rem 0;
    }
}
</style>