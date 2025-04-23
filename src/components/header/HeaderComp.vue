<script setup>
import HeaderTitle from './HeaderTitle.vue';
import HeaderIcons from './HeaderIcons.vue';
</script>

<template>
    <div class="header-container">
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000000;
    height: 5.5rem;
    padding: 2rem;
}

.left {
    width: 80%;
}

.right {
    width: 20%;
}
</style>