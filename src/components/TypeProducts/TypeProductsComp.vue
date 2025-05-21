<script setup>
import TypeCard from './TypeCard.vue'
</script>
<template>
  <section>
    <h1>CONFIRA AQUI OS NOSSOS SETORES DE PRODUTOS</h1>
    <div class="container">
      <TypeCard title="ROUPAS" imageUrl='/src/assets/musculoso-image.png' color="#97D841" />
      <TypeCard title="FIGURES" imageUrl='/src/assets/mordecai2.png' color="#4DA7FF" />
      <TypeCard title="ACESSÓRIOS" imageUrl='/src/assets/rigby-boneco.png' color="#967549" />
      <TypeCard title="ARTES" imageUrl='/src/assets/mordecai-pintor.png' color="#FFE815" />
    </div>
  </section>
</template>
<style scoped>
section {
  width: 100%;
  padding: 2rem 4rem;
  /* height: 100%; */
  background-color: #000;
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
h1{
  color: white;
  width: 40%;
  margin: auto;
  text-align: center;
  font-size: 1.8rem;
  /* font-weight: bold; */
}
@media screen and (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    width: 100%;
  }
  h1{
    width: 100%;
  }
  section {
    padding: 1rem;
  }
  
}
</style>
