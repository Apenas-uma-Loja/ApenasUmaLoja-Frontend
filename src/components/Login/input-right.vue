<script setup>

</script>

<template>
    <div class="container-right">
        <div class="container-title">
            <h1>Registre-se</h1>
        </div>
        <div class="container-input">
            <div class="container-input-email">
                <label class="inter-semi-bold-italic" for="email">Email</label>
                <input class="inter-semi-bold-italic" type="email" id="email" placeholder="Adicione seu email" />
            </div>
            <div class="container-input-password">
                <label class="inter-semi-bold-italic" for="password">Senha</label>
                <input class="inter-semi-bold-italic" type="password" id="password" placeholder="Adicione sua senha" />
            </div>
        </div>
        <div class="container-button"> 
            <button type="submit">Registrar</button>
        </div>
    </div>
</template> 

<style scoped>

.container-right {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1.5fr;
    height: 100%;
}

.container-title {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-row: 1;
}

h1 {
    font-family: 'Inter';
    font-size: 3rem;
    color: #FFFFFF;
}

.container-input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container-input-email {
    width: 80%;
    height: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.container-input-password {
    width: 80%;
    height: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-content: flex-start;
}

label {
    font-size: 1rem;
    color: rgba(203, 203, 203, 0.52);
}

input {
    width: 100%;
    height: 40%;
    background-color: rgba(33, 33, 33, 1);
    border: none;
    border-radius: 5px;
    padding-left: 1rem;
    margin-top: 0.5rem;
}

input::placeholder {
  color: rgba(255, 251, 251, 0.52);
  font-size: 125%;
}

.container-button {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-row: 3;
}

button {
    width: 60%;
    height: 30%;
    background-color: rgba(84, 7, 86, 1);
    border: none;
    border-radius: 5px;
    font-size: 1.5rem;
    color: #FFFFFF;
}
</style>