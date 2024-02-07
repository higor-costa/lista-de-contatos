'use strict';

export default function iniciaModuloContato() {
  const botoesOpcoesContato = document.querySelectorAll('.opcoes-contato');

  const exibeOpcoesContato = ({ currentTarget }) => {
    const iconeOpcoes = currentTarget;
    const contato = iconeOpcoes.parentNode;
    const opcoes = document.querySelector('#botoes-opcoes');

    contato.appendChild(opcoes);
    opcoes.classList.toggle('ativo');
  };

  botoesOpcoesContato.forEach((botao) => {
    botao.addEventListener('click', exibeOpcoesContato);
  });
}
