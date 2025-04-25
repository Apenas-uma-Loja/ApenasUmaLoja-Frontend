<template>
    <div class="container">
        <div class="info-cupom">
             <p> Produtos limitados com descontos<br>(os descontos expiram semanalmente)</p>
        </div>
       
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
}

.info-cupom {
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    letter-spacing: 1px;
}


p {
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: italic;
    font-size: 150%;
    color: rgba(203, 203, 203, 0.52);
}
</style>