'use strict';

const dados = Array.from({ length: 100 })
.map((_, index) => {
  return `<li class="contato">
          <input type="checkbox" name="checkbox" id="checkbox">
          <div class="info-basicas">
            <img src="src/images/foto-perfil.jpg" alt="">
            <p>Higor Costa ${index + 1}</p>
          </div>
          <p>higorcosta972@gmail.com</p>
          <p>+55 (87) 98109-3238</p>
          <p>Rua Atalibal Victor, Nº 21</p>
          <p>Família</p>
          <svg class="opcoes-contato" width="20" height="7" viewBox="0 0 29 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="3.625" cy="3.49398" rx="3.625" ry="3.49398" fill="#1A1A1A"/>
            <ellipse cx="14.5" cy="3.49398" rx="3.625" ry="3.49398" fill="#1A1A1A"/>
            <ellipse cx="25.375" cy="3.49398" rx="3.625" ry="3.49398" fill="#1A1A1A"/>
          </svg>
        </li>`;
});

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
