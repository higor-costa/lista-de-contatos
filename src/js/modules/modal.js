'use strict';

import html from './paginacao.js';

const elementos = {
  modais: html.get('.modais'),
  formulario: html.get('form'),
  botaoAdicionarContato: html.get('.adicionar-contato'),
  botaoCancelar: html.get('.cancelar'),
  botaoAdicionar: html.get('.adicionar'),
  botaoAtualizar: html.get('#editar'),
  camposFormulario: document.querySelectorAll('.conteiner-input input'),
  formExclusaoPermanente: html.get('.exclusao-permanente'),
  botaoNao: html.get('.negar')
};

const controlaModal = {
  modal(acao) {
    elementos.modais.classList.toggle(
      'ativo',
      acao === 'Adicionar contato' ||
      acao === 'Editar' ||
      acao === 'Excluir permanentemente'
    );
  },
  formularioContato(acao) {
    elementos.formulario.classList.toggle('ativo', acao === 'Adicionar contato' || acao === 'Editar');
  },
  exibeBtnAdicionarOuAtualizar(acao) {
    elementos.botaoAtualizar.classList.toggle('ativo', acao === 'Editar');
    elementos.botaoAdicionar.classList.toggle('ativo', acao !== 'Editar');
  },
  formExclusaoPermanente(acao) {
    elementos.formExclusaoPermanente.classList.toggle('ativo', acao === 'Excluir permanentemente');
  }
};

const executaAcao = (acao) => {
  controlaModal.exibeBtnAdicionarOuAtualizar(acao);
  controlaModal.modal(acao);
  controlaModal.formularioContato(acao);
  controlaModal.formExclusaoPermanente(acao);
};

const controles = {
  limpaCamposForm(acao) {
    const acoesQueExigemLimpeza = ['Adicionar', 'Cancelar', 'Atualizar'];

    if (acoesQueExigemLimpeza.includes(acao)) {
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
    elementos.botaoAtualizar.addEventListener('click', controles.executaAcaoDoBotao);
    elementos.botaoNao.addEventListener('click', controles.executaAcaoDoBotao);
  },
};

function iniciaFuncoes() {
  controles.criaEventos();
}

iniciaFuncoes();

export default executaAcao;