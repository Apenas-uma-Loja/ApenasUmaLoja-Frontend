<template>
    <div class="container">
        <div class="title-description">
            <h1 class="inter-extra-bold-800">
                EXPRESSE SEU <br> GOSTO AQUI !
            </h1>
            <p class="inter-semi-bold-600">
                PARA VOCE QUE É FA DE APENAS UM SHOW, VOCE<br> ESTÁ NO LUGAR CERTO! COMPRE SEUS PRODUTOS<br> HOJE POR UM PREÇO JUSTO !
            </p>
        </div>
    </div>
</template>

<style scoped>
 .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
}

h1 {
    color: white;
    font-size: 400%;
}

p {
    color: white;
    font-size: 100%;
    letter-spacing: 2px;
    margin-top: 1%;
}

.title-description {
    width: 80%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 3%;
}

@media (max-width: 1250px) {
    h1 {
        font-size: 350%;
    }

    p {
        font-size: 80%;
    }
}

@media (max-width: 700px) {
    h1 {
        font-size: 300%;
    }

    p {
        font-size: 70%;
    }
}
@media (max-width: 580px) {
    h1 {
        font-size: 250%;
        text-align: center;
    }

    p {
        font-size: 60%;
        text-align: center;
    }

}
</style>