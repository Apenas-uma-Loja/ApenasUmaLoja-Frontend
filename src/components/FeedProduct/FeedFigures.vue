<script setup>
import ProductCard from '@/components/ProductsofWeek/ProductCard.vue';
import { ref } from 'vue';
const exampleProducts = [
{
                id: 5,
                title: 'Action figure Benson Funko Pop!',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/products-images/figure-benson.png',
                quantity: ref(100),
            },
            {
                id: 6,
                title: 'Action figure Mordecai Funko Pop!',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/products-images/figure-mordecai.png',
                quantity: ref(100),
            },
            {
                id: 7,
                title: 'Action figure Rigby Funko Pop!',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/products-images/figure-rigby.png',
                quantity: ref(100),
            },
            {
                id: 8,
                title: 'Pelucia Saltitão',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/products-images/pelucia-saltitao.png',
                quantity: ref(100),
            },
            
];
</script>

<template>
    <div class="container">
        <div class="container-clothes">
            <div class="Title">
                <h1>
                    FIGURES
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
    color: #4DA7FF;
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