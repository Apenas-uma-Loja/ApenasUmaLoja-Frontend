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

    @media screen and (max-width: 1000px) {
        footer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            padding: 1rem;
        }
            
        }
        .container-title {
            width: 90%;
        }
        .container-credits {
            width: 90%;
        }
        
    }
</style>