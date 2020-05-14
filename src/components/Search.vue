<template>
  <div class="general">
    <Slider :texto="'Busqueda: ' + searchString"></Slider>
    <div class="center">
      <section id="content">
        <h1 class="subheader" v-if="articles">Artículos encontrados</h1>
        <h1 class="subheader" v-else>Sin resultados</h1>
        
        <div id="articles" v-if="articles">
          <Articles :articles="articles"></Articles>
        </div>
        <div v-else>
          <h2>No hay artículos que coincidan con tu búsqueda</h2>
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
  name: "Search",
  components: {
    Articles,
    Slider,
    Sidebar
  },
  data(){
    return {
      url: Global.url,
      articles: [],
      searchString: null
    }
  },
  mounted(){
    this.searchString = this.$route.params.searchString;
    this.getArticlesBySearch(this.searchString);
  },
  methods: {
    getArticlesBySearch(searchString){
      axios.get(this.url + 'search/' + searchString)
      .then(res => {
        if (res.data.status == 'success') {
          this.articles = res.data.articles;
        }
      })
    }
  }
};
</script>