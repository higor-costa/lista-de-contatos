'use strict';

import { EventEmitter } from 'events';

const eventoArrayModificado = new EventEmitter();
const acoes = {
  adicionar: document.querySelector('.adicionar'),
}
let dados;
const camposFormulario = {
  nome: document.querySelector('#nome'),
  numero: document.querySelector('#numero'),
  email: document.querySelector('#email'),
  endereco: document.querySelector('#endereco'),
  grupo: document.querySelector('#grupo'),
}

function inicializaDados() {
  dados = armazenamento.puxarDados() ?? [] ;
  eventoArrayModificado.emit('arrayModificado', dados);
}

// Armazenamento
const armazenamento = {
  enviarDados: (dados => localStorage.setItem('Contatos', JSON.stringify(dados))),
  puxarDados() {
    const contatosArray =  JSON.parse(localStorage.getItem('Contatos'));
    return contatosArray;
  }
}

// Criar contato
function adicionarContato(contato) {
  dados.push(contato);
  eventoArrayModificado.emit('arrayModificado', dados);
  armazenamento.enviarDados(dados);
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
  criaObjetoContato(camposFormulario);
});

window.addEventListener('load', inicializaDados);

export default eventoArrayModificado;
