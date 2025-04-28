<script setup>
import ProductCard from '@/components/ProductsofWeek/ProductCard.vue';
import { ref } from 'vue';
const exampleProducts = [
{
                id: 13,
                title: 'Capinha Iphone artezanal feita a mão',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/products-images/capinha-celular.png',
                quantity: ref(100),
            },
            {
                id: 14,
                title: 'Carteira Mordecai e Rigby “Haters gonna hate” feita a mão',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/products-images/carteira-rigby.png',
                quantity: ref(100),
            },
            {
                id: 15,
                title: 'Poster Laranja Mordecai e Rigby Irado!',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/products-images/poster-mordecai.png',
                quantity: ref(100),
            },
            {
                id: 16,
                title: 'Quadro colorido Mordecai e Rigby',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/products-images/quadro-colorido.png',
                quantity: ref(100),
            }
            
];
</script>

<template>
    <div class="container">
        <div class="container-clothes">
            <div class="Title">
                <h1>
                    ARTES
                </h1>
            </div>
            <div class="products">
                <ProductCard v-for="product in exampleProducts" :key="product.id" :product="product" />
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
    color: #FFE815;
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