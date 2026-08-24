import React, { useEffect, useState } from 'react';

function Desafio6() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');
  const [genero, setGenero] = useState('');
  const [plataforma, setPlataforma] = useState('');
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    fetch('https://www.freetogame.com/api/games')
      .then((resposta) => resposta.json())
      .then((jogo) => {
        setTitulo(jogo[indice].title);
        setDescricao(jogo[indice].short_description);
        setImagem(jogo[indice].thumbnail);
        setGenero(jogo[indice].genre);
        setPlataforma(jogo[indice].platform);
      });
  }, [indice]);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-0">
            <div className="card-header text-center bg-primary text-white">
              <h2 className="mb-0">🎮 API de Jogo Gratuito</h2>
            </div>

            <div className="card-body text-center">
              <h3 className="card-title mb-3">{titulo}</h3>

              <img
                src={imagem}
                alt=""
                className="img-fluid rounded shadow-sm mb-3"
              />

              <p className="card-text">{descricao}</p>

              <div className="alert alert-info">
                <strong>Gênero:</strong> {genero}
                <br />
                <strong>Plataforma:</strong> {plataforma}
              </div>

              <button
                onClick={() => setIndice(Math.floor(Math.random() * 50))}
                className="btn btn-danger btn-lg"
              >
                🎲 Novo Jogo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desafio6;