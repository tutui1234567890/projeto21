import React, { useEffect } from 'react';
import {useState} from 'react';



function Desafio5(){

  const [qtdCjs, setQtdCjs] = useState(0);
  const [upg, forcaupg] = useState(1);
  const [conquista, setconquista] = useState('')

  useEffect(() =>{
    if (qtdCjs < 10){
      setconquista('sem conquistas liberadas')
    }
    else if (qtdCjs < 50){
      setconquista('você começou a bater nele🏏')
    }
    else if (qtdCjs < 100){
      setconquista('você começou a matar eles⚔️')
    }
    else if (qtdCjs < 1000){
      setconquista('oque eles fizeram pra voce❓')
    }
    else if (qtdCjs < 10000){
      setconquista('vale a pena fazer isso❓❓')
    }
    else if (qtdCjs < 100000){
      setconquista('quem é você❓❓❓')
    }
    else if (qtdCjs < 1000000){
      setconquista('oque é você❓❓❓❓')
    }
    else if (qtdCjs < 10000000){
      setconquista('não continue...')
    }
    else if (qtdCjs < 100000000){
      setconquista('cada ação tem uma consequencia....')
    }
    else if (qtdCjs < 1000000000){
      setconquista('mas parece q você não me escuta.....')
    }
    
  }, [qtdCjs])
  
  
  return (
    <div>
      <div className="text-center card p-4"> 
        <h1 className="fst-italic fw-bolder text-secondary">CJ clicker</h1>
        <button onClick ={() => setQtdCjs (qtdCjs + upg)} className="bg-transparent border-0">
        <img src="https://64.media.tumblr.com/dd43be97c40a47431ff90e1fd5219aad/tumblr_pml7e1FHZH1wxf0mk_1280.jpg" alt="" width="300px"/>
        </button>
        <div classname="card p-4 shadow mb-4">
          <h3 className="fst-italic fw-lighter">cjs clicados: {qtdCjs}</h3>
          <h4>🏆upgrades maneiros dms🏆</h4>
          {qtdCjs >= 1000 && <button className="btn-outline-primary btn-danger" onClick ={() => {forcaupg(upg * 2); setQtdCjs(qtdCjs - 200)}} > 2x pontos </button>} 
          {qtdCjs >= 10000 && <button className="btn-outline-primary btn-danger" onClick ={() => {forcaupg(upg * 4); setQtdCjs(qtdCjs - 2000)}} > 4x pontos </button>}
          {qtdCjs >= 100000 && <button className="btn-outline-primary btn-danger" onClick ={() => {forcaupg(upg * 8); setQtdCjs(qtdCjs - 20000)}} > 8x pontos </button>}
          {qtdCjs >= 200000 && <button className="btn-outline-primary btn-danger" onClick ={() => {forcaupg(upg * 100); setQtdCjs(qtdCjs - 20000)}} > 100x pontos </button>}
        </div> 
        <div classname="card p-4 shadow mb-4"> 
          <h2>conquistas</h2>
          <h3>ultima conquista--{conquista}</h3>
          {qtdCjs >= 100 &&<h3>👀🗡️vc matou 100🗡️👀</h3>} 
          {qtdCjs >= 1000 &&<h3>👀🗡️vc matou 1000🗡️👀</h3>} 
          {qtdCjs >= 10000 &&<h3>👀🗡️vc matou 10000🗡️👀</h3>} 
          {qtdCjs >= 100000 &&<h3>👀🗡️vc matou 100000🗡️👀</h3>} 
          {qtdCjs >= 1000000 &&<h3>👀🗡️vc matou 1000000🗡️👀</h3>} 
          {qtdCjs >= 10000000 &&<h3>👀🗡️vc matou 10000000🗡️👀</h3>} 
          {qtdCjs >= 100000000 &&<h3>👀🗡️vc matou 100000000🗡️👀</h3>} 
          {qtdCjs >= 1000000000 &&<h3>👀🗡️vc matou 10000000000🗡️👀</h3>} 
          {qtdCjs >= 10000000000 &&<h3>👀🗡️vc matou 100000000000🗡️👀</h3>} 
          {qtdCjs >= 100000000000 &&<h3>👀🗡️vc matou 1000000000000🗡️👀</h3>} 
          {qtdCjs >= 1000000000000 &&<h3>👀🗡️vc matou 10000000000000🗡️👀</h3>} 
          {qtdCjs >= 10000000000000 &&<h3>👀🗡️vc matou 100000000000000🗡️👀</h3>} 
          {qtdCjs >= 100000000000000 &&<h3>👀🗡️vc matou 1000000000000000🗡️👀</h3>} 
          {qtdCjs >= 8990000000000000 &&<h3>👀🗡️vc pegou a conquista final, parabéns🗡️👀</h3>} 
        </div> 
      
        

        


      </div>

    </div>
    
    
  );
  
}

export default Desafio5;