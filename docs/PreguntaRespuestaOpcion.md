# pregunta-respuesta-opcion 

Componente que representa una opcion de respuesta 

## slots 

- `default` 

- `flecha-seleccion` 

## props 

- `indice` ***[object Object]*** (*required*) 

  Identificador de la opción de respuesta entre sus hermanos. Se recomienda usar un entero. 

- `texto` ***String*** (*required*) 

  El Texto de la opción de respuesta. 

- `fondo` ***Boolean*** (*optional*) `default: true` 

  Mostrar o no un div que sirve de fondo para la opcion de respuesta. Se recomienda que el div sea
  `position: absolute;
  width: 100%;
  height: 100%;` 

- `correcto` ***boolean Si la opcion de respuesta es correcta o no.*** (*optional*) `default: false` 

- `padre_id` ***String*** (*required*) 

  Un identificador de la pregunta a la que corresponde esta opcion de respuesta.
  Se necesita para que cuando cambien las opciones de respuesta de una pregunta,
  no afecten a otra pregunta 

- `usar_flecha_seleccion` ***Boolean*** (*optional*) `default: false` 

  Mostrar o no un div para que sirva de ayuda visual de la opcion seleccionada.
  El div esta abajo del texto de la opcion. Se piensa usar un triangulo. 

## events 

- `opcion_seleccionada` 

## methods 

- `opcion_seleccionada(padre_id, indice)` 

  Emite el evento `opcion_seleccionada` si la opcion no fue respondia ya. 

  **parameters:** 

     - `padre_id` **Any** - el id de la pregunta que corresponde esta opcion de respuesta 
     - `indice` **Any** - el id o index de esta opcion de respuesta 

