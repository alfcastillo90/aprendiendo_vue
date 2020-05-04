<template>
  <div class="general">
    <Slider></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">{{titulo}}</h2>
        <hr />
        <h1>Este es mi componente</h1>
        <h2>{{subtitulo}}</h2>
        <h2>Reactividad</h2>
        <input type="text" v-model="nombre" />
        Mi nombre es:
        <strong>{{nombre}}</strong>
        <pre>
      {{$data}}
      </pre>
        <h2>Directivas condicionales</h2>
        <input type="number" v-model="edad" />
        Mi edad es:
        <strong>{{edad}}</strong>
        <p
          class="alert-success-provisional"
          v-if="edad && edad >= 18 && edad < 65"
        >¡Eres mayor de edad!</p>
        <p class="alert-purple-provisional" v-else-if="edad >= 65">¡Eres de avanzada edad!</p>
        <p class="alert-danger-provisional" v-else>¡Eres menor de edad!</p>
        <h2>Directivas iterativas</h2>
        <ol>
          <li v-for="pelicula in peliculas" :key="pelicula">{{pelicula}}</li>
        </ol>
        <hr />
      </section>
    </div>
    <Sidebar></Sidebar>
    <div class="clearfix"></div>
  </div>
</template>
<script>
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";

export default {
  name: "MiComponente",
  components: {
    Slider,
    Sidebar
  },
  data() {
    return {
      titulo: "Mi componente",
      subtitulo: "Soy el subtítulo de mi componente",
      nombre: "",
      edad: 18,
      peliculas: [
        "Batman vs Superman",
        "El señor de los anillos",
        "Spiderman",
        "Anabelle"
      ]
    };
  }
};
</script>