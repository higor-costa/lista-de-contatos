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