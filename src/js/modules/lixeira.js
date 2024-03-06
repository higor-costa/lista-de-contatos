'use strict';

import { contatosExcluidosModificado, eventoArrayModificado } from './crud.js';

const menuLixeira = document.querySelector('#lixeira');
let arrayAtualizado;

let arrayAtualizado = [];
contatosExcluidosModificado.on('excluidosModificados', (contatosExcluidos) => {
  arrayAtualizado = contatosExcluidos;
});

function exibeContatosExcluidos() {
  eventoArrayModificado.emit('arrayModificado', arrayAtualizado);
}

// Eventos
menuLixeira.addEventListener('click', exibeContatosExcluidos);
