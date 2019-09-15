<template>
  <div class="pregunta" :data-total-opciones="opciones.length">
      <div class="pregunta-titulo">
        <!-- Usar el slot #titulo para mostrar el texto de la pregunta.. -->
        <slot name="titulo">
            {{ pregunta }}
        </slot>
      </div>
      <pregunta-respuesta-opcion v-for="item, index in opciones" 
        :padre_id="id"
        :indice="index" 
        :texto="item.texto" 
        :fondo="opciones_respuesta_tienen_fondo" 
        :correcto="item.correcta"         
        usar_flecha_seleccion="usar_flecha_seleccion"         
        >
			<template slot="flecha-seleccion">
				<!-- Slot para mostrar una flecha abajo de la opcion seleccionada -->
				<slot name="contenido-flecha">
				</slot>
			</template>
		</pregunta-respuesta-opcion>
        <div @click="responder_pregunta" v-if="mostrar_boton_responder" class="cont-boton-responder">
            <!-- Usar el slot #boton_responder para mostrar un boton que llama a la funcion de responder la pregunta. -->
            <slot name="boton_responder">
                <button type="button">
                    Contestar
                </button>
            </slot>
        </div>
  </div>
</template>

<script>
import PreguntaRespuestaOpcion from './PreguntaRespuestaOpcion.vue';
/**
 * 
 * Componente que representa una pregunta 
 *  ### Clases CSS disponbles
 * 
 *  #### pregunta
 *  -  `.pregunta` Clase para el contenedor de la pregunta. Tambien contiene a las opciones de respuesta.
 *  -  `.pregunta-titulo` Clase para el texto de la pregunta
 *  -  `.cont-boton-responder` Clase para el contenedor del boton de responder
 *  #### opcion de respuesta
 *  -  `.pregunta-respuesta-opcion` Clase para el contenedor de la la opcion
 *      -  `.pregunta-respuesta-opcion-fondo` Clase para el fondo de la opcion de respuesta. 
 *          Depende del prop `fondo`
 *      -   `.pregunta-respuesta-opcion-texto` Etiqueta `<label>` que contiene el texto de la opcion de respuesta.
 *  -  `.opcion-seleccionada` Clase para la opcion seleccionada
 *  -  `.opcion-seleccionada-flecha` Clase para la flecha abajo de la opcion seleccionada.
 *  -  `.opcion-correcta` Clase para la opcion correcta
 *  -  `.opcion-incorrecta` Clase para la opcion incorrecta
 */
export default {
  name: 'Pregunta',
  components: {PreguntaRespuestaOpcion,},
  props: {
    /** 
     * El texto de la pregunta. Se reemplaza por el slot #titulo si existe. 
     * @type {string}
     */
    pregunta: String,
    /**
     * Las opciones de respuesta. Necesitan un formato especial.
     * `opciones[x].texto` {string} El texto de la opción de respuesta.
     * `opciones[x].correcta` {boolean} Si la opción de respuesta es correcta o no.
     * @param opciones.texto {string} El texto de la opción de respuesta.
     * @param opciones.correcta {boolean} Si la opción de respuesta es correcta o no.
     */
    opciones: {
        type: Array,
        required: true
    },
    /** Mostrar el div para fondo de opciones de respuesta */
    opciones_respuesta_tienen_fondo: false,

    /** 
     * El nombre o id de la pregunta. Ayuda a identificar la opcion seleccionada con su pregunta padre. Obligatorio.
     */
    id: String,
    /** 
     * Una funcion que se llama cuando se hizo clic en el botón de responder.
     * La idea es usarla para llamar a otra pregunta o esconder la actual.
     */
    finalizar_pregunta: Function,
	/**
	 * Mostrar `.opcion-seleccionada-flecha` de las opciones de respuesta.
	 */
    usar_flecha_seleccion: false,
  },
  data() {
      return {
          /**
           * Identifica que opción fue seleccionada para luego verificar si fue la correcta
           */
          opcion_seleccionada: null,
          /**
           * Se hace `true` despues de responder la pregunta.
           */
          pregunta_fue_respondida: false,
      }
  },
  computed:{
      /** 
       * Muestra u oculta el botón para responder y evitar que se haga clic más de una vez.
       */
      mostrar_boton_responder: function(){
          if(this.pregunta_fue_respondida){
              return false;
          }
          if(this.opcion_seleccionada !== null){
              return true;
          } else if(this.opcion_seleccionada !== null && this.pregunta_fue_respondida == false){
              return true;
          } else if(this.opcion_seleccionada === null && this.pregunta_fue_respondida == true){
                return false;
          }
          return false;
      }
  },
  methods:{
    /**
     * Califica que se selecciono una opción de respuesta y es la correcta
     * Emite el evento `pregunta_respondida`.
     * Si el prop `finalizar_pregunta` es una funcion, la llama.
     */
    responder_pregunta: function(){
        if(this.pregunta_fue_respondida){
            return;
        }
        var resultado = false;
        if(this.opcion_seleccionada !== null){
            resultado = this.opciones[this.opcion_seleccionada].correcta == true;
        }
        this.opcion_seleccionada == null;
        this.pregunta_fue_respondida = true;
        this.$emit("resultado_pregunta", resultado, this.id);
        this.$root.$emit("pregunta_respondida", this.id);
        if(this.finalizar_pregunta !== undefined){
            this.finalizar_pregunta(this.id, resultado)
        }
    }
  },
    mounted() {
        //this.$on('opcion_seleccionada', indice => {
        this.$root.$on('opcion_seleccionada', (id_padre_opcion, indice) => {
            if(this.id == id_padre_opcion){
                this.opcion_seleccionada = indice;
            }   
        });
        /**
         * Evento para limpiar el estado de la pregunta, conserva 
         * el texto de la pregunta y sus opciones de respuesta.
         * Acepta un array con el id de esta pregunta o el id de esta pregunta
         * 
         */
        this.$root.$on('pregunta_reiniciar', (id) => {
            let reiniciar = false;
            if(Object.prototype.toString.call(id) == "[object Array]"){
                reiniciar = id.indexOf(this.id) > -1;
            } else {
                reiniciar = id == this.id;
            }
            if(reiniciar){
                this.pregunta_fue_respondida = false;
            }
        });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
