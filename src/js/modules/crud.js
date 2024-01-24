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

// Criar contato
function adicionarContato(contato) {
  dados.push(contato);
  eventoArrayModificado.emit('arrayModificado', dados);
}

function criaObjetoContato({ nome, email, numero, endereco, grupo }) {
  const contato = {
    nome: nome.value,
    email: email.value,
    numero: numero.value,
    endereco: endereco.value,
    grupo: grupo.value,
  }

  adicionarContato(contato);
}

// Eventos
acoes.adicionar.addEventListener('click', (event) => {
  event.preventDefault();
  criaObjetoContato(dadosContato);
});
