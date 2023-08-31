import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/PlanosView",
    name: "Planos",
    component: () =>
      import("../views/PlanosView.vue"),
  },
  {
    path: '/PlanoSelecionadoView1',
    name: 'PlanoSelecionado1',
    component: () => import('../views/PlanoSelecionadoView1.vue')
  },
  {
    path: '/PlanoSelecionadoView2',
    name: 'PlanoSelecionado2',
    component: () => import('../views/PlanoSelecionadoView2.vue')
  },
  {
    path: '/PlanoSelecionadoView3',
    name: 'PlanoSelecionado3',
    component: () => import('../views/PlanoSelecionadoView3.vue')
  },
  {
    path: '/LogadoView',
    name: 'Logado',
    component: () => import('../views/LogadoView.vue')
  },
  // {
  //   path: '/LoginViewV2',
  //   name: 'LoginV2',
  //   component: () => import('../views/LoginViewV2.vue')
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
