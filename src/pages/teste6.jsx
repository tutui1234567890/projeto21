import _default from 'eslint-plugin-react-refresh';
import React from 'react';

function Teste6() {

  const[api,setApi] = useState([]);

  useEffect(() => {

    fetch('/teste6.json')
    .then((resposta) => resposta.json())
    .then((dados) => {
      setApi(dados);

    }) 

  }, [])
  
  

  let pessoa = {
    nome: "arthur",
    peso: 50,
    idade: 15,

    apresentar(){alert(`meu nome é ${this.nome}, tenho ${this.idade} e meu peso é ${this.peso}`);}

  }

  let animais = [
    {
      nome:"Gato",
      especie:"Felino",
      imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJy9OhStEeT4fNKHeAMgihTTuTr3PdLdm9Uj5tNckoYA&s=10"
    },
    {
      nome:"Cachorro",
      especie:"Canino",
      imagem:"https://www.pedigree.com.br/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf2401/files/2024-09/conheca-as-racas-de-cachorros-mais-inteligentes-do-mundo_0.jpg"
    },
    {
      nome:"Tartaruga",
      especie:"Reptil",
      imagem:"https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/04/tartaruga-das-galapagos.jpg?w=419&h=283&crop=0"
    }
  ]
  return (
    <div>
      <h2>Classes e Objetos</h2>
      <h3>Objetos</h3>
      <p>Um objeto é um tipo de variável, que possui a capacidade de guardar várias informações que estão relacionadas entre si.</p>
      <p>Um exemplo: Uma pessoa é um objeto. A pessoa pode ter atributos e métodos. Atríbutos são por exemplo: o nome, a idade, um documento, endereço, etc.</p>
      <p>Já métodos são as funções que ele pode realizar. Como por exemplo: Se apresentar.</p>

      <hr/>

      <h4>pessoa</h4>
    <p>nome: {pessoa.nome}</p>
    <p>idade: {pessoa.idade}</p>
    <p>peso: {pessoa.peso}</p>
    <button onClick={() => pessoa.apresentar()}>teste</button>

    <h4>animais</h4>
    <p>animal. {animais[0].nome}</p>
    <p>animal. {animais[0].especie}</p>
    <p><img src={animais[0].imagem} alt="" width="200"/></p>

    <h5>todos os animais</h5>
    {
      animais.map((animal) => (
        <div>
          <p>animal: {animal.nome}</p>
          <p>especie: {animal.especie}</p>
          <p><img src={animal.imagem} alt="" width="200"/></p>
          
        </div>
      ))

    }

    <h5>lista de api q criamos</h5>

    {
      api.map((item) => (
        <div>
          <p>nome: {item.nome}</p>
          <p>nacionalidade: {item.nacionalidade}</p>
          <p><img src={item.imagem} alt="" width="200"/></p>
        </div>

      ))
    }


    </div>
  );
}

export default Teste6;


