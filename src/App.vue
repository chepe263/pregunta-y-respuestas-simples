<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<div>
  Correcta {{ correctas }} <br>
  InCorrecta {{ incorrectas }}<br><br>
</div>
    <pregunta :opciones="opciones_de_respuesta" id='p20' @resultado_pregunta="resultado" :finalizar_pregunta="siguiente">
      <template #titulo>
        Pregunta 1
      </template>
      <template #contenido-flecha>
        desde otra pregunta :)
      </template>
    </pregunta>

    <pregunta id="dlsld" :opciones="opciones_de_respuesta2" @resultado_pregunta="resultado">
      <template #titulo>
        Pregunta 2
      </template>
    </pregunta>

    <button type="button" @click="reiniciar_pregunta('p20')">
      Reiniciar palabras utilizadas
    </button>
  </div>
</template>

<script>
import Pregunta from './components/preguntas/Pregunta.vue'

export default {
  name: 'app',
  components: {
    Pregunta
  },
  methods: {
    resultado: function(res, pre_id){
      if(res){
        this.correctas++;
      } else {
        this.incorrectas++;
      }
    },
    reiniciar_pregunta: function(pregunta_id){
      this.$root.$emit('pregunta_reiniciar', pregunta_id);
    },
    siguiente: function(pregunta_id, result){
      console.log("siguiente iteracion?", result)
    }
  },
  data() {
    return {
      correctas: 0,
      incorrectas: 0,
      opciones_de_respuesta : [
        {
          'texto': "Color Rojo",
          'correcta': false,
        },{
          'texto': "Color Naranja (Correcto)",
          'correcta': true,
        },{
          'texto': "Color Amarillo",
          'correcta': false,
        },
      ],
      opciones_de_respuesta2 : [
        {
          'texto': "Color Celeste",
          'correcta': false,
        },{
          'texto': "Color Cafe (Correcto)",
          'correcta': true,
        },{
          'texto': "Color Yellow",
          'correcta': false,
        },
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
