<script setup>
import TypeProductsComp from '@/components/TypeProducts/TypeProductsComp.vue';
import FooterComp from '../components/footer/FooterComp.vue';
import HeaderComp from '@/components/header/HeaderComp.vue';
import HeroComp from '@/components/HeroView/HeroComp.vue';
import ProductsComp from '@/components/ProductsofWeek/ProductsComp.vue';
</script>

<template>
  <main>
    <HeaderComp />
    <HeroComp />
    <TypeProductsComp />
    <ProductsComp />
    <FooterComp />
  </main>
</template>
