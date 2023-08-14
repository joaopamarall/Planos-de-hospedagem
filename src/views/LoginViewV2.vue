<template>
    <div class="login">
      <!--<img class="logo" />-->
      <div class="login-card">
        <h1><strong>Entre na sua conta</strong></h1>
        <p>Para acessar sua conta informe seu e-mail e senha</p>
        <p>E-mail</p>
        <input type="email" placeholder="Seu E-mail" v-model="email" />
        {{ email }}
        <p>Senha</p>
        <input type="password" placeholder="Sua Senha" v-model="senha"/>
        {{ senha }}
        <p>Esqueci a senha</p>
        <!-- <button class="login-card-button" @click="redirectTo(false, true)">FAZER LOGIN</button>
        <button class="login-card-button" @click="fazerLogin(email, senha)">FAZER LOGIN</button> -->
        <button class="login-card-button" @click="chamandoApi()">FAZER LOGIN</button>
      </div>
      <p>
        Ainda não tem conta?<router-link to="/PlanosView">Cadastre-se</router-link>
      </p>
    </div>
  </template>
  <script>
  import axios from 'axios'
  export default {
    name: "LoginViewv2",
    data() {
      return {
        possoMandarParaLogin: true,
        email: '',
        senha: '',
      }
    },
    methods: {
      // redirectTo(parametro, parametro2) {
      //   if(parametro === true) {
      //     this.$router.push('/PlanoSelecionado')
      //   }
      //   if (parametro2 === true) {
      //     this.$router.push('/PlanoSelecionado')
      //   }
      // },
      // fazerLogin(email, senha) {
      //   console.log('Este é o email', email)
      //   console.log('Esta é a senha', senha)
      //   console.log('Este é o valor de email diretamente de data', this.email)
      //   console.log('Esta é a senha diretamente de data', this.senha)
      // },
      chamandoApi() {
        axios.post('https://fakestoreapi.com/auth/login', {
          username: this.email,
          password: this.senha
        })
              .then(res=>{
                console.log(res)
                this.$router.push('/Planos')
              })
              .catch((error)=> {
                console.log('Não consegui fazer login, deu algum erro na API', error)
              })
      }
    }
  };
  </script>