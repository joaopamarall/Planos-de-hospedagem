<template>
    <div class="planos">
        <div class="planos-title">
            <h1>Você está muito próximo de mudar a forma de</h1>
            <h1><u>hospedar seu site</u></h1>
        </div>
        <div class="planos-paragrafo1">
            <p>Escolha seu plano</p>
        </div>
        <div class="planos-paragrafo2">
            <p>MAIS USADO</p>
        </div>
        <div class="escolher-plano">
            <div class="escolher-plano1">
                <h3>Hospedagem 1</h3>
                <h2>Grátis</h2>
                <li>você não paga nada para usar</li>
                <li>sem taxa de setup</li>
                <li>Ideal para quem está começando.</li>
                <button>ESCOLHER ESSE PLANO</button>
                <li>Seu site em servidores no Estados Unidos.</li>
                <li>Servidores em nossos data center americanos;</li>
                <li>ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0;</li>
                <li>1 usuário de FTP para upload ou download;</li>
                <li>1 contas de e-mails profissionais;</li>
                <li>1 subdomínio gratuito;</li>
                <li>Suporte 24 horas, 7 dias por semana grátis;</li>
                <li>Aplicativos disponíveis;</li>
                <li> Wordpress;</li>
                <li>Drupal;</li>
                <li>entre outros...</li>
                <li> Você ainda tem</li>
                <li>Webmail RoundCube;
                <li>AntiSpam;</li>
                <li>Painel de gerenciamento de DNS;</li>
                <li>Painel de controle web;</li>
                <li>Configurações de PHP personalizáveis;</li>
                <li>Certificado SSL Grátis;</li>
                <li>Transferência ilimitada.</li>   
            </div>
            <div class="escolher-plano2">
                <h3>Hospedagem 2</h3>
                <div class="escolher-plano2-valor2">
                    <p>R$</p><h2>499</h2><p>/mês</p>
                </div>
                <li>cobrado mensalmente</li>
                <li>sem taxa de setup</li>
                <li>Ideal para site com mais mais de 30k de visitas.</li>
                <button>ESCOLHER ESSE PLANO</button>
                <li>Seu site em servidores no Brasil.</li>
                <li>Servidores em nosso de São Paulo;</li>
                <li>ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0;</li>
                <li>10 usuário de FTP para upload ou download;</li>
                <li>30 contas de e-mails profissionais;</li>
                <li>10 bdomínio gratuito;</li>
                <li>Suporte 24 horas, 7 dias por semana grátis;</li>
                <li>Aplicativos disponíveis;</li>
                <li>Wordpress;</li>
                <li>Drupal;</li>
                <li>entre outros...</li>
                <li>Migração Gratuita;</li>
                <li>Migramos todos seus sites para nossos servidores;</li>
                <li>Você ainda tem</li>
                <li>Webmail RoundCube;</li>
                <li>AntiSpam;</li>
                <li>Painel de gerenciamento de DNS;</li>
                <li>Painel de controle web;</li>
                <li>Configurações de PHP personalizáveis;</li>
                <li>Certificado SSL Grátis;</li>
                <li>Transferência ilimitada.</li>
            </div>
            <div class="escolher-plano3">
                <h3>Hospedagem 3</h3>
                <p>R$<span class=capslock>999</span>/mês</p>
                <li>cobrado mensalmente</li>
                <li>sem taxa de setup</li>
                <li>Ideal para site com mais mais de 60k de visitas.</li>
                <button>ESCOLHER ESSE PLANO</button>
                <li>Seu site em servidores no Brasil.</li>
                <li>Servidores em nosso de São Paulo;</li>
                <li>ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0;</li>
                <li>Ilimitados usuário de FTP para upload ou download;</li>
                <li>Ilimitadas contas de e-mails profissionais;</li>
                <li>50 bdomínio gratuito;</li>
                <li>Suporte 24 horas, 7 dias por semana grátis;</li>
                <li>Aplicativos disponíveis;</li>
                <li>Wordpress;</li>
                <li>Drupal;</li>
                <li>entre outros...</li>
                <li>Migração Gratuita;</li>
                <li>Migramos todos seus sites para nossos servidores;</li>
                <li>Você ainda tem</li>
                <li>Webmail RoundCube;</li>
                <li>AntiSpam;</li>
                <li>Painel de gerenciamento de DNS;</li>
                <li>Painel de controle web;</li>
                <li>Configurações de PHP personalizáveis;</li>
                <li>Certificado SSL Grátis;</li>
                <li>Transferência ilimitada.</li>
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
.planos-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.planos-paragrafo2 {
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
.escolher-plano {
    display: flex;
    flex-direction: row;
    gap: 40px;
}
.escolher-plano1, .escolher-plano2, .escolher-plano3 {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
}
.escolher-plano2-valor2 {
    display: flex;
    flex-direction: row;
    gap: 4px;
}
.capslock {
    font-size: 24px;
    font-weight: bold;
}
</style>