<script setup>
import HeaderTitle from './HeaderTitle.vue';
import HeaderIcons from './HeaderIcons.vue';

window.addEventListener('scroll', function() {
  const header = document.getElementById('header-container');
  
  if (window.scrollY > 200) { 
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

</script>

<template>
    <div id="header-container" class="header-container">
        <div class="left">
            <HeaderTitle />
        </div>
        <div class="right">
            <HeaderIcons />
        </div>
    </div>
</template>

<style scoped>
.header-container {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    transition: background-color 0.3s ease;
    height: 7rem;
    padding: 2rem;
    width: 100%;
}

.left {
    width: 80%;
}

.right {
    width: 20%;
}

#header-container.scrolled {
  background-color: #0F0B12; 
}

/* RESPONSIVIDADE */
@media (max-width: 400px) {
    .header-container {
        padding: 1rem;
    }
}
</style>