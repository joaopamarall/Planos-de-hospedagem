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
                <h3>Hospedagem 1</h3>
                <h2>Grátis</h2>
                <p>você não paga nada para usar</p>
                <p>sem taxa de setup</p>
                <p>Ideal para quem está começando.</p>
                <button>ESCOLHER ESSE PLANO</button>
                <p>Seu site em servidores no Estados Unidos.</p>
            </div>
            <div class="escolher-plano2">
                <h3>Hospedagem 2</h3>
                <p>R$</p><h2>499</h2><p>/mês</p>
                <p>cobrado mensalmente</p>
                <p>sem taxa de setup</p>
                <p>Ideal para site com mais mais de 30k de visitas.</p>
                <button>ESCOLHER ESSE PLANO</button>
                <p>Seu site em servidores no Brasil.</p>
            </div>
            <div class="escolher-plano3">
                <h3>Hospedagem 3</h3>
                <p>R$</p><h2>999</h2><p>/mês</p>
                <p>cobrado mensalmente</p>
                <p>sem taxa de setup</p>
                <p>Ideal para site com mais mais de 60k de visitas.</p>
                <button>ESCOLHER ESSE PLANO</button>
                <p>Seu site em servidores no Brasil.</p>
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