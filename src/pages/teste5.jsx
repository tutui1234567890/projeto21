import React from 'react';
import { useState, useEffect } from 'react';

function Teste5() {
  //JSONPlaceholder
  //API de Post
  const [titulo, setTitulo] = useState('');
  const [corpo, setCorpo] = useState('');
  const [imagem, setImagem] = useState('');
  const [indice, setIndice] = useState(0);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((resposta) => resposta.json())
      .then((post) => {
        setTitulo(post[indice].title);
        setCorpo(post[indice].body);
      });

    fetch('https://randomfox.ca/floof/')
      .then((resposta) => resposta.json())
      .then((post) => {
        setImagem(post.image);
      });
  }, [indice]);

  return (
    <div className="">
      <div className="card">
        <h2>React com APIs</h2>

        <h3>API JSONPlaceholder</h3>
        <h4>Post</h4>
        <h5>Titulo: {titulo}</h5>
        <p>Corpo: {corpo}</p>
        <p className="text-center">
          <img src={imagem} width="500px" alt="" />
        </p>
        <button onClick={() => setIndice(3)}>mudar post</button>
      </div>
    </div>
  );
}

export default Teste5;