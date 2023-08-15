<template>
  <div class="login">
    <!--<img class="logo" />-->
    <div class="login-card">
      <h1><strong>Entre na sua conta</strong></h1>
      <p>Para acessar sua conta informe seu usuário e senha</p>
      <p class="login-card-p1">Username</p>
      <input type="text" placeholder="Seu Username" v-model="username" />
      <p class="login-card-p2">Senha</p>
      <input type="password" placeholder="Sua Senha" v-model="senha" />
      <p class="login-card-p3">Esqueci minha senha</p>
      <button class="login-card-button" @click="fazerLogin(username, senha)">FAZER LOGIN</button>
    </div>
    <div class="direcionar-cadastro">
        <p class="login-card-p4">Ainda não tem conta?</p><router-link to="/PlanosView" class="direcionar-cadastro-link"> Cadastre-se</router-link>
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
  },
};
</script>
<style>
body {
  margin: 0;
  background-color: #FAFAFC;
  color:#292D32;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Sora', sans-serif;
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
  border: 1px solid #E6EAF2;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
}
.login-card-p3 {
  padding: 0 0 24px 0;
  text-align: end;
  color:#515D74;
}
.login-card-button {
  background-color: #f30168;
  color: #ffffff;
  height: 80px;
  border: 1px solid #f30168;
  border-radius: 4px;
  padding: 0;
  cursor: pointer;
}
.direcionar-cadastro {
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
p {
  margin: 0;
}
.login-card-p1, .login-card-p2 {
  padding: 28px 0 0 0;
}
input {
  height:80px;
  border: 1px solid #515D7480;
  border-radius: 4px;
  font-size: medium;
}
</style>
