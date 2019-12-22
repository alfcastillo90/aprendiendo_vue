<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <Slider></Slider>
    <div class="center">
      <LastArticles></LastArticles>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>
<script>
import HeaderComponent from "./components/Header.vue";
import FooterComponent from "./components/FooterComponent";
import LastArticles from "./components/LastArticles";
import Slider from "./components/Slider.vue";
import Sidebar from "./components/Sidebar.vue";
export default {
  name: "app",
  components: {
    HeaderComponent,
    FooterComponent,
    LastArticles,
    Slider,
    Sidebar
  }
};
</script>
<style>
@import "./assets/style.css";
</style>
