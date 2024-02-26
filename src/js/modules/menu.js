'use strict';

const tituloListaGrupos = document.querySelector('#titulo-grupos');
const itensMenu = document.querySelectorAll('.item-titulo');
const tituloPrincipal = document.querySelector('#titulo-principal');

const controlaExibicaoGrupos = () => {
  const grupos = document.querySelector('#lista-grupos');
  const setaGrupos = document.querySelector('#seta-grupos');

  grupos.classList.toggle('ativo');
  setaGrupos.classList.toggle('ativo');
}

function menu() {
  const titulo = this.innerText;
  tituloPrincipal.innerText = titulo;
}

itensMenu.forEach(item => {
  item.addEventListener('click', menu);
});

tituloListaGrupos.addEventListener('click', controlaExibicaoGrupos);
