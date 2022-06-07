<template>
  <section class="src-components-nav-bar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <router-link to="/">
              <a class="nav-link" href="#">Inicio</a>
            </router-link>

            <router-link to="/formulario">
              <a class="nav-link" href="#">Formulario</a>
            </router-link>

            <router-link to="/respuestas">
              <a class="nav-link" href="#">Respuestas</a>
            </router-link>
    </nav>
  </section>
</template>

<script>
export default {
  name: "src-components-nav-bar",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css">
.src-components-nav-bar {
}
</style>
