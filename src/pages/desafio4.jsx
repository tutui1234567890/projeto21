import React from 'react';

function Desafio4() {
  const somando = () => {
    const numero1 = Number(document.getElementById('numero1').value);
    const numero2 = Number(document.getElementById('numero2').value);
    const resultado = document.getElementById('resultado');
    let soma = numero1 + numero2;

    resultado.textContent = `${numero1} + ${numero2} = ${soma}`;
  };

  const media = () => {
    const nota1 = Number(document.getElementById('nota1').value);
    const nota2 = Number(document.getElementById('nota2').value);
    const nota3 = Number(document.getElementById('nota3').value);
    const nota4 = Number(document.getElementById('nota4').value);
    const nota5 = Number(document.getElementById('nota5').value);
    const mediaCorte = Number(document.getElementById('mediaCorte').value);
    const textoMedia = document.getElementById('textoMedia');
    const textoSitucao = document.getElementById('textoSituacao');

    let media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

    if (media > mediaCorte) {
      textoSitucao.textContent = `você passou de ano`;
      textoSitucao.style.backgroundColor = 'green';
    } else if (media == mediaCorte) {
      textoSitucao.textContent = `na media`;
      textoSitucao.style.backgroundColor = 'orange';
    } else {
      textoSitucao.textContent = `você não passou de ano`;
      textoSitucao.style.backgroundColor = 'red';
    }

    textoMedia.textContent = `Sua média final deu: ${media}`;
  };

  const conversao = () => {
    const temperatura = Number(document.getElementById('temperatura').value);
    const grau = document.getElementById('grau').value;
    const textoconversao = document.getElementById('textoconversao');

    let c = temperatura * 1.8 + 32;
    let f = (temperatura - 32) * 1.8;

    if (grau == 'c') {
      textoconversao.textContent = `F: ${f}`;
    } else if (grau == 'f') {
      textoconversao.textContent = `C: ${c}`;
    }
  };

  const imc = () => {
    const peso = Number(document.getElementById('peso').value);
    const altura = Number(document.getElementById('altura').value);
    const resultadoimc = document.getElementById('resultadoimc');
    const grauimc = document.getElementById('grauimc');

    let imc = peso / (altura * altura);
    let situacao = '';

    if (imc <= 18.5) {
      situacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
      situacao = 'Peso normal';
    } else if (imc < 29.9) {
      situacao = 'Sobrepeso';
    } else if (imc < 34.9) {
      situacao = 'Obesidade Grau I';
    } else if (imc < 39.9) {
      situacao = 'Obesidade Grau II';
    } else {
      situacao = 'Obesidade Grau III';
    }

    resultadoimc.textContent = `IMC: ${imc}`;
    grauimc.textContent = situacao;
  };

  return (
    <div>
      <h2>Calculadoras Diversas</h2>

      <div id="somando" className="card text-center w-25 mx-auto">
        <h3>Easy: Somando dois números 😊</h3>
        <input type="number" id="numero1" placeholder="Digite o N1" />
        <input type="number" id="numero2" placeholder="Digite o N2" />
        <br />
        <button onClick={somando}>Calcular</button>
        <p id="resultado" className="lead fs-1"></p>
      </div>

      <div id="transformando" className="card text-center w-25 mx-auto">
        <h3>Hard: conversão de firenheit e celsius</h3>
        <input type="number" id="temperatura" placeholder="digita " />
        <br />
        <select id="grau">
          <option value="c">celsius </option>
          <option value="f">fireheit</option>
        </select>
        <button onClick={conversao}>conversão</button>

        <p id="textoconversao" className="fs-1"></p>
      </div>

      <div id="media" className="card text-center w-25 mx-auto">
        <h3>Calculando a Média Final</h3>
        <input type="number" id="nota1" placeholder="Matemática" />
        <input type="number" id="nota2" placeholder="Geografia" />
        <input type="number" id="nota3" placeholder="Fisica" />
        <input type="number" id="nota4" placeholder="Português" />
        <input
          type="number"
          id="nota5"
          placeholder="Programação do Sor Murilo"
        />
        <br />
        <hr />
        <input type="number" id="mediaCorte" placeholder="Media Corte" />
        <br />
        <button onClick={media}>Calcular Média</button>
        <p id="textoMedia"></p>
        <p id="textoSituacao"></p>
      </div>
      <div id="imc" className="card text-center w-25 mx-auto">
        <h3>imc da pessoa</h3>
        <input type="number" id="peso" placeholder="peso" />
        <input type="number" id="altura" placeholder="altura" />
        <br />
        <button onClick={imc}>Calcular</button>
        <p id="resultadoimc" className="lead fs-1"></p>
        <p id="grauimc" className="lead fs-1"></p>
      </div>
    </div>
  );
}

export default Desafio4;
