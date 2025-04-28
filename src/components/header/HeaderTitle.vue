<script setup>

</script>

<template>
    <div class="container">
        <img src="/public/REGULAR SHOP.png" @click="$router.push('/')" alt="Logo" class="logo" />
    </div>
</template>

<style scoped>

.container {
    display: flex;
    align-items: center;
    margin-left: 5%;
}

@media (max-width: 400px) {
    .container {
        margin-left: 0;
    }
}

</style>