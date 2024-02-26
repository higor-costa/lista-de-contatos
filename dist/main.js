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

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\nvar R = typeof Reflect === 'object' ? Reflect : null\nvar ReflectApply = R && typeof R.apply === 'function'\n  ? R.apply\n  : function ReflectApply(target, receiver, args) {\n    return Function.prototype.apply.call(target, receiver, args);\n  }\n\nvar ReflectOwnKeys\nif (R && typeof R.ownKeys === 'function') {\n  ReflectOwnKeys = R.ownKeys\n} else if (Object.getOwnPropertySymbols) {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target)\n      .concat(Object.getOwnPropertySymbols(target));\n  };\n} else {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target);\n  };\n}\n\nfunction ProcessEmitWarning(warning) {\n  if (console && console.warn) console.warn(warning);\n}\n\nvar NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {\n  return value !== value;\n}\n\nfunction EventEmitter() {\n  EventEmitter.init.call(this);\n}\nmodule.exports = EventEmitter;\nmodule.exports.once = once;\n\n// Backwards-compat with node 0.10.x\nEventEmitter.EventEmitter = EventEmitter;\n\nEventEmitter.prototype._events = undefined;\nEventEmitter.prototype._eventsCount = 0;\nEventEmitter.prototype._maxListeners = undefined;\n\n// By default EventEmitters will print a warning if more than 10 listeners are\n// added to it. This is a useful default which helps finding memory leaks.\nvar defaultMaxListeners = 10;\n\nfunction checkListener(listener) {\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n  }\n}\n\nObject.defineProperty(EventEmitter, 'defaultMaxListeners', {\n  enumerable: true,\n  get: function() {\n    return defaultMaxListeners;\n  },\n  set: function(arg) {\n    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {\n      throw new RangeError('The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received ' + arg + '.');\n    }\n    defaultMaxListeners = arg;\n  }\n});\n\nEventEmitter.init = function() {\n\n  if (this._events === undefined ||\n      this._events === Object.getPrototypeOf(this)._events) {\n    this._events = Object.create(null);\n    this._eventsCount = 0;\n  }\n\n  this._maxListeners = this._maxListeners || undefined;\n};\n\n// Obviously not all Emitters should be limited to 10. This function allows\n// that to be increased. Set to zero for unlimited.\nEventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {\n  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {\n    throw new RangeError('The value of \"n\" is out of range. It must be a non-negative number. Received ' + n + '.');\n  }\n  this._maxListeners = n;\n  return this;\n};\n\nfunction _getMaxListeners(that) {\n  if (that._maxListeners === undefined)\n    return EventEmitter.defaultMaxListeners;\n  return that._maxListeners;\n}\n\nEventEmitter.prototype.getMaxListeners = function getMaxListeners() {\n  return _getMaxListeners(this);\n};\n\nEventEmitter.prototype.emit = function emit(type) {\n  var args = [];\n  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);\n  var doError = (type === 'error');\n\n  var events = this._events;\n  if (events !== undefined)\n    doError = (doError && events.error === undefined);\n  else if (!doError)\n    return false;\n\n  // If there is no 'error' event listener then throw.\n  if (doError) {\n    var er;\n    if (args.length > 0)\n      er = args[0];\n    if (er instanceof Error) {\n      // Note: The comments on the `throw` lines are intentional, they show\n      // up in Node's output if this results in an unhandled exception.\n      throw er; // Unhandled 'error' event\n    }\n    // At least give some kind of context to the user\n    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));\n    err.context = er;\n    throw err; // Unhandled 'error' event\n  }\n\n  var handler = events[type];\n\n  if (handler === undefined)\n    return false;\n\n  if (typeof handler === 'function') {\n    ReflectApply(handler, this, args);\n  } else {\n    var len = handler.length;\n    var listeners = arrayClone(handler, len);\n    for (var i = 0; i < len; ++i)\n      ReflectApply(listeners[i], this, args);\n  }\n\n  return true;\n};\n\nfunction _addListener(target, type, listener, prepend) {\n  var m;\n  var events;\n  var existing;\n\n  checkListener(listener);\n\n  events = target._events;\n  if (events === undefined) {\n    events = target._events = Object.create(null);\n    target._eventsCount = 0;\n  } else {\n    // To avoid recursion in the case that type === \"newListener\"! Before\n    // adding it to the listeners, first emit \"newListener\".\n    if (events.newListener !== undefined) {\n      target.emit('newListener', type,\n                  listener.listener ? listener.listener : listener);\n\n      // Re-assign `events` because a newListener handler could have caused the\n      // this._events to be assigned to a new object\n      events = target._events;\n    }\n    existing = events[type];\n  }\n\n  if (existing === undefined) {\n    // Optimize the case of one listener. Don't need the extra array object.\n    existing = events[type] = listener;\n    ++target._eventsCount;\n  } else {\n    if (typeof existing === 'function') {\n      // Adding the second element, need to change to array.\n      existing = events[type] =\n        prepend ? [listener, existing] : [existing, listener];\n      // If we've already got an array, just append.\n    } else if (prepend) {\n      existing.unshift(listener);\n    } else {\n      existing.push(listener);\n    }\n\n    // Check for listener leak\n    m = _getMaxListeners(target);\n    if (m > 0 && existing.length > m && !existing.warned) {\n      existing.warned = true;\n      // No error code for this since it is a Warning\n      // eslint-disable-next-line no-restricted-syntax\n      var w = new Error('Possible EventEmitter memory leak detected. ' +\n                          existing.length + ' ' + String(type) + ' listeners ' +\n                          'added. Use emitter.setMaxListeners() to ' +\n                          'increase limit');\n      w.name = 'MaxListenersExceededWarning';\n      w.emitter = target;\n      w.type = type;\n      w.count = existing.length;\n      ProcessEmitWarning(w);\n    }\n  }\n\n  return target;\n}\n\nEventEmitter.prototype.addListener = function addListener(type, listener) {\n  return _addListener(this, type, listener, false);\n};\n\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\n\nEventEmitter.prototype.prependListener =\n    function prependListener(type, listener) {\n      return _addListener(this, type, listener, true);\n    };\n\nfunction onceWrapper() {\n  if (!this.fired) {\n    this.target.removeListener(this.type, this.wrapFn);\n    this.fired = true;\n    if (arguments.length === 0)\n      return this.listener.call(this.target);\n    return this.listener.apply(this.target, arguments);\n  }\n}\n\nfunction _onceWrap(target, type, listener) {\n  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };\n  var wrapped = onceWrapper.bind(state);\n  wrapped.listener = listener;\n  state.wrapFn = wrapped;\n  return wrapped;\n}\n\nEventEmitter.prototype.once = function once(type, listener) {\n  checkListener(listener);\n  this.on(type, _onceWrap(this, type, listener));\n  return this;\n};\n\nEventEmitter.prototype.prependOnceListener =\n    function prependOnceListener(type, listener) {\n      checkListener(listener);\n      this.prependListener(type, _onceWrap(this, type, listener));\n      return this;\n    };\n\n// Emits a 'removeListener' event if and only if the listener was removed.\nEventEmitter.prototype.removeListener =\n    function removeListener(type, listener) {\n      var list, events, position, i, originalListener;\n\n      checkListener(listener);\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      list = events[type];\n      if (list === undefined)\n        return this;\n\n      if (list === listener || list.listener === listener) {\n        if (--this._eventsCount === 0)\n          this._events = Object.create(null);\n        else {\n          delete events[type];\n          if (events.removeListener)\n            this.emit('removeListener', type, list.listener || listener);\n        }\n      } else if (typeof list !== 'function') {\n        position = -1;\n\n        for (i = list.length - 1; i >= 0; i--) {\n          if (list[i] === listener || list[i].listener === listener) {\n            originalListener = list[i].listener;\n            position = i;\n            break;\n          }\n        }\n\n        if (position < 0)\n          return this;\n\n        if (position === 0)\n          list.shift();\n        else {\n          spliceOne(list, position);\n        }\n\n        if (list.length === 1)\n          events[type] = list[0];\n\n        if (events.removeListener !== undefined)\n          this.emit('removeListener', type, originalListener || listener);\n      }\n\n      return this;\n    };\n\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\n\nEventEmitter.prototype.removeAllListeners =\n    function removeAllListeners(type) {\n      var listeners, events, i;\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      // not listening for removeListener, no need to emit\n      if (events.removeListener === undefined) {\n        if (arguments.length === 0) {\n          this._events = Object.create(null);\n          this._eventsCount = 0;\n        } else if (events[type] !== undefined) {\n          if (--this._eventsCount === 0)\n            this._events = Object.create(null);\n          else\n            delete events[type];\n        }\n        return this;\n      }\n\n      // emit removeListener for all listeners on all events\n      if (arguments.length === 0) {\n        var keys = Object.keys(events);\n        var key;\n        for (i = 0; i < keys.length; ++i) {\n          key = keys[i];\n          if (key === 'removeListener') continue;\n          this.removeAllListeners(key);\n        }\n        this.removeAllListeners('removeListener');\n        this._events = Object.create(null);\n        this._eventsCount = 0;\n        return this;\n      }\n\n      listeners = events[type];\n\n      if (typeof listeners === 'function') {\n        this.removeListener(type, listeners);\n      } else if (listeners !== undefined) {\n        // LIFO order\n        for (i = listeners.length - 1; i >= 0; i--) {\n          this.removeListener(type, listeners[i]);\n        }\n      }\n\n      return this;\n    };\n\nfunction _listeners(target, type, unwrap) {\n  var events = target._events;\n\n  if (events === undefined)\n    return [];\n\n  var evlistener = events[type];\n  if (evlistener === undefined)\n    return [];\n\n  if (typeof evlistener === 'function')\n    return unwrap ? [evlistener.listener || evlistener] : [evlistener];\n\n  return unwrap ?\n    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);\n}\n\nEventEmitter.prototype.listeners = function listeners(type) {\n  return _listeners(this, type, true);\n};\n\nEventEmitter.prototype.rawListeners = function rawListeners(type) {\n  return _listeners(this, type, false);\n};\n\nEventEmitter.listenerCount = function(emitter, type) {\n  if (typeof emitter.listenerCount === 'function') {\n    return emitter.listenerCount(type);\n  } else {\n    return listenerCount.call(emitter, type);\n  }\n};\n\nEventEmitter.prototype.listenerCount = listenerCount;\nfunction listenerCount(type) {\n  var events = this._events;\n\n  if (events !== undefined) {\n    var evlistener = events[type];\n\n    if (typeof evlistener === 'function') {\n      return 1;\n    } else if (evlistener !== undefined) {\n      return evlistener.length;\n    }\n  }\n\n  return 0;\n}\n\nEventEmitter.prototype.eventNames = function eventNames() {\n  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];\n};\n\nfunction arrayClone(arr, n) {\n  var copy = new Array(n);\n  for (var i = 0; i < n; ++i)\n    copy[i] = arr[i];\n  return copy;\n}\n\nfunction spliceOne(list, index) {\n  for (; index + 1 < list.length; index++)\n    list[index] = list[index + 1];\n  list.pop();\n}\n\nfunction unwrapListeners(arr) {\n  var ret = new Array(arr.length);\n  for (var i = 0; i < ret.length; ++i) {\n    ret[i] = arr[i].listener || arr[i];\n  }\n  return ret;\n}\n\nfunction once(emitter, name) {\n  return new Promise(function (resolve, reject) {\n    function errorListener(err) {\n      emitter.removeListener(name, resolver);\n      reject(err);\n    }\n\n    function resolver() {\n      if (typeof emitter.removeListener === 'function') {\n        emitter.removeListener('error', errorListener);\n      }\n      resolve([].slice.call(arguments));\n    };\n\n    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });\n    if (name !== 'error') {\n      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });\n    }\n  });\n}\n\nfunction addErrorHandlerIfEventEmitter(emitter, handler, flags) {\n  if (typeof emitter.on === 'function') {\n    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);\n  }\n}\n\nfunction eventTargetAgnosticAddListener(emitter, name, listener, flags) {\n  if (typeof emitter.on === 'function') {\n    if (flags.once) {\n      emitter.once(name, listener);\n    } else {\n      emitter.on(name, listener);\n    }\n  } else if (typeof emitter.addEventListener === 'function') {\n    // EventTarget does not have `error` event semantics like Node\n    // EventEmitters, we do not listen for `error` events here.\n    emitter.addEventListener(name, function wrapListener(arg) {\n      // IE does not have builtin `{ once: true }` support so we\n      // have to do it manually.\n      if (flags.once) {\n        emitter.removeEventListener(name, wrapListener);\n      }\n      listener(arg);\n    });\n  } else {\n    throw new TypeError('The \"emitter\" argument must be of type EventEmitter. Received type ' + typeof emitter);\n  }\n}\n\n\n//# sourceURL=webpack://lista-de-contatos/./node_modules/events/events.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/js/modules/menu.js\");\n/* harmony import */ var _modules_contato_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/contato.js */ \"./src/js/modules/contato.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ \"./src/js/modules/modal.js\");\n/* harmony import */ var _modules_paginacao_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/paginacao.js */ \"./src/js/modules/paginacao.js\");\n/* harmony import */ var _modules_crud_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/crud.js */ \"./src/js/modules/crud.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://lista-de-contatos/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/contato.js":
/*!***********************************!*\
  !*** ./src/js/modules/contato.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ iniciaModuloContato)\n/* harmony export */ });\n\n\nfunction iniciaModuloContato() {\n  var botoesOpcoesContato = document.querySelectorAll('.opcoes-contato');\n  var exibeOpcoesContato = function exibeOpcoesContato(_ref) {\n    var currentTarget = _ref.currentTarget;\n    var iconeOpcoes = currentTarget;\n    var contato = iconeOpcoes.parentNode;\n    var opcoes = document.querySelector('#botoes-opcoes');\n    contato.appendChild(opcoes);\n    opcoes.classList.toggle('ativo');\n  };\n  botoesOpcoesContato.forEach(function (botao) {\n    botao.addEventListener('click', exibeOpcoesContato);\n  });\n}\n\n//# sourceURL=webpack://lista-de-contatos/./src/js/modules/contato.js?");

