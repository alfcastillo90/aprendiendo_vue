import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//Componentes creados
import LastArticles from './components/LastArticles.vue'
import MiComponente from './components/MiComponente.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {path: '/', component: LastArticles},
  {path: '/home', component: LastArticles},
  {path: '/mi-componente', component: MiComponente},
  {path: '/ultimos-articulos', component: LastArticles}
];

const router = new VueRouter({
  routes,
  mode:'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
