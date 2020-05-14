<template src="./CreateArticle.html"></template>
<script>
import axios from "axios";
import Article from "../models/Article";
import Global from "../Global";
import Sidebar from "./Sidebar.vue";
import { required } from "vuelidate/lib/validators";
import swal from 'sweetalert';

export default {
  name: "CreateArticle",
  components: {
    Sidebar
  },
  validations: {
    article: {
      title: {
        required
      },
      content: {
        required
      }
    }
  },
  data() {
    return {
      article: new Article("", "", null, ""),
      file: "",
      submitted: false,
      url: Global.url
    };
  },
  mounted() {
    console.log(this.articles);
  },
  methods: {
    fileChange() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
    save() {
      this.submitted = true;
      this.$v.$touch();

      if (this.$v.invalid) {
        return false;
      } else {
        axios
          .post(this.url + "save", this.article)
          .then(response => {
            if (response.data.result == "success") {
              //subida de archivo
              if (
                this.file != null &&
                this.file != undefined &&
                this.file != ""
              ) {
                const formData = new FormData();
                formData.append("file0", this.file, this.file.name);

                const articleId = response.data.article._id;
                console.log(articleId);
                console.log(response.data);
                axios.post(this.url + "upload-image/" + articleId, formData)
                  .then(response => {
                    if (response.data.article) {
                      swal(
                        'Artículo creado',
                        'El artículo se ha creado correctamente',
                        'success'
                      );

                      this.$router.push("/blog");
                    } else {
                       swal(
                        'Articulo creado pero con errores',
                        'Registro fallido. El articulo fue registrado sin su imagen',
                        'error'
                      );
                    }
                  })
                  .catch(error => {
                    console.log(error);
                  });
              } else {
                swal(
                  'No se pudo realizar la operación',
                  'Debe cargar una imagen',
                  'error'
                );
              }
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
};
</script>