<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '@/stores/products';
import ProductImage from './ProductImage.vue';
import ProductInfo from './ProductInfo.vue';

const props = defineProps({
    productId: {
        type: Number,
        required: true,
    },
});
const productStore = useProductStore();
const currentProduct = computed(() => {
    return productStore.state.products[props.productId - 1];
});
</script>
<template>
    <section>
        <div class="container">
            <ProductImage :imageUrl="currentProduct.imageUrl" />
            <ProductInfo :productInfo="currentProduct" />
        </div>
    </section>

</template>
<style scoped>
section {
    width: 100%;
    height: 100vh;
    padding: 1rem;
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.container{
    margin: 1rem auto;
    width: 80%;
    height: 80%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;

}
</style>