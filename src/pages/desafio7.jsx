import React, { useEffect, useState } from 'react';

function Desafio7() {

  const[nome, setNome] = useState('');
  const[peso, setPeso] = useState('');
  const[imagem, setImagem] = useState('');
  const[indice, setIndice] = useState(1);

  useEffect(() =>  {
    fetch(`https://pokeapi.co/api/v2/pokemon/${indice}`)
      .then((resposta) => resposta.json())
      .then((pokemon) => {
        setNome(pokemon.name);
        setPeso(pokemon.weight);
        setImagem(pokemon.sprites.front_default);
      });

  }, [indice] );

  return (
    <div className="bg-primary min-vh-100 d-flex justify-content-center align-items-center p-3">
      <div 
        className="card text-white" 
        style={{ 
          maxWidth: '400px', 
          width: '100%', 
          backgroundColor: '#dc3545', 
          borderRadius: '20px',
          /* Borda principal brilhante e em estilo retro/pixelado */
          border: '6px solid #ff4d4d',
          boxShadow: '0 0 15px #ff4d4d, 0 0 30px #ff0000, 8px 8px 0px #000' 
        }}
      >
        <div className="card-body p-4 text-center">
          <div className="d-flex align-items-center justify-content-between mb-3">
            {/* Luz Principal com brilho e borda pixelada */}
            <div 
              className="rounded-circle bg-info" 
              style={{ 
                width: '40px', 
                height: '40px',
                border: '4px solid #fff',
                boxShadow: '0 0 10px #0dcaf0, 0 0 20px #0dcaf0'
              }}
            ></div>
            <div className="d-flex gap-2">
              <span className="badge rounded-circle bg-danger p-2" style={{ border: '2px solid #fff', boxShadow: '0 0 8px #dc3545' }}> </span>
              <span className="badge rounded-circle bg-warning p-2" style={{ border: '2px solid #fff', boxShadow: '0 0 8px #ffc107' }}> </span>
              <span className="badge rounded-circle bg-success p-2" style={{ border: '2px solid #fff', boxShadow: '0 0 8px #198754' }}> </span>
            </div>
          </div>

          <div className="mb-3">
            <h2 className="fs-4 text-uppercase fw-bold" style={{ textShadow: '2px 2px 0px #000' }}>pokedex vagabunda</h2>
          </div>

          {/* Tela Central com Borda Verde Neon Pixelada */}
          <div 
            className="bg-light text-dark rounded-4 p-3 mb-3"
            style={{
              border: '5px solid #20c997',
              boxShadow: '0 0 15px #20c997, inset 4px 4px 0px #aaa'
            }}
          >
            <h3 className="text-capitalize fw-bold mb-2">{nome || 'Buscando...'}</h3>
            <img 
              className="img-fluid my-2" 
              style={{ maxHeight: '160px', objectFit: 'contain' }}
              src={imagem || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'} 
              alt={nome}
            />

            <p className="badge bg-dark fs-6 m-0" style={{ border: '2px solid #0dcaf0', boxShadow: '0 0 5px #0dcaf0' }}>#{indice}</p>
          </div>

          {/* Painel de status com bordas brilhantes */}
          <div 
            className="bg-dark bg-opacity-75 p-3 rounded-3 mb-3 text-start"
            style={{
              border: '3px solid #ffc107',
              boxShadow: '0 0 10px rgba(255, 193, 7, 0.5)'
            }}
          >
            <p className="m-0 text-warning fw-bold text-uppercase">peso: <span className="text-white fw-normal">{peso ? `${peso / 10} kg` : '-'}</span></p>
            <p className="m-0 text-warning fw-bold text-uppercase">nome: <span className="text-white fw-normal text-capitalize">{nome || '-'}</span></p>
          </div>
       

          {/* Botão com brilho amarelo neon e estilo bloco pixelado */}
          <button
            onClick={() => setIndice(Math.floor(Math.random() * 1025) + 1)}
            className="btn btn-warning btn-lg w-100 fw-bold text-dark text-uppercase"
            style={{
              border: '4px solid #fff',
              boxShadow: '0 0 15px #ffc107, 4px 4px 0px #000',
              imageRendering: 'pixelated'
            }}
          >
            novo pokemon
          </button>
        </div>    
      </div>      
    </div>
  );
}

export default Desafio7;