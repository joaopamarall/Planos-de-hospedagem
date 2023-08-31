<template>
    <div>
        <button @click="voltarPlanos">oiedkfok</button>
        <div class="before-escolher-plano">
            <div class="planos-title">
                <h1>Você está muito próximo de mudar a forma de</h1>
                <h1><u class="sublinhado-personalizado">hospedar seu site</u></h1>
            </div>
            <div class="planos-title2">
                Escolha seu plano
            </div>
            <div class="planos-mais-usado">
                MAIS USADO
            </div>
        </div>
        <div class="escolher-plano">
            <div class="escolher-plano1">
                <div class="escolher-plano1-part1">
                    <h3>Hospedagem 1</h3>
                    <h2>Grátis</h2>
                    <div class="escolher-plano-text1">você não paga nada para usar</div>
                    <div class="escolher-plano-text2">sem taxa de setup</div>
                    <hr>
                    <div class="escolher-plano-text3">Ideal para quem está começando.</div>
                    <hr>
                    <button class="escolher-plano-button" @click="direcionarPlano1">ESCOLHER ESSE PLANO</button>
                </div>
                <ul class="lista-conteudo">
                    <h4>Seu site em servidores <u>no Estados Unidos.</u></h4>
                    <li>Servidores em nossos data center americanos;</li>
                    <li>ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0;</li>
                    <li>1 usuário de FTP para upload ou download;</li>
                    <li>1 contas de e-mails profissionais;</li>
                    <li>1 subdomínio gratuito;</li>
                    <h4>Suporte 24 horas, 7 dias por semana grátis;</h4>
                    <h4>Aplicativos disponíveis;</h4>
                    <li>Wordpress;</li>
                    <li>Drupal;</li>
                    <li>entre outros...</li>
                    <h4>Você ainda tem</h4>
                    <li>Webmail RoundCube;</li>
                    <li>AntiSpam;</li>
                    <li>Painel de gerenciamento de DNS;</li>
                    <li>Painel de controle web;</li>
                    <li>Configurações de PHP personalizáveis;</li>
                    <li>Certificado SSL Grátis;</li>
                    <li>Transferência ilimitada.</li>
                </ul>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    export default {
        methods: {
            voltarPlanos() {
                this.$router.push('/PlanosView')
            }
        }
    }
    </script>
    
    <style>
    
    </style>