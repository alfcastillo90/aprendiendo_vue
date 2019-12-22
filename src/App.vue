<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <Slider></Slider>
    <div class="cender">
      <LastArticles></LastArticles>
      <Sidebar></Sidebar>
    </div>
    <div class="clearfix"></div>
      <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue'
import FooterComponent from './components/FooterComponent'
import LastArticles from './components/LastArticles'
import Slider from './components/Slider.vue'
import Sidebar from './components/Sidebar.vue'
export default {
  name: 'app',
  components: {
    HeaderComponent,
    FooterComponent,
    LastArticles,
    Slider,
    Sidebar
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
@import './assets/style.css'
</style>
