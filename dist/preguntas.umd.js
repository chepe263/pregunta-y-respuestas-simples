(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["preguntas"] = factory();
	else
		root["preguntas"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "3f7c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreguntaRespuestaOpcion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("81b3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreguntaRespuestaOpcion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreguntaRespuestaOpcion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreguntaRespuestaOpcion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "81b3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2258c207-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/preguntas/Pregunta.vue?vue&type=template&id=7bd1343e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pregunta",attrs:{"data-total-opciones":_vm.opciones.length}},[_c('div',{staticClass:"pregunta-titulo"},[_vm._t("titulo",[_vm._v("\n          "+_vm._s(_vm.pregunta)+"\n      ")])],2),_vm._l((_vm.opciones),function(item,index){return _c('pregunta-respuesta-opcion',{attrs:{"padre_id":_vm.id,"indice":index,"texto":item.texto,"fondo":false,"correcto":item.correcta}})}),(_vm.mostrar_boton_responder)?_c('div',{staticClass:"cont-boton-responder",on:{"click":_vm.responder_pregunta}},[_vm._t("boton_responder",[_c('button',{attrs:{"type":"button"}},[_vm._v("\n                  Contestar\n              ")])])],2):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/preguntas/Pregunta.vue?vue&type=template&id=7bd1343e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2258c207-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/preguntas/PreguntaRespuestaOpcion.vue?vue&type=template&id=2fa123c8&
var PreguntaRespuestaOpcionvue_type_template_id_2fa123c8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pregunta-respuesta-opcion"},[(_vm.fondo == true)?_c('div',{staticClass:"pregunta-respuesta-opcion-fondo"}):_vm._e(),_c('label',{staticClass:"pregunta-respuesta-opcion-texto",class:{
            'opcion-seleccionada': _vm.seleccionado,
            'opcion-correcta': _vm.padre_pregunta_fue_respondida && _vm.correcto,
            'opcion-incorrecta': _vm.padre_pregunta_fue_respondida && !_vm.correcto && _vm.seleccionado,
            },on:{"click":_vm.opcion_seleccionada}},[_vm._v("\n        "+_vm._s(_vm.indice)+"\n        "),_c('input',{attrs:{"type":"radio","name":("opcion_respuesta[" + _vm.padre_id + "][]"),"disabled":_vm.padre_pregunta_fue_respondida}}),_vm._t("default",[_vm._v("\n            "+_vm._s(_vm.texto)+"\n        ")])],2),(_vm.usar_flecha_seleccion && _vm.seleccionado)?_vm._t("flecha-seleccion"):_vm._e()],2)}
