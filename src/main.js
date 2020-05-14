import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate';
import VueMoment from 'vue-moment';
import moment from 'moment';
import 'moment/locale/es';
//Componentes creados
import LastArticles from './components/LastArticles.vue'
import MiComponente from './components/MiComponente.vue'
import HelloWorld from './components/HelloWorld.vue'
import Blog from './components/Blog.vue'
import Formulario from './components/Formulario.vue'
import NoEncontrado from './components/NoEncontrado.vue'
import Pagina from './components/Pagina.vue'
import Peliculas from './components/Peliculas.vue'
import Redirect from './components/Redirect.vue';
import Search from './components/Search.vue';
import Article from './components/Article.vue';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle.vue';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(VueMoment, { moment });

const routes = [
  { path: '/', component: LastArticles },
  { path: '/articulo/:id', name: 'article', component: Article },
  { path: '/blog', component: Blog },
  { path: '/buscador/:searchString', component: Search },
  { path: '/crear-articulo', name: 'create', component: CreateArticle },
  { path: '/editar/:id', name: 'edit', component: EditArticle },
  { path: '/home', component: LastArticles },
  { path: '/formulario', component: Formulario },
  { path: '/hola-mundo', component: HelloWorld },
  { path: '/mi-componente', component: MiComponente },
  { path: '/pagina/:id?', name:'pagina', component: Pagina },
  { path: '/peliculas', name:'peliculas', component: Peliculas },
  { path: '/redirect/:searchString', name:'redirect', component: Redirect },
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
