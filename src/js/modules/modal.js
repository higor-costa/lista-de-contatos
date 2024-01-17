'use strict';

import html from './paginacao.js';

const elementos = {
  modais: html.get('.modais'),
  formulario: html.get('form'),
  botaoAdicionarContato: html.get('.adicionar-contato'),
  botaoCancelar: html.get('.cancelar'),
  botaoAdicionar: html.get('.adicionar'),
};

const controlaModal = {
  modal(acao) {
    elementos.modais.classList.toggle('ativo', acao === 'Adicionar contato');
  },
  formularioContato(acao) {
    elementos.formulario.classList.toggle('ativo', acao === 'Adicionar contato');
  },
};

const executaAcao = (acao) => {
  controlaModal.modal(acao);
  controlaModal.formularioContato(acao);
};

const controles = {
  executaAcaoDoBotao: ({ target }) => {
    const textoBotao = target.innerText;
    executaAcao(textoBotao);
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