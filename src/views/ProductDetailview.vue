<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import ProductDetailComp from '@/components/ProductDetail/ProductDetailComp.vue';
</script>
<template>
    <ProductDetailComp :productId="$route.params.productId" />   
</template>
