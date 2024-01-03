'use strict';

const tituloListaGrupos = document.querySelector('#titulo-grupos');

const controlaExibicaoGrupos = () => {
  const grupos = document.querySelector('#lista-grupos');
  const setaGrupos = document.querySelector('#seta-grupos');

  grupos.classList.toggle('ativo');
  setaGrupos.classList.toggle('ativo');
}

tituloListaGrupos.addEventListener('click', controlaExibicaoGrupos);
