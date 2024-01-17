/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/js/modules/menu.js\");\n/* harmony import */ var _modules_contato_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/contato.js */ \"./src/js/modules/contato.js\");\n/* harmony import */ var _modules_paginacao_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/paginacao.js */ \"./src/js/modules/paginacao.js\");\n/* harmony import */ var _modules_crud_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/crud.js */ \"./src/js/modules/crud.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./src/js/modules/modal.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://lista-de-contatos/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/contato.js":
/*!***********************************!*\
  !*** ./src/js/modules/contato.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\nvar botoesOpcoesContato = document.querySelectorAll('.opcoes-contato');\nvar exibeOpcoesContato = function exibeOpcoesContato(_ref) {\n  var currentTarget = _ref.currentTarget;\n  var iconeOpcoes = currentTarget;\n  var contato = iconeOpcoes.parentNode;\n  var opcoes = document.querySelector('#botoes-opcoes');\n  contato.appendChild(opcoes);\n  opcoes.classList.toggle('ativo');\n};\nbotoesOpcoesContato.forEach(function (botao) {\n  botao.addEventListener('click', exibeOpcoesContato);\n});\n\n//# sourceURL=webpack://lista-de-contatos/./src/js/modules/contato.js?");

/***/ }),

/***/ "./src/js/modules/crud.js":
/*!********************************!*\
  !*** ./src/js/modules/crud.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\n//# sourceURL=webpack://lista-de-contatos/./src/js/modules/crud.js?");

/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\nvar tituloListaGrupos = document.querySelector('#titulo-grupos');\nvar controlaExibicaoGrupos = function controlaExibicaoGrupos() {\n  var grupos = document.querySelector('#lista-grupos');\n  var setaGrupos = document.querySelector('#seta-grupos');\n  grupos.classList.toggle('ativo');\n  setaGrupos.classList.toggle('ativo');\n};\ntituloListaGrupos.addEventListener('click', controlaExibicaoGrupos);\n\n//# sourceURL=webpack://lista-de-contatos/./src/js/modules/menu.js?");

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _paginacao_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paginacao.js */ \"./src/js/modules/paginacao.js\");\n\n\n\nvar elementos = {\n  modais: _paginacao_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('.modais'),\n  formulario: _paginacao_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('form'),\n  botaoAdicionarContato: _paginacao_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('.adicionar-contato'),\n  botaoCancelar: _paginacao_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('.cancelar'),\n  botaoAdicionar: _paginacao_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('.adicionar')\n};\n\n//# sourceURL=webpack://lista-de-contatos/./src/js/modules/modal.js?");

/***/ }),

