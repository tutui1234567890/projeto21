import React from 'react';

function Teste2() {
  function teste1() {}

  const teste = () => alert('reaching the line just to start again');

  const teste2 = (texto) => {
    alert(texto);
  };

  const teste3 = (texto) => {
    alert(texto);
  };

  return (
    <div>
      <h1>teste 2</h1>
      <button onClick={teste} className="btn btn-warning">
        Teste
      </button>
      <button
        onClick={() => teste2(' lets start this race')}
        className="btn btn-danger"
      >
        Teste deux
      </button>
      <button
        onClick={() => teste3('to find the steel ball run')}
        className="btn btn-warning"
      >
        Teste teis
      </button>
    </div>
  );
}

export default Teste2;
