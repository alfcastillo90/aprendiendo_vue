<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Formulario</h2>
        <form class="mid-form" @submit.prevent="mostrarUsuario()">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" v-model="user.nombre" />
            <div v-if="!$v.user.nombre.required && submited">
              Este campo es requerido
            </div>
             <div v-if="!$v.user.nombre.minLength && submited">
              Este campo debe tener mas caracteres
            </div>
          </div>

          <div class="form-group">
            <label for="apellidos">Apellidos</label>
            <input type="text" name="apellidos" v-model="user.apellidos" />
             <div v-if="!$v.user.apellidos.required && submited">
                Este campo es requerido
            </div>
            <div v-if="!$v.user.apellidos.minLength && submited">
              Este campo debe tener mas caracteres
            </div>
          </div>

          <div class="form-group">
            <label for="bio">Biografia</label>
            <textarea name="bio" v-model="user.bio"></textarea>
             <div v-if="!$v.user.bio.required && submited">
              Este campo es requerido
            </div>
             <div v-if="!$v.user.bio.minLength && submited">
              Este campo debe tener mas caracteres
            </div>
          </div>

          <div class="form-group radibuttons">
            <input type="radio" name="genero" value="hombre" v-model="user.genero" checked/> Hombre
            <input type="radio" name="genero" value="mujer" v-model="user.genero" /> Mujer
            <input type="radio" name="genero" value="otro" v-model="user.genero" /> Otro
          </div>

          <div class="clearfix"></div>

          <input type="submit" value="Enviar" class="btn btn-success" />
        </form>
        <div class="datos" v-if="user.nombre && user.apellidos">
          <h3>{{user.nombre + " " + user.apellidos}}</h3>
        </div>
      </section>
    </div>
    <Sidebar></Sidebar>
    <div class="clearfix"></div>
  </div>
</template>
<script>
import { required, minLength } from 'vuelidate/lib/validators'
import Sidebar from "./Sidebar.vue";

export default {
  name: "Formulario",
  components: {
    Sidebar
  },
  validations: {
    user: {
      nombre: {
      required,
      minLength: minLength(2)
    },
    apellidos: {
      required,
      minLength: minLength(2)
    },
    bio: {
      required,
      minLength: minLength(10)
    }
    }
  },
  data() {
    return {
      submited: false,
      user: {
        nombre: '',
        apellidos: '',
        bio: '',
        genero: ''
      }
    }
  },
  methods: {
    mostrarUsuario(){
      this.submited = true;
      this.$v.$touch();
      if(this.$v.$invalid) {
        return false;
      }
      alert("Validación pasada");

    }
  }
};
</script>