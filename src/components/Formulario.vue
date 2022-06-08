<template>
  <section class="src-components-formulario">
    <div class="jumbotron formu">
    <vue-form :state="formState" @submit.prevent="enviar()">
      <validate tag="div">
        <label for="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          class="form-control"
          autocomplete="off"
          v-model.trim="formData.nombre"
          required
          :minlength="nomMinLength"
          :maxlength="nomMaxLength"
          sin-espacios
        />

        <field-messages name="nombre" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">
            Campo requerido
          </div>
          <div slot="minlength" class="alert alert-danger mt-1">
            Este campo requiere como mínimo {{ nomMinLength }} caracteres.
          </div>
          <div slot="maxlength" class="alert alert-danger mt-1">
            Este campo requiere como mínimo {{ nomMaxLength }} caracteres.
          </div>
          <div slot="sin-espacios" class="alert alert-danger mt-1">
            No puede haber espacios intermedios
          </div>
        </field-messages>
      </validate>
      <br />

      <validate tag="div">
        <label for="apellido">Apellido</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          class="form-control"
          autocomplete="off"
          v-model.trim="formData.apellido"
          required
          :minlength="nomMinLength"
          :maxlength="nomMaxLength"
          sin-espacios
        />

        <field-messages name="apellido" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">
            Campo requerido
          </div>
          <div slot="minlength" class="alert alert-danger mt-1">
            Este campo requiere como mínimo {{ nomMinLength }} caracteres.
          </div>
          <div slot="maxlength" class="alert alert-danger mt-1">
            Este campo requiere como mínimo {{ nomMaxLength }} caracteres.
          </div>
          <div slot="sin-espacios" class="alert alert-danger mt-1">
            No puede haber espacios intermedios
          </div>
        </field-messages>
      </validate>
      <br />

      <validate tag="div">
        <label for="nota">Nota</label>
        <input
          type="number"
          id="nota"
          name="nota"
          class="form-control"
          autocomplete="off"
          v-model.trim="formData.nota"
          required
          :min="notaMin"
          :max="notaMax"
        />

        <field-messages name="nota" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">
            Campo requerido
          </div>
          <div slot="min" class="alert alert-danger mt-1">
            Nota minima {{ notaMin }}
          </div>
          <div slot="max" class="alert alert-danger mt-1">
            Nota maxima {{ notaMax }}
          </div>
        </field-messages>
      </validate>
      <br />
      <button class="btn btn-success my-4" :disabled="formState.$invalid">
        Enviar
      </button>
    </vue-form>

<div class="jumbotron tabla">
    <table v-show="this.alumnos.length > 0" class="table table-dark">
      <thead>
        <tr>
          <th>Nombre y apellido</th>
          <th>Nota</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(al, index) in this.alumnos" :key="index">
          <td>{{ al.nombre }} {{ al.apellido }}</td>
          <td :style="{ color: colorNota(al) }">{{ al.nota }}</td>
        </tr>
        <tr>
          <td>{{ this.formData.Nombre }} {{ this.formData.Apellido }}</td>
          <td>{{ this.formData.Nota }}</td>
        </tr>
        <tr>
          <td>Promedio total:</td>
          <td
            :style="{
              color:
                this.alumnos.length == 0
                  ? 'white'
                  : colorNotaGenerico(calcularPromedio),
            }"
          >
            {{ calcularPromedio }}
          </td>
        </tr>
      </tbody>
    </table>
    <div v-show="this.alumnos.length == 0">
      <h3>NO HAY ALUMNOS PARA MOSTRAR</h3>
    </div>
</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-components-formulario",
  props: [],
  mounted() {},
  data() {
    return {
      formState: {},
      formData: this.dataInicial(),
      nomMinLength: 3,
      nomMaxLength: 15,
      notaMin: 0,
      notaMax: 10,
      alumnos: [],
      notaBaja: 4,
      notaAlta: 7,
      notasTotales: 0,
    };
  },
  methods: {
    dataInicial() {
      return {
        nombre: "",
        apellido: "",
        nota: "",
      };
    },
    enviar() {
      this.notasTotales = this.notasTotales + Number(this.formData.nota);
      this.alumnos.push(this.formData);
      this.formData = this.dataInicial();
      this.formState._reset();
    },
    colorNota(a) {
      var notaAlumno = a.nota;
      return this.colorNotaGenerico(notaAlumno);
    },
    colorNotaGenerico(nota) {
      var col;
      if (nota < this.notaBaja) {
        col = "red";
      } else if (nota >= this.notaBaja && nota < this.notaAlta) {
        col = "yellow";
      } else {
        col = "green";
      }
      return col;
    },
  },
  computed: {
    calcularPromedio() {
      var cantAlumnos = this.alumnos.length;
      var dev;
      if (cantAlumnos > 0) {
        dev = Number((this.notasTotales / cantAlumnos).toFixed(2));
      } else {
        dev = "no hay alumnos";
      }

      return dev;
    },
  },
};
</script>

<style scoped lang="css">
.src-components-formulario {
}

.formu{
  background-color: beige;
}

.tabla{
background-color: darkgoldenrod;
}

</style>
