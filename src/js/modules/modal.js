'use strict';

import html from './paginacao.js';

const elementos = {
  modais: html.get('.modais'),
  formulario: html.get('form'),
  botaoAdicionarContato: html.get('.adicionar-contato'),
  botaoCancelar: html.get('.cancelar'),
  botaoAdicionar: html.get('.adicionar'),
  botaoAtualizar: html.get('#editar'),
  camposFormulario: document.querySelectorAll('.conteiner-input input')
};

const controlaModal = {
  modal(acao) {
    elementos.modais.classList.toggle('ativo', acao === 'Adicionar contato');
  },
  formularioContato(acao) {
    elementos.formulario.classList.toggle('ativo', acao === 'Adicionar contato');
  },
  exibeBtnAdicionarOuAtualizar(acao) {
    elementos.botaoAtualizar.classList.toggle('ativo', acao === 'Editar');
    elementos.botaoAdicionar.classList.toggle('ativo', acao !== 'Editar');
  }
};

const executaAcao = (acao) => {
  controlaModal.exibeBtnAdicionarOuAtualizar(acao);
  controlaModal.modal(acao);
  controlaModal.formularioContato(acao);
};

const controles = {
  limpaCamposForm(acao) {
    if (acao === 'Adicionar' || acao === 'Cancelar') {
      elementos.camposFormulario.forEach(campo => campo.value = '');
    }
  },
  executaAcaoDoBotao: ({ target }) => {
    const textoBotao = target.innerText;
    executaAcao(textoBotao);
    controles.limpaCamposForm(textoBotao);    
  },
  criaEventos() {
    elementos.botaoAdicionarContato.addEventListener('click', controles.executaAcaoDoBotao);
    elementos.botaoCancelar.addEventListener('click', (event) => {
      event.preventDefault();
      controles.executaAcaoDoBotao(event);
    });
    elementos.botaoAdicionar.addEventListener('click', controles.executaAcaoDoBotao);
  },
};

function iniciaFuncoes() {
  controles.criaEventos();
}

iniciaFuncoes();