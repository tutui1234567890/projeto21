import React from 'react';
import { useState, useEffect } from 'react';

function Teste4() {
  const [numero, setNumero] = useState(0);
  const [estado, setEstado] = useState('');
  const [tempo, setTempo] = useState(0);

  useEffect(() => {
    document.title = `Numero ${numero}`
    if (numero > 0) {
      setEstado('positivo');
    } else if (numero == 0) {
      setEstado('neutro');
    } else {
      setEstado('negativo');
    }
  }, [numero]);

 



  useEffect(() => {
    alert('seja bem vindo ao teste do use effect');
    setInterval(() => {
      setTempo(tempo => tempo + 1);
    },1000);
  }, []);

  return (
    <div>
      <h2>Usando o useEffect</h2>
      <h3>Contador {numero}</h3>
      <h3>Estado {estado}</h3>
      <h3>temporizador {tempo}</h3>
      <button
        onClick={() => {
          setNumero(numero + 1);
        }}
      >
        ++
      </button>
      <button
        onClick={() => {
          setNumero(numero - 1);
        }}
      >
        --
      </button>
    </div>
  );
}

export default Teste4;