/***/ }),

/***/ "./src/js/modules/crud.js":
/*!********************************!*\
  !*** ./src/js/modules/crud.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deletaContato: () => (/* binding */ deletaContato),\n/* harmony export */   eventoArrayModificado: () => (/* binding */ eventoArrayModificado),\n/* harmony export */   preencheFormulario: () => (/* binding */ preencheFormulario)\n/* harmony export */ });\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ \"./node_modules/events/events.js\");\n\n\n\nvar eventoArrayModificado = new events__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();\nvar acoes = {\n  adicionar: document.querySelector('.adicionar'),\n  atualizar: document.querySelector('#editar'),\n  deletar: document.querySelector('.confirmar')\n};\nvar dados;\nvar camposFormulario = {\n  nome: document.querySelector('#nome'),\n  numero: document.querySelector('#numero'),\n  email: document.querySelector('#email'),\n  endereco: document.querySelector('#endereco'),\n  grupo: document.querySelector('#grupo')\n};\nfunction inicializaDados() {\n  var _armazenamento$puxarD;\n  dados = (_armazenamento$puxarD = armazenamento.puxarDados()) !== null && _armazenamento$puxarD !== void 0 ? _armazenamento$puxarD : [];\n  eventoArrayModificado.emit('arrayModificado', dados);\n}\n\n// Armazenamento\nvar armazenamento = {\n  enviarDados: function enviarDados(dados) {\n    return localStorage.setItem('Contatos', JSON.stringify(dados));\n  },\n  puxarDados: function puxarDados() {\n    var contatosArray = JSON.parse(localStorage.getItem('Contatos'));\n    return contatosArray;\n  }\n};\n\n// Criar contato\nfunction adicionarContato(contato) {\n  dados.push(contato);\n  eventoArrayModificado.emit('arrayModificado', dados);\n  armazenamento.enviarDados(dados);\n}\nfunction criaObjetoContato(_ref, target) {\n  var nome = _ref.nome,\n    email = _ref.email,\n    numero = _ref.numero,\n    endereco = _ref.endereco,\n    grupo = _ref.grupo;\n  var contato = {\n    nome: nome.value,\n    email: email.value,\n    numero: numero.value,\n    endereco: endereco.value,\n    grupo: grupo.value\n  };\n  var textoBotao = target.innerText;\n  if (textoBotao === 'Atualizar') {\n    atualizarContato(contato);\n    return;\n  }\n  adicionarContato(contato);\n}\n\n// Atualizar contato\nvar indexContato;\nfunction preencheFormulario(contato) {\n  indexContato = contato.dataIndex;\n  camposFormulario.nome.value = dados[indexContato].nome;\n  camposFormulario.numero.value = dados[indexContato].numero;\n  camposFormulario.email.value = dados[indexContato].email;\n  camposFormulario.endereco.value = dados[indexContato].endereco;\n  camposFormulario.grupo.value = dados[indexContato].grupo;\n}\nfunction atualizarContato(contato) {\n  dados[indexContato] = contato;\n  eventoArrayModificado.emit('arrayModificado', dados);\n  armazenamento.enviarDados(dados);\n}\n\n// Deletar contato\nfunction deletaContato(indexContato) {\n  dados.splice(indexContato, 1);\n  eventoArrayModificado.emit('arrayModificado', dados);\n  armazenamento.enviarDados(dados);\n}\n\n// Eventos\nacoes.adicionar.addEventListener('click', function (event) {\n  event.preventDefault();\n  criaObjetoContato(camposFormulario, event.target);\n});\nacoes.atualizar.addEventListener('click', function (event) {\n  event.preventDefault();\n  criaObjetoContato(camposFormulario, event.target);\n});\nwindow.addEventListener('load', inicializaDados);\n\n\n//# sourceURL=webpack://lista-de-contatos/./src/js/modules/crud.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _paginacao_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paginacao.js */ \"./src/js/modules/paginacao.js\");\n\n\n\nvar elementos = {\n  modais: _paginacao_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('.modais'),\n  formulario: _paginacao_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('form'),\n  botaoAdicionarContato: _paginacao_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('.adicionar-contato'),\n  botaoCancelar: _paginacao_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('.cancelar'),\n  botaoAdicionar: _paginacao_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('.adicionar'),\n  botaoAtualizar: _paginacao_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('#editar'),\n  camposFormulario: document.querySelectorAll('.conteiner-input input')\n};\nvar controlaModal = {\n  modal: function modal(acao) {\n    elementos.modais.classList.toggle('ativo', acao === 'Adicionar contato' || acao === 'Editar');\n  },\n  formularioContato: function formularioContato(acao) {\n    elementos.formulario.classList.toggle('ativo', acao === 'Adicionar contato' || acao === 'Editar');\n  },\n  exibeBtnAdicionarOuAtualizar: function exibeBtnAdicionarOuAtualizar(acao) {\n    elementos.botaoAtualizar.classList.toggle('ativo', acao === 'Editar');\n    elementos.botaoAdicionar.classList.toggle('ativo', acao !== 'Editar');\n  }\n};\nvar executaAcao = function executaAcao(acao) {\n  controlaModal.exibeBtnAdicionarOuAtualizar(acao);\n  controlaModal.modal(acao);\n  controlaModal.formularioContato(acao);\n};\nvar controles = {\n  limpaCamposForm: function limpaCamposForm(acao) {\n    var acoesQueExigemLimpeza = ['Adicionar', 'Cancelar', 'Atualizar'];\n    if (acoesQueExigemLimpeza.includes(acao)) {\n      elementos.camposFormulario.forEach(function (campo) {\n        return campo.value = '';\n      });\n    }\n  },\n  executaAcaoDoBotao: function executaAcaoDoBotao(_ref) {\n    var target = _ref.target;\n    var textoBotao = target.innerText;\n    executaAcao(textoBotao);\n    controles.limpaCamposForm(textoBotao);\n  },\n  criaEventos: function criaEventos() {\n    elementos.botaoAdicionarContato.addEventListener('click', controles.executaAcaoDoBotao);\n    elementos.botaoCancelar.addEventListener('click', function (event) {\n      event.preventDefault();\n      controles.executaAcaoDoBotao(event);\n    });\n    elementos.botaoAdicionar.addEventListener('click', controles.executaAcaoDoBotao);\n    elementos.botaoAtualizar.addEventListener('click', controles.executaAcaoDoBotao);\n  }\n};\nfunction iniciaFuncoes() {\n  controles.criaEventos();\n}\niniciaFuncoes();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (executaAcao);\n\n//# sourceURL=webpack://lista-de-contatos/./src/js/modules/modal.js?");

