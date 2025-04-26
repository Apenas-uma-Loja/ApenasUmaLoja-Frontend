<template>
    <div class="container">
        <div class="want-about">
            <button class="want-button">EU QUERO !</button>
            <button class="about-button">SOBRE ...</button>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
}

.want-about {
    width: 80%;
    height: 100%;
    display: flex;
    align-items: flex-end;
}

button {
    width: 35%;
    height: 70%;
    font-size: 150%;
    border-radius: 9px;
    border: none;
    cursor: pointer;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
}

.want-button {
    margin-right: 5%;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
}

.about-button {
    margin-left: 5%;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
}
</style>