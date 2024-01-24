'use strict';

import { EventEmitter } from 'events';

const eventoArrayModificado = new EventEmitter();
const acoes = {
  adicionar: document.querySelector('.adicionar'),
}
const dados = [];
const camposFormulario = {
  nome: document.querySelector('#nome'),
  numero: document.querySelector('#numero'),
  email: document.querySelector('#email'),
  endereco: document.querySelector('#endereco'),
  grupo: document.querySelector('#grupo'),
}
