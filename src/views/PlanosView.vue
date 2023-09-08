<template>
    <div class="planos">
        <planos-title-component-vue />
        <div class="botao-destaque">
            MAIS USADO
        </div>
        <div class="opcoes-planos">
            <planos-component-vue tipo="Hospedagem 1" preco="0"/>
            <planos-component-vue tipo="Hospedagem 2" preco="499" condicao="Cobrado mensalmente" siteMaisVisita="Ideal para site com mais de 30k de visitas." paisServidor="Brasil" />
            <planos-component-vue tipo="Hospedagem 3" preco="999" condicao="Cobrado mensalmente" siteMaisVisita="Ideal para site com mais de 60k de visitas." paisServidor="Brasil" />
        </div>
    </div>
</template>
<script>
import PlanosTitleComponentVue from '@/components/planos/PlanosTitleComponent.vue';
import PlanosComponentVue from '@/components/planos/PlanosComponent.vue'

export default {
    name:'planos-view',
    components: {
        PlanosComponentVue,
        PlanosTitleComponentVue
    },
    data () {
        return {
            
        }
    }
}
</script>

<style>
body {
    background-color: aliceblue;
}
.planos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.botao-destaque {
    background-color: rgb(32, 189, 27);
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding:2px;
    height: 32px;
    width: 120px;
}
.opcoes-planos {
    display: flex;
    justify-content: center;
    gap: 26px;
}
</style>