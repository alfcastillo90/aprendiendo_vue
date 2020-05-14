<template src="./CreateArticle.html"></template>
<script>
import axios from "axios";
import Article from "../models/Article";
import Global from "../Global";
import Sidebar from "./Sidebar.vue";
import { required } from "vuelidate/lib/validators";
import swal from "sweetalert";

export default {
  name: "EditArticle",
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
      isEdit: true,
      submitted: false,
      url: Global.url
    };
  },
  mounted() {
      var articleId = this.$route.params.id;
      this.getArticle(articleId);
  },
  methods: {
    fileChange() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
    getArticle(articleId) {
      axios.get(this.url + "article/" + articleId).then(res => {
        if (res.data.status == "success") {
          this.article = res.data.article;
        }
      });
    },
    save() {
      this.submitted = true;
      this.$v.$touch();

      if (this.$v.invalid) {
        return false;
      } else {
        axios
          .put(this.url + "article/"+ this.article._id, this.article)
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
                console.log(response.data);
                axios
                  .post(this.url + "upload-image/" + this.article._id, formData)
                  .then(response => {
                    if (response.data.article) {
                      swal(
                        "Artículo creado",
                        "El artículo se ha creado correctamente",
                        "success"
                      );

                      this.$router.push('/articulo/'+this.article._id);
                    } else {
                      swal(
                        "Articulo modificado pero con errores",
                        "Registro fallido. El articulo fue editado sin su imagen",
                        "error"
                      );
                    }
                  })
                  .catch(error => {
                    console.log(error);
                  });
              } else {
                swal(
                  "Artículo editado",
                  "El articulo se ha editado correctamente",
                  "success"
                );

                this.$router.push('/articulo/'+this.article._id);
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