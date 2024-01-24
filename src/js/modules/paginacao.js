'use strict';

import eventoArrayModificado from './crud.js';

let porPagina = 20;
const estado = {
  pagina: 1,
  porPagina,
  totalPaginas: Math.ceil(dados.length / porPagina),
  maxBotoesVisiveis: 5
}

const html = {
  get(elemento) {
    return document.querySelector(elemento);
  }
}

const controles = {
  paginaSeguinte() {
    estado.pagina++;

    const ultimaPagina = estado.pagina > estado.totalPaginas;
    if(ultimaPagina) {
      estado.pagina--;
    }
  },
  paginaAnterior() {
    estado.pagina--;

    if (estado.pagina < 1) {
      estado.pagina++;
    }
  },
  irParaPagina(pagina) {
    if (pagina < 1) {
      pagina = 1;
    }

    estado.pagina = +pagina;

    if (pagina > estado.totalPaginas) {
      estado.pagina = estado.totalPaginas;
    }
  },
  criaEventos() {
    html.get('.primeiro').addEventListener('click', () => {
      controles.irParaPagina(1);
      atualiza();
    })

    html.get('.ultimo').addEventListener('click', () => {
      controles.irParaPagina(estado.totalPaginas);
      atualiza();
    })

    html.get('.anterior').addEventListener('click', () => {
      controles.paginaAnterior();
      atualiza();
    })

    html.get('.proximo').addEventListener('click', () => {
      controles.paginaSeguinte();
      atualiza();
    })
  }

}

const lista = {
  criaItem(item) {
    const div = document.createElement('div');
    div.classList.add('item');
    div.innerHTML = item;

    html.get('.lista').appendChild(div);
  },
  atualiza() {
    html.get('.lista').innerHTML = '';

    let pagina = estado.pagina - 1;
    let inicio = pagina * porPagina;
    let fim = inicio + porPagina;

    const itensPaginados = dados.slice(inicio, fim); 

    itensPaginados.forEach(lista.criaItem);
  }
}

const botoes = {
  elemento: html.get('.paginas'),
  criarBotoes(numero) {
    const botao = document.createElement('div');
    botao.innerHTML = numero;

    if (estado.pagina == numero) {
      botao.classList.add('ativo');
    }

    botao.addEventListener('click', (event) => {
      const pagina = event.target.innerHTML;

      controles.irParaPagina(pagina);
      atualiza();
    })
    botoes.elemento.appendChild(botao);
  },
  atualiza() {
    botoes.elemento.innerHTML = '';
    const { maxEsquerda, maxDireita } = botoes.calculaMaximoVisiveis();

    for (let pagina = maxEsquerda; pagina <= maxDireita; pagina++) {
      botoes.criarBotoes(pagina);
    }
  },
  calculaMaximoVisiveis() {
    const { maxBotoesVisiveis } = estado;
    let maxEsquerda = (estado.pagina - Math.floor(maxBotoesVisiveis / 2));
    let maxDireita = (estado.pagina + Math.floor(maxBotoesVisiveis / 2));

    if (maxEsquerda < 1) {
      maxEsquerda = 1;
      maxDireita = maxBotoesVisiveis;
    }

    if (maxDireita > estado.totalPaginas) {
      maxEsquerda = estado.totalPaginas - (maxBotoesVisiveis - 1);
      maxDireita = estado.totalPaginas;

      if (maxEsquerda < 1) {
        maxEsquerda = 1;
      }
    }

    return {maxEsquerda, maxDireita};
  }
}

function scrollPosicaoInicial() {
  html.get('.lista').scrollTop = 0;
}

function atualiza() {
  lista.atualiza();
  botoes.atualiza();
  scrollPosicaoInicial()
} 

function iniciaFuncoes() {
  atualiza();
  controles.criaEventos();
}

iniciaFuncoes();

export default html;