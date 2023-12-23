<template>
    <div class="logado-view">
        <div class="button-user">
            <button type="submit">J</button>
        </div>
        <div class="body-user">
            <h1>Olá João,</h1>
            <div>Seja Bem-vindo a sua conta de hospedagem.</div>
            <iframe width="800" height="500" src="https://www.youtube.com/embed/vqZHkdoyNNg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div>Caso tenha alguma dúvida, visite nossa central de ajuda.</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'LogadoView',

}
</script>
<style scoped>
.logado-view {
    display: flex;
    flex-direction: column;
}
.button-user {
    display: flex;
    justify-content: flex-end;
    margin: 16px;
}
.body-user {
    display: flex;
    flex-direction: column;
    margin-left: 20rem;
}
button {
    height: 52px;
    width: 52px;
    border: none;
    border-radius: 40px;
    background-color: #D9D9D9;
}

</style>