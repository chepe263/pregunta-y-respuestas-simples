# pregunta 

Componente que representa una pregunta
### Clases CSS disponbles

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
-  `.opcion-correcta` Clase para la opcion correcta
-  `.opcion-incorrecta` Clase para la opcion incorrecta 

## slots 

- `titulo` Usar el slot #titulo para mostrar el texto de la pregunta.. 

- `boton_responder` Usar el slot #boton_responder para mostrar un boton que llama a la funcion de responder la pregunta. 

## props 

- `pregunta` ***string*** (*optional*) 

  El texto de la pregunta. Se reemplaza por el slot #titulo si existe. 

- `opciones` ***Array*** (*required*) 

  Las opciones de respuesta. Necesitan un formato especial. 

- `id` ***String*** (*optional*) 

  El nombre o id de la pregunta. Ayuda a identificar la opcion seleccionada con su pregunta padre. Obligatorio. 

- `finalizar_pregunta` ***Function*** (*optional*) 

  Una funcion que se llama cuando se hizo clic en el botón de responder.
  La idea es usarla para llamar a otra pregunta o esconder la actual. 

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

## methods 

- `responder_pregunta()` 

  Califica que se selecciono una opción de respuesta y es la correcta
  Emite el evento `pregunta_respondida`.
  Si el prop `finalizar_pregunta` es una funcion, la llama. 

