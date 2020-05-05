import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate';
//Componentes creados
import LastArticles from './components/LastArticles.vue'
import MiComponente from './components/MiComponente.vue'
import HelloWorld from './components/HelloWorld.vue'
import Blog from './components/Blog.vue'
import Formulario from './components/Formulario.vue'
import Pagina from './components/Pagina.vue'
import NoEncontrado from './components/NoEncontrado.vue'
import Peliculas from './components/Peliculas.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuelidate);

const routes = [
  { path: '/', component: LastArticles },
  { path: '/home', component: LastArticles },
  { path: '/blog', component: Blog },
  { path: '/formulario', component: Formulario },
  { path: '/hola-mundo', component: HelloWorld },
  { path: '/mi-componente', component: MiComponente },
  { path: '/pagina/:id?', name:'pagina', component: Pagina },
  { path: '/peliculas', name:'peliculas', component: Peliculas },
  { path: '/ultimos-articulos', component: LastArticles },
  { path: '*', component: NoEncontrado}
];

const router = new VueRouter({
  routes,
  mode:'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