var PreguntaRespuestaOpcionvue_type_template_id_2fa123c8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/preguntas/PreguntaRespuestaOpcion.vue?vue&type=template&id=2fa123c8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/preguntas/PreguntaRespuestaOpcion.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/** Componente que representa una opcion de respuesta */
/* harmony default export */ var PreguntaRespuestaOpcionvue_type_script_lang_js_ = ({
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
      type: Boolean,
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
    usar_flecha_seleccion: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
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
      padre_pregunta_fue_respondida: false
    };
  },
  methods: {
    /** Emite el evento `opcion_seleccionada` si la opcion no fue respondia ya.
     * @param padre_id el id de la pregunta que corresponde esta opcion de respuesta
     * @param indice el id o index de esta opcion de respuesta
     */
    opcion_seleccionada: function opcion_seleccionada() {
      if (this.padre_pregunta_fue_respondida) {
        return;
      }

      this.$root.$emit('opcion_seleccionada', this.padre_id, this.indice); //this.$emit('opcion_seleccionada', this.indice);
    }
  },
  mounted: function mounted() {
    var _this = this;

    //this.$on('opcion_seleccionada', indice => {
    this.$root.$on('opcion_seleccionada', function (id_padre, indice) {
      if (_this.padre_id == id_padre) {
        _this.seleccionado = indice == _this.indice;
      }
    });
    this.$root.$on('pregunta_respondida', function (id_padre) {
      if (_this.padre_id == id_padre) {
        _this.padre_pregunta_fue_respondida = true;
      }
    });
  }
});
// CONCATENATED MODULE: ./src/components/preguntas/PreguntaRespuestaOpcion.vue?vue&type=script&lang=js&
 /* harmony default export */ var preguntas_PreguntaRespuestaOpcionvue_type_script_lang_js_ = (PreguntaRespuestaOpcionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/preguntas/PreguntaRespuestaOpcion.vue?vue&type=style&index=0&lang=css&
var PreguntaRespuestaOpcionvue_type_style_index_0_lang_css_ = __webpack_require__("3f7c");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/preguntas/PreguntaRespuestaOpcion.vue






/* normalize component */

var component = normalizeComponent(
  preguntas_PreguntaRespuestaOpcionvue_type_script_lang_js_,
  PreguntaRespuestaOpcionvue_type_template_id_2fa123c8_render,
  PreguntaRespuestaOpcionvue_type_template_id_2fa123c8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PreguntaRespuestaOpcion = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/preguntas/Pregunta.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
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
 *  -  `.opcion-correcta` Clase para la opcion correcta
 *  -  `.opcion-incorrecta` Clase para la opcion incorrecta
 */

/* harmony default export */ var Preguntavue_type_script_lang_js_ = ({
  name: 'Pregunta',
  components: {
    PreguntaRespuestaOpcion: PreguntaRespuestaOpcion
  },
  props: {
    /** 
     * El texto de la pregunta. Se reemplaza por el slot #titulo si existe. 
     * @type {string}
     */
    pregunta: String,

    /**
     * Las opciones de respuesta. Necesitan un formato especial.
     * @param opciones.texto {string} El texto de la opción de respuesta.
     * @param opciones.correcta {boolean} Si la opción de respuesta es correcta o no.
     */
    opciones: {
      type: Array,
      required: true
    },

    /** 
     * El nombre o id de la pregunta. Ayuda a identificar la opcion seleccionada con su pregunta padre. Obligatorio.
     */
    id: String,

    /** 
     * Una funcion que se llama cuando se hizo clic en el botón de responder.
     * La idea es usarla para llamar a otra pregunta o esconder la actual.
     */
    finalizar_pregunta: Function
  },
  data: function data() {
    return {
      /**
       * Identifica que opción fue seleccionada para luego verificar si fue la correcta
       */
      opcion_seleccionada: null,

      /**
       * Se hace `true` despues de responder la pregunta.
       */
      pregunta_fue_respondida: false
    };
  },
  computed: {
    /** 
     * Muestra u oculta el botón para responder y evitar que se haga clic más de una vez.
     */
    mostrar_boton_responder: function mostrar_boton_responder() {
      if (this.pregunta_fue_respondida) {
        return false;
      }

      if (this.opcion_seleccionada !== null) {
        return true;
      } else if (this.opcion_seleccionada !== null && this.pregunta_fue_respondida == false) {
        return true;
      } else if (this.opcion_seleccionada === null && this.pregunta_fue_respondida == true) {
        return false;
      }

      return false;
    }
  },
  methods: {
    /**
     * Califica que se selecciono una opción de respuesta y es la correcta
     * Emite el evento `pregunta_respondida`.
     * Si el prop `finalizar_pregunta` es una funcion, la llama.
     */
    responder_pregunta: function responder_pregunta() {
      if (this.pregunta_fue_respondida) {
        return;
      }

      var resultado = false;

      if (this.opcion_seleccionada !== null) {
        resultado = this.opciones[this.opcion_seleccionada].correcta == true;
      }

      this.opcion_seleccionada == null;
      this.pregunta_fue_respondida = true;
      this.$emit("resultado_pregunta", resultado, this.id);
      this.$root.$emit("pregunta_respondida", this.id);

      if (this.finalizar_pregunta !== undefined) {
        this.finalizar_pregunta(this.id, resultado);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    //this.$on('opcion_seleccionada', indice => {
    this.$root.$on('opcion_seleccionada', function (id_padre_opcion, indice) {
      if (_this.id == id_padre_opcion) {
        _this.opcion_seleccionada = indice;
      }
    });
  }
});
// CONCATENATED MODULE: ./src/components/preguntas/Pregunta.vue?vue&type=script&lang=js&
 /* harmony default export */ var preguntas_Preguntavue_type_script_lang_js_ = (Preguntavue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/preguntas/Pregunta.vue





/* normalize component */

var Pregunta_component = normalizeComponent(
  preguntas_Preguntavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "7bd1343e",
  null
  
)

/* harmony default export */ var Pregunta = (Pregunta_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (Pregunta);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=preguntas.umd.js.map