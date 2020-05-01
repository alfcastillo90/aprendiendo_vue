<template>
  <section id="content">
    <h2 class="subheader">{{msg}}</h2>
    <h2>{{texto}}</h2>
    <div style="background:red">
      <MiComponente></MiComponente>
    </div>
  </section>
</template>

<script>
import MiComponente from './MiComponente.vue'
export default {
  name: 'HelloWorld',
  components: {
    MiComponente
  },
  props: {
    msg: String
  },
  data() {
    return {
      texto: "Hola mundo este es mi componente"
    }
  }
}
</script>
