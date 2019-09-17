# Pregunta

Componente que representa una pregunta

## Props

<!-- @vuese:Pregunta:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|pregunta|El texto de la pregunta. Se reemplaza por el slot #titulo si existe.|`String`|`false`|-|
|opciones|Las opciones de respuesta. Necesitan un formato especial. `opciones[x].texto` {string} El texto de la opción de respuesta. `opciones[x].correcta` {boolean} Si la opción de respuesta es correcta o no.|`Array`|`true`|-|
|opciones_respuesta_tienen_fondo|Mostrar el div para fondo de opciones de respuesta|`Boolean`|`false`|false|
|id|El nombre o id de la pregunta. Ayuda a identificar la opcion seleccionada con su pregunta padre. Obligatorio.|`String`|`true`|"null_question"|
|finalizar_pregunta|Una funcion que se llama cuando se hizo clic en el botón de responder. La idea es usarla para llamar a otra pregunta o esconder la actual.|`Function`|`false`|-|
|usar_flecha_seleccion|Mostrar `.opcion-seleccionada-flecha` de las opciones de respuesta.|`Boolean`|`false`|false|

<!-- @vuese:Pregunta:props:end -->


## Events

<!-- @vuese:Pregunta:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|resultado_pregunta|-|-|
|pregunta_respondida|-|-|
|pregunta_reiniciar|Evento para limpiar el estado de la pregunta, conserva el texto de la pregunta y sus opciones de respuesta. Acepta un array con el id de esta pregunta o el id de esta pregunta Se debe emitir este evento y el componente Pregunta lo atrapa. `$vm.$root.$emit("pregunta_reiniciar", id_pregunta);`|-|
|opcion_seleccionada|-|-|

<!-- @vuese:Pregunta:events:end -->


## Slots

<!-- @vuese:Pregunta:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|titulo|Usar el slot #titulo para mostrar el texto de la pregunta..|-|
|contenido-flecha|Slot para mostrar una flecha abajo de la opcion seleccionada|-|
|boton_responder|Usar el slot #boton_responder para mostrar un boton que llama a la funcion de responder la pregunta.|-|

<!-- @vuese:Pregunta:slots:end -->


