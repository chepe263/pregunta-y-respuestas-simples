
# vue-simple-question-answers

> Componente Vue para mostrar una pregunta y sus opciones de respuesta.

## Instalar

Agregar `@chepe263/vue-pregunta-y-respuestas-simples` como dependencia al projecto.
```
npm install @chepe263/vue-pregunta-y-respuestas-simples --save
```

Incluir el componente en el codigo de tu proyecto.
```
const Pregunta = require('@chepe263/vue-pregunta-y-respuestas-simples');

const app = new Vue({
	...
	components: {
		Pregunta
	},
	...
	data: {
	...
		pregunta_actual: {
			id_control_pregunta: 'id_control_pregunta_n',
			texto: "¿Texto de pregunta?",
			opciones: [ //Formato requerido para las opciones de respuesta
				{
					"texto": "Opcion 1",
					"correcta": false
				},
				{
					"texto": "Opcion 2",
					"correcta": true
				},
				{
					"texto": "Opcion 3",
					"correcta": false
				},
			]
		},
	...
	}
})
```
Agregar en la vista
```
			<pregunta 
				:opciones="pregunta_actual.opciones" 
				:id='pregunta_actual.id_control_pregunta' 
				:pregunta="pregunta_actual.texto"
				@resultado_pregunta="pregunta_respondida" 
				:opciones_respuesta_tienen_fondo="false"
				:usar_flecha_seleccion="false"
				:mostrar_radio_estado="true"
				>
				<!--Slot opcional para mostrar el titulo de la pregunta -->
				<template slot='titulo>
					{{ pregunta_actual.texto }}
				</template>
				<!--Slot opcional para mostrar el titulo de la pregunta -->

				<template slot="flecha-seleccion">
					Despues de texto de opción de respuesta
				</template>
				<!--slots opcionales para mostrar el estado de la seleccion de opción de respuesta -->
				<template slot="estado-radio-apagado">
					Apagado, sin seleccionar
				</template>
				<template slot="estado-radio-encendido">
					Encendido, seleccionado
				</template>
				<template slot="estado-radio-correcto">
					Correcto
				</template>
				<template slot="estado-radio-incorrecto">
					Incorrecto
				</template>
				<!--slots opcionales para mostrar el estado de la seleccion de opción de respuesta -->
				<!-- slot opcional para mostrar un boton de responder pregunta -->
				<template slot="boton_responder">
					<button type="button">
						Responder pregunta
					</button>
				</template>
				<!-- slot opcional para mostrar un boton de responder pregunta -->
			</pregunta>
```

## Desarrollo
### Instalar dependencias

```
npm install
```

#### Compiles and hot-reloads for development

```
npm run serve
```

#### Compilar como librería para producción.

```
npm run build-lib
```

#### Realizar pruebas
```
npm run test
```

#### Revisión de estilo de codigo y arreglos

```
npm run lint
```


### API

Ver en carpeta `docs`