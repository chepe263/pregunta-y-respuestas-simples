<template>
    <!--
        

        -->
    <div class="pregunta-respuesta-opcion">
        <div class="pregunta-respuesta-opcion-fondo" v-if="fondo == true"></div>
        <label class="pregunta-respuesta-opcion-texto" 
            :class="{
                'opcion-seleccionada': seleccionado,
                'opcion-correcta': padre_pregunta_fue_respondida && correcto,
                'opcion-incorrecta': padre_pregunta_fue_respondida && !correcto && seleccionado,
                }"
            @click="opcion_seleccionada"
            >
            <input type="radio" :name="`opcion_respuesta[${padre_id}][]`"  :disabled="padre_pregunta_fue_respondida" />
            <slot>
                {{ texto }}
            </slot>
        </label>
        <slot name="flecha-seleccion" v-if="usar_flecha_seleccion && seleccionado">
            
        </slot>
    </div>
</template>
<style>

    /*.opcion-seleccionada{
        font-weight: bold;
    }
    .opcion-correcta{background-color:green; color: white;}
    .opcion-incorrecta{background-color:red;}*/
</style>
<script>
/** Componente que representa una opcion de respuesta */
export default {
    name: 'PreguntaRespuestaOpcion',
    props: {
        /**
         * Identificador de la opción de respuesta entre sus hermanos. Se recomienda usar un entero.
         */
        indice: {
            //type: String,
            required: true
        },
        /** 
         * El Texto de la opción de respuesta.
         */
        texto: {
            type: String,
            required: true
        },
        /**
         * Mostrar o no un div que sirve de fondo para la opcion de respuesta. Se recomienda que el div sea 
         * `position: absolute;
         * width: 100%;
         * height: 100%;`
         */
        fondo: {
            type: Boolean,
            default: true
        },
        /** @type {boolean} Si la opcion de respuesta es correcta o no.*/
        correcto: {
            type:Boolean,
            default: false
        },
        /**
         * Un identificador de la pregunta a la que corresponde esta opcion de respuesta.
         * Se necesita para que cuando cambien las opciones de respuesta de una pregunta, 
         * no afecten a otra pregunta 
         */
        padre_id: {
            type: String,
            required: true
        },
        /** Mostrar o no un div para que sirva de ayuda visual de la opcion seleccionada.
         * El div esta abajo del texto de la opcion. Se piensa usar un triangulo.
         */

        usar_flecha_seleccion:{
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            /** Si la opcion fue seleccionada, se llena este {boolean} 
             * @private
            */
           seleccionado: false,
            /**
             * Si la pregunta a la que pertenece esta opcion de respuesta fue respondida,
             * se usa para deshabilitar las opciones de respuesta de la pregunta.
             * @private
             */
            padre_pregunta_fue_respondida: false,
        }
    },
    methods: {
        /** Emite el evento `opcion_seleccionada` si la opcion no fue respondia ya.
         * @param padre_id el id de la pregunta que corresponde esta opcion de respuesta
         * @param indice el id o index de esta opcion de respuesta
         */
        opcion_seleccionada: function(){
            if(this.padre_pregunta_fue_respondida){
                return;
            }
            this.$root.$emit('opcion_seleccionada', this.padre_id, this.indice);
            //this.$emit('opcion_seleccionada', this.indice);
        },

    },
    mounted() {
        //this.$on('opcion_seleccionada', indice => {
        this.$root.$on('opcion_seleccionada', (id_padre, indice) => {
            if(this.padre_id == id_padre){
                this.seleccionado = indice == this.indice;
            }   
        });
        this.$root.$on('pregunta_respondida', (id_padre) => {
            if(this.padre_id == id_padre){
                this.padre_pregunta_fue_respondida = true;
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
                reiniciar = id.indexOf(this.padre_id) > -1;
            } else {
                reiniciar = id == this.padre_id;
            }
            if(reiniciar){
                this.padre_pregunta_fue_respondida = false;
            }
        });
    }
}


</script>