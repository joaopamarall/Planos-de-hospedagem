<template>
    <div class="planos">
        <div class="title">
            <h1>Você está muito próximo de mudar a forma de</h1>
            <h1><u>hospedar seu site</u></h1>
        </div>
        <div class="string-escolher-plano">
            <p>Escolha seu plano</p>
        </div>
        <div class="must-used">
            <p>MAIS USADO</p>
        </div>
        <div class="escolher-plano">
            <div class="escolher-plano1">
                <h2>Hospedagem 1</h2>
            </div>
            <div class="escolher-plano2">
                <h2>Hospedagem 2</h2>
            </div>
            <div class="escolher-plano3">
                <h2>Hospedagem 3</h2>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'PlanosView',
    data () {
        return {
            
        }
    }
}
</script>

<style>
u {
color: #F30168;
}
.planos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.must-used {
    background-color: rgb(32, 189, 27);
    color: #ffffff;
    display: inline-block;
    border-radius: 5px;
    padding:2px;
}
.escolher-plano {
    display:flex;
    gap: 40px;
}
.escolher-plano1 {
    background-color: #ffffff;
}
.escolher-plano2 {
    background-color: #ffffff;
}
.escolher-plano3 {
    background-color: #ffffff;
}
</style>