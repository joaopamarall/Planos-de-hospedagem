<template>
	<div class="login">
		<!--<img class="logo" />-->
		<div class="login-card">
			<h1><strong>Entre na sua conta</strong></h1>
			<div>Para acessar sua conta informe seu usuário e senha</div>
			<div class="login-card-p1">Username</div>
			<input type="text" v-model="username" />
			<div class="login-card-p2">Senha</div>
			<input type="password" v-model="senha" />
			<div class="login-card-p3" @click="forgotPasswordAlert">
				Esqueci minha senha
			</div>
			<button class="login-card-button" @click="fazerLogin(username, senha)">
				FAZER LOGIN
			</button>
		</div>
		<div class="direcionar-cadastro">
			<div class="login-card-p4">Ainda não tem conta?</div>
			<router-link to="/PlanosView" class="direcionar-cadastro-link">
				Cadastre-se</router-link
			>
		</div>
	</div>
</template>
<script>
import axios from "axios";
export default {
	name: "LoginView",
	data() {
		return {
			username: "",
			senha: "",
		};
	},
	methods: {
		fazerLogin(username, senha) {
			axios
				.post("https://fakestoreapi.com/auth/login", {
					username: username,
					password: senha,
				})
				.then((res) => {
					console.log("Esta é uma resposta da API", res.data);
					this.$router.push("/LogadoView");
				})
				.catch((error) => {
					console.log("Não consegui fazer login, deu agum erro na API", error);
				});
		},
		forgotPasswordAlert() {
			alert("Solicitação de nova senha enviada com sucesso!");
		},
	},
};
</script>
<style>
body {
	margin: 0;
	background-color: #fafafc;
	color: #292d32;
	font-family: "Montserrat", sans-serif;
	font-family: "Sora", sans-serif;
}
.login {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
}
.login-card {
	background-color: #ffffff;
	height: 470px;
	width: 580px;
	padding: 30px;
	border: 1px solid #e6eaf2;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.login-card-p3 {
	padding: 0 0 24px 0;
	text-align: end;
	color: #515d74;
	cursor: pointer;
}
.login-card-button {
	background-color: #f30168;
	color: #ffffff;
	height: 80px;
	font-size: 16px;
	border: none;
	border-radius: 8px;
	cursor: pointer;
}
.direcionar-cadastro {
	margin-top: 40px;
	display: flex;
	align-items: center;
	gap: 10px;
}
.direcionar-cadastro-link {
	color: #f30168;
}
h1 {
	margin: 0;
}
h4 {
	margin: 0;
	padding: 10px 0 0 0;
}
div {
	margin: 0;
}
.login-card-p1,
.login-card-p2 {
	padding: 28px 0 0 0;
}
input {
	height: 80px;
	border: 1px solid #515d7480;
	border-radius: 8px;
	font-size: 28px;
	padding: 0 20px;
}
</style>
