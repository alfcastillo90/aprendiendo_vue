<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Formulario</h2>
      </section>
    </div>
    <Sidebar></Sidebar>
    <div class="clearfix"></div>
  </div>
</template>
<script>
import Sidebar from "./Sidebar.vue";

export default {
  name: "Formulario",
   components: {
    Sidebar
  }
};
</script>