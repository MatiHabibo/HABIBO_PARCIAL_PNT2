<template>

  <section class="src-components-respuestas">
     <table class="table table-dark">
      <thead>
        <tr>
          <th>PREGUNTA</th>
          <th>RESPUESTA</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pre, index) in this.resp" :key="index">
          <td> PREGUNTA {{ pre.pregunta }}</td>
          <td> RESPUESTA: {{pre.respuesta}} </td>
        </tr>
      </tbody>
     </table>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-respuestas',
    props: [],
    mounted () {

    },
    data () {
      return {
        resp:[
          {pregunta: 1, respuesta: ['C']},
          {pregunta: 2, respuesta: ['C']},
          {pregunta: 3, respuesta: ['B']},
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-respuestas {

  }
</style>
