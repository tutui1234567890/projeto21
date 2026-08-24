import React from 'react';
import {useState} from 'react';

function Teste3() {

    const [numero,setNumero] = useState(0);
    const [mudar, setMudar] = useState(0);


    return(
    <div>
      <h2>testando usestate</h2>
      <input type="number"  onChange={(e) => setMudar(Number(e.target.value))}/><br/>;
      <button onClick={() => setNumero(mudar)}>Mudar numero</button>
      <button onClick={() => setNumero(10)}>mudar para 10</button>
      <button onClick={() => setNumero(numero+mudar)}>adicionar numero</button>
      <button onClick={() => setNumero(numero+1)}>+1</button>
      <button onClick={() => setNumero(numero-1)}>-1</button>
      <button onClick={() => setNumero(numero*2)}>*2</button>
      <p>numero do state: {numero}</p>
      <h2>verificando o useState</h2>
      {numero > 1000 && <p>passou de 1000</p>}
      {numero > 1000000 && setNumero(0)}
    </div>
  );
}

export default Teste3;