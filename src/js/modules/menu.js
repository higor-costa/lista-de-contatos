'use strict';

const tituloListaGrupos = document.querySelector('#titulo-grupos');

const controlaExibicaoGrupos = () => {
  const grupos = document.querySelector('#lista-grupos');
  grupos.classList.toggle('ativo');
}

tituloListaGrupos.addEventListener('click', controlaExibicaoGrupos);