/***/ "./src/js/modules/paginacao.js":
/*!*************************************!*\
  !*** ./src/js/modules/paginacao.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar dados = Array.from({\n  length: 100\n}).map(function (_, index) {\n  return \"<li class=\\\"contato\\\">\\n          <input type=\\\"checkbox\\\" name=\\\"checkbox\\\" id=\\\"checkbox\\\">\\n          <div class=\\\"info-basicas\\\">\\n            <img src=\\\"src/images/foto-perfil.jpg\\\" alt=\\\"\\\">\\n            <p>Higor Costa \".concat(index + 1, \"</p>\\n          </div>\\n          <p>higorcosta972@gmail.com</p>\\n          <p>+55 (87) 98109-3238</p>\\n          <p>Rua Atalibal Victor, N\\xBA 21</p>\\n          <p>Fam\\xEDlia</p>\\n          <svg class=\\\"opcoes-contato\\\" width=\\\"20\\\" height=\\\"7\\\" viewBox=\\\"0 0 29 7\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n            <ellipse cx=\\\"3.625\\\" cy=\\\"3.49398\\\" rx=\\\"3.625\\\" ry=\\\"3.49398\\\" fill=\\\"#1A1A1A\\\"/>\\n            <ellipse cx=\\\"14.5\\\" cy=\\\"3.49398\\\" rx=\\\"3.625\\\" ry=\\\"3.49398\\\" fill=\\\"#1A1A1A\\\"/>\\n            <ellipse cx=\\\"25.375\\\" cy=\\\"3.49398\\\" rx=\\\"3.625\\\" ry=\\\"3.49398\\\" fill=\\\"#1A1A1A\\\"/>\\n          </svg>\\n        </li>\");\n});\nvar porPagina = 20;\nvar estado = {\n  pagina: 1,\n  porPagina: porPagina,\n  totalPaginas: Math.ceil(dados.length / porPagina),\n  maxBotoesVisiveis: 5\n};\nvar html = {\n  get: function get(elemento) {\n    return document.querySelector(elemento);\n  }\n};\nvar controles = {\n  paginaSeguinte: function paginaSeguinte() {\n    estado.pagina++;\n    var ultimaPagina = estado.pagina > estado.totalPaginas;\n    if (ultimaPagina) {\n      estado.pagina--;\n    }\n  },\n  paginaAnterior: function paginaAnterior() {\n    estado.pagina--;\n    if (estado.pagina < 1) {\n      estado.pagina++;\n    }\n  },\n  irParaPagina: function irParaPagina(pagina) {\n    if (pagina < 1) {\n      pagina = 1;\n    }\n    estado.pagina = +pagina;\n    if (pagina > estado.totalPaginas) {\n      estado.pagina = estado.totalPaginas;\n    }\n  },\n  criaEventos: function criaEventos() {\n    html.get('.primeiro').addEventListener('click', function () {\n      controles.irParaPagina(1);\n      atualiza();\n    });\n    html.get('.ultimo').addEventListener('click', function () {\n      controles.irParaPagina(estado.totalPaginas);\n      atualiza();\n    });\n    html.get('.anterior').addEventListener('click', function () {\n      controles.paginaAnterior();\n      atualiza();\n    });\n    html.get('.proximo').addEventListener('click', function () {\n      controles.paginaSeguinte();\n      atualiza();\n    });\n  }\n};\nvar lista = {\n  criaItem: function criaItem(item) {\n    var div = document.createElement('div');\n    div.classList.add('item');\n    div.innerHTML = item;\n    html.get('.lista').appendChild(div);\n  },\n  atualiza: function atualiza() {\n    html.get('.lista').innerHTML = '';\n    var pagina = estado.pagina - 1;\n    var inicio = pagina * porPagina;\n    var fim = inicio + porPagina;\n    var itensPaginados = dados.slice(inicio, fim);\n    itensPaginados.forEach(lista.criaItem);\n  }\n};\nvar botoes = {\n  elemento: html.get('.paginas'),\n  criarBotoes: function criarBotoes(numero) {\n    var botao = document.createElement('div');\n    botao.innerHTML = numero;\n    if (estado.pagina == numero) {\n      botao.classList.add('ativo');\n    }\n    botao.addEventListener('click', function (event) {\n      var pagina = event.target.innerHTML;\n      controles.irParaPagina(pagina);\n      atualiza();\n    });\n    botoes.elemento.appendChild(botao);\n  },\n  atualiza: function atualiza() {\n    botoes.elemento.innerHTML = '';\n    var _botoes$calculaMaximo = botoes.calculaMaximoVisiveis(),\n      maxEsquerda = _botoes$calculaMaximo.maxEsquerda,\n      maxDireita = _botoes$calculaMaximo.maxDireita;\n    for (var pagina = maxEsquerda; pagina <= maxDireita; pagina++) {\n      botoes.criarBotoes(pagina);\n    }\n  },\n  calculaMaximoVisiveis: function calculaMaximoVisiveis() {\n    var maxBotoesVisiveis = estado.maxBotoesVisiveis;\n    var maxEsquerda = estado.pagina - Math.floor(maxBotoesVisiveis / 2);\n    var maxDireita = estado.pagina + Math.floor(maxBotoesVisiveis / 2);\n    if (maxEsquerda < 1) {\n      maxEsquerda = 1;\n      maxDireita = maxBotoesVisiveis;\n    }\n    if (maxDireita > estado.totalPaginas) {\n      maxEsquerda = estado.totalPaginas - (maxBotoesVisiveis - 1);\n      maxDireita = estado.totalPaginas;\n      if (maxEsquerda < 1) {\n        maxEsquerda = 1;\n      }\n    }\n    return {\n      maxEsquerda: maxEsquerda,\n      maxDireita: maxDireita\n    };\n  }\n};\nfunction scrollPosicaoInicial() {\n  html.get('.lista').scrollTop = 0;\n}\nfunction atualiza() {\n  lista.atualiza();\n  botoes.atualiza();\n  scrollPosicaoInicial();\n}\nfunction iniciaFuncoes() {\n  atualiza();\n  controles.criaEventos();\n}\niniciaFuncoes();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (html);\n\n//# sourceURL=webpack://lista-de-contatos/./src/js/modules/paginacao.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;