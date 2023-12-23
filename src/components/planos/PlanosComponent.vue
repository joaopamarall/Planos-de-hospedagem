<template>
	<div class="escolher-plano">
		<div class="hospedagem-info">
			<h2 v-if="tipo === 'Hospedagem 1'" :style="{ margin: '20px 0 0 0' }">
				{{ tipo }}
			</h2>
			<h2 v-else>
				{{ tipo }}
			</h2>
			<div class="valor-monetario">
				<span v-if="preco == 0" :style="{ position: 'relative', top: '20px' }"
					><strong>Grátis</strong></span
				>
				<span v-if="preco > 0">
					R$<strong>{{ preco > 0 ? preco : "Grátis" }}</strong
					>/mês
				</span>
			</div>
			<div v-if="preco == 0" :style="{ position: 'relative', top: '12px' }">
				Você não paga nada para usar
			</div>
			<div v-else>
				{{ condicao }}
			</div>
			<div>sem taxa de setup</div>
			<hr />
			<div>
				{{ preco > 0 ? siteMaisVisita : "Ideal para quem está começando." }}
			</div>
			<hr />
		</div>
		<button class="escolher-plano-button" @click="changeThisPlan">
			ESCOLHER ESSE PLANO
		</button>
		<div>
			<h3>
				Seu site em servidores
				<u>no {{ preco > 0 ? paisServidor : "Estados Unidos" }}</u>
			</h3>
			<ul class="lista-conteudo" v-if="preco == 0">
				<li v-for="(item, index) in listaDeServidoresGratis" :key="index">
					{{ item }}
				</li>
			</ul>
			<ul class="lista-conteudo" v-if="preco > 0 && preco < 999">
				<li v-for="(item, index) in listaDeServidores499" :key="index">
					{{ item }}
				</li>
			</ul>
			<ul class="lista-conteudo" v-if="preco > 499">
				<li v-for="(item, index) in listaDeServidores999" :key="index">
					{{ item }}
				</li>
			</ul>
			<h3>Suporte 24 horas, 7 dias por semana grátis;</h3>
			<h3>Aplicativos disponíveis:</h3>
			<ul class="lista-conteudo">
				<li v-for="(item, index) in listaDeAplicativos" :key="index">
					{{ item }}
				</li>
			</ul>
			<h3 v-if="preco > 0">Migração gratuita;</h3>
			<ul class="lista-conteudo" v-if="preco > 0">
				<li v-for="(item, index) in migracaoGratuita" :key="index">
					{{ item }}
				</li>
			</ul>
			<h3>Você ainda tem</h3>
			<ul class="lista-conteudo">
				<li v-for="(item, index) in voceAindaTem" :key="index">{{ item }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props: ["tipo", "preco", "condicao", "siteMaisVisita", "paisServidor"],
	data() {
		return {
			listaDeServidoresGratis: [
				"Servidores em nossos data center americanos;",
				"ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0;",
				"1 usuário de FTP para upload ou download;",
				"1 contas de e-mails profissionais;",
				"1 subdomínio gratuito;",
			],
			listaDeServidores499: [
				"Servidores em nossos data center de São Paulo",
				"ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0;",
				"10 usuário de FTP para upload ou download;",
				"30 contas de e-mails profissionais;",
				"10 subdomínios gratuito;",
			],
			listaDeServidores999: [
				"Servidores em nossos data center de São Paulo",
				"ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0;",
				"Ilimitados usuário de FTP para upload ou download;",
				"Ilimitadas contas de e-mails profissionais;",
				"50 subdomínios gratuito;",
			],
			listaDeAplicativos: ["Wordpress;", "Drupal;", "entre outros..."],
			voceAindaTem: [
				"Webmail RoundCube;",
				"AntiSpam;",
				"Painel de gerenciamento de DNS;",
				"Painel de controle web;",
				"Configurações de PHP personalizáveis;",
				"Certificado SSL Grátis;",
				"Transferência ilimitada.",
			],
			migracaoGratuita: ["Migramos todos seus sites para nossos servidores;"],
		};
	},
	methods: {
		changeThisPlan() {
			if (this.preco === "0") {
				this.$router.push("/FirstPlanView");
			} else if (this.preco > 0 && this.preco < 999) {
				this.$router.push("/");
			} else {
				this.$router.push("/");
			}
		},
	},
};
</script>

<style scoped>
.escolher-plano {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	padding: 40px;
	gap: 25px;
	max-width: 15rem;
	color: #666666;
	background-color: #fff;
	border-radius: 8px;
}
.hospedagem-info {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	text-align: center;
}
.valor-monetario {
	color: #f30168;
}
.escolher-plano-button {
	background-color: #f30168;
	border: none;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	padding: 16px;
	font-size: 16px;
	cursor: pointer;
}
.lista-conteudo {
	list-style-type: none;
	padding-left: 0;
}
.lista-conteudo li::before {
	content: "\2713";
	margin-right: 5px;
}
hr {
	width: 100%;
	border-color: rgba(196, 196, 196, 0.5);
	margin: 0;
}
ul {
	padding-left: 20px;
}
strong {
	font-size: 2rem;
}
</style>
