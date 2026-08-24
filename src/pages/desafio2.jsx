import React from 'react';

function Desafio2() {
  const perfil = () => {
    const txtTitulo = document.getElementById('txttitulo');
    const txtImagem = document.getElementById('txtimagem');
    const titulo = document.getElementById('titulo');
    const imagem = document.getElementById('imagem');

    titulo.textContent = txtTitulo.value;
    imagem.src = txtImagem.value;
  };

  return (
    <div>
      <h2>perfil</h2>
      <input type="text" id="txttitulo" placeholder="digite um titulo" />
      <input type="text" id="txtimagem" placeholder="coloque uma imagem" />
      <br />
      <button onClick={perfil}>enviar </button>
      <div className="card text-center w-25 mx-auto bg-info-subtle">
        <div className="card-body">
          <h2 id="titulo" className="display-3"></h2>
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

export default Desafio2;
