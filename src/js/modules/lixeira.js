'use strict';

import { contatosExcluidosModificado, eventoArrayModificado } from './crud.js';

const menuLixeira = document.querySelector('#lixeira');
let arrayAtualizado;

const armazenamentoLixeira = {
  enviaDados(contatosExcluidos) {
    localStorage.setItem('Lixeira', JSON.stringify(contatosExcluidos));
  },
  puxaDados() {
    const arrayContatosExcluidos = JSON.parse(localStorage.getItem('Lixeira'));
    return arrayContatosExcluidos;
  },
}

const inicializaLixeira = () => {
  arrayAtualizado = armazenamentoLixeira.puxaDados() ?? [];
}

contatosExcluidosModificado.on('excluidosModificados', (contatosExcluidos) => {
  armazenamentoLixeira.enviaDados(contatosExcluidos);
  arrayAtualizado = armazenamentoLixeira.puxaDados();
});

function exibeContatosExcluidos() {
  eventoArrayModificado.emit('arrayModificado', arrayAtualizado);
}

// Eventos
menuLixeira.addEventListener('click', exibeContatosExcluidos);
window.addEventListener('load', inicializaLixeira);