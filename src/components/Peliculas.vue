<template>
  <section id="content">
    <h2 class="subheader">Películas</h2>
      <!--Listado articulos-->
      <div id="articles">
        <article class="article-item" id="article-template" v-for="pelicula in peliculas" v-bind:key="pelicula.title">
          <div class="image-wrap">
            <img
              :src="pelicula.image"
              :alt="pelicula.title"
              :title="pelicula.title"
            />
          </div>
          <h2>{{pelicula.title}}</h2>
          <span class="date" :class="{
            yeargreen: pelicula.year > 2015,
            yearred: pelicula.year <= 2015
          }">
            {{pelicula.year}}
          </span>
          <a href="#">Leer más</a>

          <div class="clearfix"></div>
        </article>
        <!--AÑADIR ARTICULOS VIA JS-->
      </div>
  </section>
</template>
<script>
export default {
  name: "Peliculas",
  data() {
    return {
      peliculas: [
        { title: 'Batman vs superman', year: 2017, image: 'https://dam.smashmexico.com.mx/wp-content/uploads/2018/04/24160545/batman_v_superman_dawn_of_justice-cover.jpg'},
        { title: 'Gran Torino', year: 2015, image: 'https://razonesparacreer.com/wp-content/uploads/2017/10/grantorino-708x350@2x.jpg'},
        { title: 'El señor de los anillos', year: 2003, image: 'https://as01.epimg.net/epik/imagenes/2020/03/28/portada/1585384112_802989_1585386362_noticia_normal_recorte1.jpg'},
        { title: 'Batman vs superman', year: 2017, image: 'https://dam.smashmexico.com.mx/wp-content/uploads/2018/04/24160545/batman_v_superman_dawn_of_justice-cover.jpg'},
      ]
    }
  }
};
</script>