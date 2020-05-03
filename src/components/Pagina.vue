<template>
    <section id="content">
        <h2 class="subheader">Página</h2>
        <h3>{{id_desde_url}}</h3>
        <button @click="actualizarNombre()">Actualizar nombre</button>
        <button @click="redirigirAlBlog()">Redirigir</button>
        <h4>{{nombre}}</h4>
    </section>
</template>
<script>
export default {
    name: "Pagina",
    created(){ // cuando el componente se crea pero no se ha terminado de cargar
        console.log('componente creado')
    },
    mounted() { // cuando el componente se inicia
        this.id_desde_url = this.$route.params.id;
        console.log('componente montado');
    },
    updated(){
        console.log('componente actualizado');
    },
    destroyed() { // Se ejecuta cuando el componente se elimina
        console.log('componente eliminado');
    },
    data(){
        return {
            id_desde_url: null,
            nombre: 'Carlos Castillo'
        }
    },
    methods: {
        actualizarNombre() {
            this.nombre = 'Carlos Alfredo Castillo Rodriguez';
            console.log(this.nombre)
        },
        redirigirAlBlog() {
            this.$router.push({name:'pagina', params: {id: 'ruta redirigida' }});
        }
    }
    

};
</script>