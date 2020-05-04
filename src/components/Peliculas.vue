<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Películas</h2>
        <div class="mis-datos" v-if="misDatos">
          <p v-html="misDatos"></p>
          <br />
          {{web | mayusculas | concatenaYear('Este es el mejor año')}}
        </div>
        <div class="favorita" v-if="favorita">
          La película marcada es:
          <h3>{{favorita.title}}</h3>
        </div>
        <!--Listado articulos-->
        <div id="articles">
          <div v-for="pelicula in peliculasMayusculas" v-bind:key="pelicula.title">
            <Pelicula :pelicula="pelicula" v-on:favorita="haLlegadoLaPeliculaFavorita"></Pelicula>
          </div>
          <!--AÑADIR ARTICULOS VIA JS-->
        </div>
      </section>
    </div>
    <Sidebar></Sidebar>
    <div class="clearfix"></div>
  </div>
</template>
<script>
import Pelicula from "./Pelicula.vue";
import Sidebar from "./Sidebar.vue";

export default {
  name: "Peliculas",
  components: {
    Pelicula,
    Sidebar
  },
  methods: {
    haLlegadoLaPeliculaFavorita(favorita) {
     this.favorita = favorita;
    }
  },
  filters: {
    mayusculas(value) {
      return value.toUpperCase();
    },
    concatenaYear(value, message) {
      var date = new Date();
      return value + ' ' + date.getFullYear() + ' ' + message;
    }
  },
  computed: {
    peliculasMayusculas() {
      var peliculasMod = this.peliculas;
      
      for(var i = 0; i < peliculasMod.length; i++) {
        peliculasMod[i].title = peliculasMod[i].title.toUpperCase();
      }
      
      return peliculasMod;
    },
    misDatos() {
      return this.nombre + ' ' + this.apellidos + ' ' + '<br/>' + '<strong>Linkedin: </strong>' + this.web;
    }
  },
  data() {
    return {
      nombre: 'Carlos',
      apellidos: 'Castillo',
      web: 'https://www.linkedin.com/in/alfcastillo/',
      favorita: null,
      peliculas: [
        {
          title: "Batman vs superman",
          year: 2017,
          image:
            "https://dam.smashmexico.com.mx/wp-content/uploads/2018/04/24160545/batman_v_superman_dawn_of_justice-cover.jpg"
        },
        {
          title: "Gran Torino",
          year: 2015,
          image:
            "https://razonesparacreer.com/wp-content/uploads/2017/10/grantorino-708x350@2x.jpg"
        },
        {
          title: "El señor de los anillos",
          year: 2003,
          image:
            "https://as01.epimg.net/epik/imagenes/2020/03/28/portada/1585384112_802989_1585386362_noticia_normal_recorte1.jpg"
        }
      ]
    };
  }
};
</script>