# PreguntaRespuestaOpcion

Componente que representa una opcion de respuesta

## Props

<!-- @vuese:PreguntaRespuestaOpcion:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|indice|Identificador de la opción de respuesta entre sus hermanos. Se recomienda usar un entero.|—|`true`|-|
|texto|El Texto de la opción de respuesta.|`String`|`true`|-|
|fondo|Mostrar o no un div que sirve de fondo para la opcion de respuesta. Se recomienda que el div sea `position: absolute; width: 100%; height: 100%;`|`Boolean`|`false`|true|
|correcto|-|`Boolean`|`false`|false|
|padre_id|Un identificador de la pregunta a la que corresponde esta opcion de respuesta. Se necesita para que cuando cambien las opciones de respuesta de una pregunta, no afecten a otra pregunta|`String`|`true`|-|
|usar_flecha_seleccion|Mostrar o no un div para que sirva de ayuda visual de la opcion seleccionada. El div esta abajo del texto de la opcion. Se piensa usar un triangulo.|`Boolean`|`false`|false|

<!-- @vuese:PreguntaRespuestaOpcion:props:end -->


## Events

<!-- @vuese:PreguntaRespuestaOpcion:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|opcion_seleccionada|-|-|

<!-- @vuese:PreguntaRespuestaOpcion:events:end -->


## Slots

<!-- @vuese:PreguntaRespuestaOpcion:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|default|-|-|
|flecha-seleccion|-|-|

<!-- @vuese:PreguntaRespuestaOpcion:slots:end -->