/***/ }),

/***/ "./src/js/modules/paginacao.js":
/*!*************************************!*\
  !*** ./src/js/modules/paginacao.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _crud_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud.js */ \"./src/js/modules/crud.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.js */ \"./src/js/modules/modal.js\");\n/* harmony import */ var _contato_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contato.js */ \"./src/js/modules/contato.js\");\n\n\n\n\n\nvar dados = [];\n_crud_js__WEBPACK_IMPORTED_MODULE_0__.eventoArrayModificado.on('arrayModificado', function (arrayAtualizado) {\n  dados = arrayAtualizado.map(function (contato) {\n    return \"<input type=\\\"checkbox\\\" name=\\\"checkbox\\\" id=\\\"checkbox\\\">\\n            <div class=\\\"info-basicas\\\">\\n              <img src=\\\"src/images/foto-perfil.jpg\\\" alt=\\\"\\\">\\n              <p>\".concat(contato.nome, \"</p>\\n            </div>\\n            <p>\").concat(contato.email, \"</p>\\n            <p>\").concat(contato.numero, \"</p>\\n            <p>\").concat(contato.endereco, \"</p>\\n            <p>\").concat(contato.grupo, \"</p>\\n            <i class=\\\"bi bi-three-dots opcoes-contato\\\"></i>\\n          \");\n  });\n  estado.totalPaginas = Math.ceil(dados.length / porPagina);\n  iniciaFuncoes();\n});\nvar porPagina = 20;\nvar estado = {\n  pagina: 1,\n  porPagina: porPagina,\n  totalPaginas: 0,\n  maxBotoesVisiveis: 5\n};\nvar html = {\n  get: function get(elemento) {\n    return document.querySelector(elemento);\n  }\n};\nvar controles = {\n  paginaSeguinte: function paginaSeguinte() {\n    estado.pagina++;\n    var ultimaPagina = estado.pagina > estado.totalPaginas;\n    if (ultimaPagina) {\n      estado.pagina--;\n    }\n  },\n  paginaAnterior: function paginaAnterior() {\n    estado.pagina--;\n    if (estado.pagina < 1) {\n      estado.pagina++;\n    }\n  },\n  irParaPagina: function irParaPagina(pagina) {\n    if (pagina < 1) {\n      pagina = 1;\n    }\n    estado.pagina = +pagina;\n    if (pagina > estado.totalPaginas) {\n      estado.pagina = estado.totalPaginas;\n    }\n  },\n  criaEventos: function criaEventos() {\n    html.get('.primeiro').addEventListener('click', function () {\n      controles.irParaPagina(1);\n      atualiza();\n    });\n    html.get('.ultimo').addEventListener('click', function () {\n      controles.irParaPagina(estado.totalPaginas);\n      atualiza();\n    });\n    html.get('.anterior').addEventListener('click', function () {\n      controles.paginaAnterior();\n      atualiza();\n    });\n    html.get('.proximo').addEventListener('click', function () {\n      controles.paginaSeguinte();\n      atualiza();\n    });\n  }\n};\nvar lista = {\n  criaItem: function criaItem(item, index) {\n    var contato = document.createElement('li');\n    contato.classList.add('contato');\n    contato.innerHTML = item;\n    contato.dataIndex = index;\n    html.get('.lista').appendChild(contato);\n  },\n  atualiza: function atualiza() {\n    html.get('.lista').innerHTML = '';\n    html.get('.lista').innerHTML = \" <div class=\\\"botoes-opcoes\\\" id=\\\"botoes-opcoes\\\">\\n        <button class=\\\"editar\\\">\\n          <i class=\\\"bi bi-pencil\\\"></i>\\n          Editar\\n        </button>\\n        <button class=\\\"excluir\\\">\\n          <i class=\\\"bi bi-trash\\\"></i>\\n          Excluir\\n        </button>\\n      </div>\\n    \";\n    var btnEditar = html.get('.editar');\n    btnEditar.addEventListener('click', function (_ref) {\n      var currentTarget = _ref.currentTarget;\n      var contato = currentTarget.parentNode.parentNode;\n      (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.preencheFormulario)(contato);\n      (0,_modal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Editar\");\n    });\n    var btnDeletar = html.get('.excluir');\n    btnDeletar.addEventListener('click', function (_ref2) {\n      var currentTarget = _ref2.currentTarget;\n      var contato = currentTarget.parentNode.parentNode;\n      var indexContato = contato.dataIndex;\n      (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.deletaContato)(indexContato);\n    });\n    var pagina = estado.pagina - 1;\n    var inicio = pagina * porPagina;\n    var fim = inicio + porPagina;\n    var itensPaginados = dados.slice(inicio, fim);\n    itensPaginados.forEach(function (item, index) {\n      lista.criaItem(item, index);\n    });\n  }\n};\nvar botoes = {\n  elemento: html.get('.paginas'),\n  criarBotoes: function criarBotoes(numero) {\n    var botao = document.createElement('div');\n    botao.innerHTML = numero;\n    if (estado.pagina == numero) {\n      botao.classList.add('ativo');\n    }\n    botao.addEventListener('click', function (event) {\n      var pagina = event.target.innerHTML;\n      controles.irParaPagina(pagina);\n      atualiza();\n    });\n    botoes.elemento.appendChild(botao);\n  },\n  atualiza: function atualiza() {\n    botoes.elemento.innerHTML = '';\n    var _botoes$calculaMaximo = botoes.calculaMaximoVisiveis(),\n      maxEsquerda = _botoes$calculaMaximo.maxEsquerda,\n      maxDireita = _botoes$calculaMaximo.maxDireita;\n    for (var pagina = maxEsquerda; pagina <= maxDireita; pagina++) {\n      botoes.criarBotoes(pagina);\n    }\n  },\n  calculaMaximoVisiveis: function calculaMaximoVisiveis() {\n    var maxBotoesVisiveis = estado.maxBotoesVisiveis;\n    var maxEsquerda = estado.pagina - Math.floor(maxBotoesVisiveis / 2);\n    var maxDireita = estado.pagina + Math.floor(maxBotoesVisiveis / 2);\n    if (maxEsquerda < 1) {\n      maxEsquerda = 1;\n      maxDireita = maxBotoesVisiveis;\n    }\n    if (maxDireita > estado.totalPaginas) {\n      maxEsquerda = estado.totalPaginas - (maxBotoesVisiveis - 1);\n      maxDireita = estado.totalPaginas;\n      if (maxEsquerda < 1) {\n        maxEsquerda = 1;\n      }\n    }\n    return {\n      maxEsquerda: maxEsquerda,\n      maxDireita: maxDireita\n    };\n  }\n};\nfunction scrollPosicaoInicial() {\n  html.get('.lista').scrollTop = 0;\n}\nfunction atualiza() {\n  lista.atualiza();\n  botoes.atualiza();\n  scrollPosicaoInicial();\n  (0,_contato_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\nfunction iniciaFuncoes() {\n  atualiza();\n}\ncontroles.criaEventos();\niniciaFuncoes();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (html);\n\n//# sourceURL=webpack://lista-de-contatos/./src/js/modules/paginacao.js?");

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