import React from 'react';

function Desafio3() {
  const perfil = () => {
    const txtTitulo = document.getElementById('txttitulo');
    const txtTexto = document.getElementById('txttexto');
    const txtImagem = document.getElementById('txtimagem');
    const texto = document.getElementById('texto');
    const titulo = document.getElementById('titulo');
    const imagem = document.getElementById('imagem');

    titulo.textContent = txtTitulo.value;
    imagem.src = txtImagem.value;
    texto.textContent = txtTexto.value;
  };

  return (
    <div>
      <h2>perfil</h2>
      <input type="text" id="txttitulo" placeholder="digite um titulo aqui" />
      <input type="text" id="txtimagem" placeholder="coloque uma imagem aqui" />
      <input type="text" id="txttexto" placeholder="coloque um texto aqui" />
      <br />
      <button onClick={perfil}>enviar </button>
      <div className="card text-center w-25 mx-auto bg-info-subtle">
        <div className="card-body">
          <h2 id="titulo" className="display-3"></h2>
          <p id="texto" className="display-3"></p>
          <img
            src=""
            alt=""
            id="imagem"
            className="img-fluid rounded border border-danger"
          />
        </div>
      </div>
    </div>
  );
}

export default Desafio3;
