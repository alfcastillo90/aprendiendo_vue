<template>
  <div class="general">
    <Slider texto="Bienvenido a esta página de VueJS" home="true"></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Últimos artículos</h2>
        <!--Listado articulos-->
        <div id="articles">
           <Articles :articles="articles"></Articles>
          <!--AÑADIR ARTICULOS VIA JS-->
        </div>
      </section>
    </div>
    <Sidebar></Sidebar>
    <div class="clearfix"></div>
  </div>
</template>
<script>
import axios from 'axios';
import Global from '../Global';
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
import Articles from "./Articles.vue";

export default {
  name: "LastArticles",
  components: {
    Articles,
    Slider,
    Sidebar
  },
  data(){
    return {
      url: Global.url,
      articles: []
    }
  },
  mounted(){
    this.getArticles();
  },
  methods: {
    getArticles(){
      axios.get(this.url + 'articles/true')
      .then(res => {
        if (res.data.status == 'success') {
          this.articles = res.data.articles;
        }
      })
    }
  }
};
</script>