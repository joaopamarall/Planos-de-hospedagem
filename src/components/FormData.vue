<template>
	<div class="formBuilder">
		<h1>Dados pessoais</h1>
		<div>Informe seus dados pessoais para acesso à sua conta</div>
		<form class="dadosPessoais">
			<label for="name">Nome Completo</label>
			<input type="text" id="name" />

			<label for="phone">Celular</label>
			<input type="text" id="phone" />

			<label for="email">E-mail</label>
			<input type="text" id="email" />

			<label for="password">Senha</label>
			<input type="text" id="password" />
			<div>No mínimo 8 caracteres</div>

			<label for="confirmPassword">Confirme sua senha</label>
			<input type="text" id="confirmPassword" />
		</form>
		<hr />
		<h1>Dados do seu site</h1>
		<form class="dadosSite">
			<label for="siteName">Nome do seu site</label>
			<input type="text" id="siteName" />
			<div>Exatamente igual o título do seu site</div>
		</form>
		<hr />
		<label class="custom-checkbox" :class="{ checked: isChecked }">
			<input type="checkbox" v-model="isChecked" />
			<div class="textCheckBox">
				Ao concluir com seu cadastro você concorda com nossos
				<u>termos de uso</u> e <u>politicas de privacidade</u>.
			</div>
		</label>
	</div>
</template>

<script>
export default {};
</script>

<style>
.formBuilder {
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	max-width: 620px;
	padding: 28px 32px;
}

.dadosPessoais {
	display: flex;
	flex-direction: column;
}

.dadosSite {
	display: flex;
	flex-direction: column;
}

.custom-checkbox {
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	gap: 8px;
}

.custom-checkbox input {
	position: relative;
	margin: 0 auto;
	height: auto;
	cursor: pointer;
}

input {
	height: 60px;
	font-size: 16px;
}

label {
	margin-top: 16px;
}
</style>
