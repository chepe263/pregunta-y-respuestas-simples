# pregunta 

Componente que representa una pregunta 

- **vuese** - ### Clases CSS disponbles
  
  #### pregunta
  -  `.pregunta` Clase para el contenedor de la pregunta. Tambien contiene a las opciones de respuesta.
  -  `.pregunta-titulo` Clase para el texto de la pregunta
  -  `.cont-boton-responder` Clase para el contenedor del boton de responder
  #### opcion de respuesta
  -  `.pregunta-respuesta-opcion` Clase para el contenedor de la la opcion
  -  `.pregunta-respuesta-opcion-fondo` Clase para el fondo de la opcion de respuesta.
  Depende del prop `fondo`
  -   `.pregunta-respuesta-opcion-texto` Etiqueta `<label>` que contiene el texto de la opcion de respuesta.
  -  `.opcion-seleccionada` Clase para la opcion seleccionada
  -  `.opcion-seleccionada-flecha` Clase para la flecha abajo de la opcion seleccionada.
  -  `.opcion-correcta` Clase para la opcion correcta
  -  `.opcion-incorrecta` Clase para la opcion incorrecta 

## slots 

- `titulo` Usar el slot #titulo para mostrar el texto de la pregunta.. 

- `contenido-flecha` Slot para mostrar una flecha abajo de la opcion seleccionada 

- `boton_responder` Usar el slot #boton_responder para mostrar un boton que llama a la funcion de responder la pregunta. 

## props 

- `pregunta` ***string*** (*optional*) 

  El texto de la pregunta. Se reemplaza por el slot #titulo si existe. 

- `opciones` ***Array*** (*required*) 

  Las opciones de respuesta. Necesitan un formato especial.
  `opciones[x].texto` {string} El texto de la opción de respuesta.
  `opciones[x].correcta` {boolean} Si la opción de respuesta es correcta o no. 

- `opciones_respuesta_tienen_fondo` ***Boolean*** (*optional*) `default: false` 

  Mostrar el div para fondo de opciones de respuesta 

- `id` ***String*** (*required*) `default: 'null_question'` 

  El nombre o id de la pregunta. Ayuda a identificar la opcion seleccionada con su pregunta padre. Obligatorio. 

- `finalizar_pregunta` ***Function*** (*optional*) 

  Una funcion que se llama cuando se hizo clic en el botón de responder.
  La idea es usarla para llamar a otra pregunta o esconder la actual. 

- `usar_flecha_seleccion` ***Boolean*** (*optional*) `default: false` 

  Mostrar `.opcion-seleccionada-flecha` de las opciones de respuesta. 

## data 

- `opcion_seleccionada` 

  Identifica que opción fue seleccionada para luego verificar si fue la correcta 

**initial value:** `null` 

- `pregunta_fue_respondida` 

  Se hace `true` despues de responder la pregunta. 

**initial value:** `false` 

## computed properties 

- `mostrar_boton_responder` 

  Muestra u oculta el botón para responder y evitar que se haga clic más de una vez. 

   **dependencies:** `pregunta_fue_respondida`, `opcion_seleccionada`, `opcion_seleccionada`, `pregunta_fue_respondida`, `opcion_seleccionada`, `pregunta_fue_respondida` 


## events 

- `resultado_pregunta` 

- `pregunta_respondida` 

- `pregunta_reiniciar` 

  Evento para limpiar el estado de la pregunta, conserva
  el texto de la pregunta y sus opciones de respuesta.
  Acepta un array con el id de esta pregunta o el id de esta pregunta
  Se debe emitir este evento y el componente Pregunta lo atrapa.
  `$vm.$root.$emit("pregunta_reiniciar", id_pregunta);` 

- `opcion_seleccionada` 

## methods 

- `responder_pregunta()` 

  Califica que opción de respuesta se selecciono y si es la correcta
  Emite el evento `pregunta_respondida`.
  Si el prop `finalizar_pregunta` es una función, la llama. 

