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
    margin-top: 3%;
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
    font-size: 125%;
    color: rgba(203, 203, 203, 0.52);
}

@media (max-width: 700px) {

    p {
        font-size: 90%;
    }
}

@media (max-width: 500px) {

p {
    font-size: 80%;
    text-align: center;
}
}
</style>