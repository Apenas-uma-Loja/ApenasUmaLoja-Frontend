<script setup>
import TypeCard from './TypeCard.vue'
</script>
<template>
  <section>
    <h1>CONFIRA AQUI OS NOSSOS PRODUTOS SEPARADAMENTE ORGANIZADOS POR SETOR</h1>
    <div class="container"><TypeCard title="ROUPAS" imageUrl='/public/musculoso-image.png' color="#97D841" /><TypeCard title="FIGURES" imageUrl='/public/mordecai-boneco.png' color="#4DA7FF" /><TypeCard title="ACESSÓRIOS" imageUrl='/public/rigby-boneco.png' color="#967549" /><TypeCard title="ARTES" imageUrl='/public/mordecai-pintor.png' color="#FFE815" /></div>
  </section>
</template>
<style scoped>
section {
  width: 100%;
  padding: 2rem 4rem;
  /* height: 100%; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.container {
    margin: 1rem auto;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  align-items: center;
}
</style>
