<script setup>
 import NavFooter from './NavFooter.vue';
 import SocialFooter from './SocialFooter.vue';
 import CreditsFooter from './CreditsFooter.vue';
 import TitleFooter from './TitleFooter.vue';
</script>
<template>
    <footer>
        <TitleFooter />
        <NavFooter />
        <SocialFooter />
        <CreditsFooter />
    </footer>
</template>
<style scoped>
    footer {
        height: 14rem;
        background-color: rgba(0, 0, 0, 0.88);
        display: grid;
        grid-template-columns: 1fr 1fr 3fr 1fr;
        grid-template-rows: 1fr 1fr;
        justify-items: center;
    }

    .container {
        grid-row: 2;
    }

    .container-credits {
        grid-row: 2;
        grid-column: 4;
    }

    .container-title {
        grid-row: 1;
        grid-column: 1 / 2 span;
    }

@media (max-width: 768px) {
        footer {
            height: auto;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 1rem;
        }

    }
</style>