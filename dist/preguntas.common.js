module.exports =
/******/ (function(modules) { // webpackBootstrap
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

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "3846":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__("9e1e") && /./g.flags != 'g') __webpack_require__("86cc").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("0bfb")
});


/***/ }),

/***/ "3f7c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreguntaRespuestaOpcion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("81b3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreguntaRespuestaOpcion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreguntaRespuestaOpcion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreguntaRespuestaOpcion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6b54":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("3846");
var anObject = __webpack_require__("cb7c");
var $flags = __webpack_require__("0bfb");
var DESCRIPTORS = __webpack_require__("9e1e");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__("2aba")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__("79e5")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "81b3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


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

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2258c207-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/preguntas/Pregunta.vue?vue&type=template&id=1c0b101a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pregunta",attrs:{"data-total-opciones":_vm.opciones.length}},[_c('div',{staticClass:"pregunta-titulo"},[_vm._t("titulo",[_vm._v("\n          "+_vm._s(_vm.pregunta)+"\n      ")])],2),_vm._l((_vm.opciones),function(item,index){return _c('pregunta-respuesta-opcion',{attrs:{"padre_id":_vm.id,"indice":index,"texto":item.texto,"fondo":false,"correcto":item.correcta}})}),(_vm.mostrar_boton_responder)?_c('div',{staticClass:"cont-boton-responder",on:{"click":_vm.responder_pregunta}},[_vm._t("boton_responder",[_c('button',{attrs:{"type":"button"}},[_vm._v("\n                  Contestar\n              ")])])],2):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/preguntas/Pregunta.vue?vue&type=template&id=1c0b101a&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("6b54");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2258c207-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/preguntas/PreguntaRespuestaOpcion.vue?vue&type=template&id=94337490&
var PreguntaRespuestaOpcionvue_type_template_id_94337490_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pregunta-respuesta-opcion"},[(_vm.fondo == true)?_c('div',{staticClass:"pregunta-respuesta-opcion-fondo"}):_vm._e(),_c('label',{staticClass:"pregunta-respuesta-opcion-texto",class:{
            'opcion-seleccionada': _vm.seleccionado,
            'opcion-correcta': _vm.padre_pregunta_fue_respondida && _vm.correcto,
            'opcion-incorrecta': _vm.padre_pregunta_fue_respondida && !_vm.correcto && _vm.seleccionado,
            },on:{"click":_vm.opcion_seleccionada}},[_c('input',{attrs:{"type":"radio","name":("opcion_respuesta[" + _vm.padre_id + "][]"),"disabled":_vm.padre_pregunta_fue_respondida}}),_vm._t("default",[_vm._v("\n            "+_vm._s(_vm.texto)+"\n        ")])],2),(_vm.usar_flecha_seleccion && _vm.seleccionado)?_vm._t("flecha-seleccion"):_vm._e()],2)}
var PreguntaRespuestaOpcionvue_type_template_id_94337490_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/preguntas/PreguntaRespuestaOpcion.vue?vue&type=template&id=94337490&

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
    /**
     * Evento para limpiar el estado de la pregunta, conserva 
     * el texto de la pregunta y sus opciones de respuesta.
     * Acepta un array con el id de esta pregunta o el id de esta pregunta
     * 
     */

    this.$root.$on('pregunta_reiniciar', function (id) {
      var reiniciar = false;

      if (Object.prototype.toString.call(id) == "[object Array]") {
        reiniciar = id.indexOf(_this.padre_id) > -1;
      } else {
        reiniciar = id == _this.padre_id;
      }

      if (reiniciar) {
        _this.padre_pregunta_fue_respondida = false;
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
  PreguntaRespuestaOpcionvue_type_template_id_94337490_render,
  PreguntaRespuestaOpcionvue_type_template_id_94337490_staticRenderFns,
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
     * `opciones[x].texto` {string} El texto de la opción de respuesta.
     * `opciones[x].correcta` {boolean} Si la opción de respuesta es correcta o no.
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
    /**
     * Evento para limpiar el estado de la pregunta, conserva 
     * el texto de la pregunta y sus opciones de respuesta.
     * Acepta un array con el id de esta pregunta o el id de esta pregunta
     * 
     */

    this.$root.$on('pregunta_reiniciar', function (id) {
      var reiniciar = false;

      if (Object.prototype.toString.call(id) == "[object Array]") {
        reiniciar = id.indexOf(_this.id) > -1;
      } else {
        reiniciar = id == _this.id;
      }

      if (reiniciar) {
        _this.pregunta_fue_respondida = false;
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
  "1c0b101a",
  null
  
)

/* harmony default export */ var Pregunta = (Pregunta_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (Pregunta);



/***/ })

/******/ })["default"];
//# sourceMappingURL=preguntas.common.js.map