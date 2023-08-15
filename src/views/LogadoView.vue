<template>
    <div>
        <h1>{{ aviso }}</h1>
    </div>
</template>
<script>
export default {
    name: 'LogadoView',
    data() {
        return {
            aviso: 'VOCE ESTÁ LOGADO!!!'
        }
    }
}
</script>