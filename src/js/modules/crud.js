'use strict';

import { EventEmitter } from 'events';

const eventoArrayModificado = new EventEmitter();
const contatosExcluidosModificado = new EventEmitter();
const acoes = {
  adicionar: document.querySelector('.adicionar'),
  atualizar: document.querySelector('#editar'),
  deletar: document.querySelector('.confirmar'),
  btnContatosMenu: document.querySelector('#contatos'),
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
  puxarDados(chave) {
    const contatosArray =  JSON.parse(localStorage.getItem(chave));
    return contatosArray;
  }
}

// Criar contato
function adicionarContato(contato) {
  dados.push(contato);
  eventoArrayModificado.emit('arrayModificado', dados);
  armazenamento.enviarDados(dados);
}

function criaObjetoContato({ nome, email, numero, endereco, grupo }, target) {
  const contato = {
    nome: nome.value,
    email: email.value,
    numero: numero.value,
    endereco: endereco.value,
    grupo: grupo.value,
  }
  
  const textoBotao = target.innerText;
  if (textoBotao === 'Atualizar') {
    atualizarContato(contato);
    return;
  }

  adicionarContato(contato);
}

// Atualizar contato
let indexContato;
function preencheFormulario(contato) {
  indexContato = contato.dataIndex;
  camposFormulario.nome.value = dados[indexContato].nome;
  camposFormulario.numero.value = dados[indexContato].numero;
  camposFormulario.email.value = dados[indexContato].email;
  camposFormulario.endereco.value = dados[indexContato].endereco;
  camposFormulario.grupo.value = dados[indexContato].grupo;
}

function atualizarContato(contato) {
  dados[indexContato] = contato;
  eventoArrayModificado.emit('arrayModificado', dados);
  armazenamento.enviarDados(dados);
}

// Deletar contato
const contatosExcluidos = [];
function deletaContato(indexContato) {
  // Atualiza a lixeira
  contatosExcluidos.push(dados[indexContato]);
  contatosExcluidosModificado.emit('excluidosModificados', contatosExcluidos);

  dados.splice(indexContato, 1);
  eventoArrayModificado.emit('arrayModificado', dados);
  armazenamento.enviarDados(dados);
}

// Eventos
acoes.adicionar.addEventListener('click', (event) => {
  event.preventDefault();
  criaObjetoContato(camposFormulario, event.target);
});

acoes.atualizar.addEventListener('click', (event) => {
  event.preventDefault();
  criaObjetoContato(camposFormulario, event.target);
});

acoes.btnContatosMenu.addEventListener('click', inicializaDados);

window.addEventListener('load', inicializaDados);

export {
  eventoArrayModificado,
  preencheFormulario,
  deletaContato,
  contatosExcluidosModificado,
};
