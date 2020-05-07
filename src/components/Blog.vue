<template>
  <div class="general">
    <Slider texto="Blog"></Slider>
    <div class="center">
      <section id="content">
        <h1 class="subheader">Blog</h1>
        <div id="articles" v-if="articles">
          <Articles :articles="articles"></Articles>
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
  name: "Blog",
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
      axios.get(this.url + 'articles')
      .then(res => {
        if (res.data.status == 'success') {
          this.articles = res.data.articles;
        }
      })
    }
  }
};
</script>