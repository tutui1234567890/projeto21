import React from 'react';
import Helloworld from './pages/helloworld.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/header.jsx';
import Teste1 from './pages/teste1.jsx';
import Teste2 from './pages/teste2.jsx';
import MenuGeral from './pages/menugeral.jsx';
import MenuTestes from './pages/MENU.teste.jsx';
import MenuDesafio from './pages/menusdesfios.jsx';
import Desafio1 from './pages/desafio1.jsx';
import Desafio2 from './pages/desafio2.jsx';
import Desafio3 from './pages/desafio3.jsx';
import Desafio4 from './pages/desafio4.jsx';
import Desafio5 from './pages/desafio5.jsx';
import Desafio6 from './pages/desafio6.jsx';
import Desafio7 from './pages/desafio7.jsx';
import Teste3 from './pages/teste3.jsx';
import Teste4 from './pages/teste4.jsx';
import Teste5 from './pages/teste5.jsx';
import Teste6 from './pages/teste6.jsx';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <hr />
        <MenuGeral />
        <Routes>
          <Route path="helloworld" element={<Helloworld />} />

          <Route path="menu-testes" element={<MenuTestes />}>
            <Route path="teste1" element={<Teste1 />} />
            <Route path="teste2" element={<Teste2 />} />
            <Route path="teste3" element={<Teste3/>}/>
            <Route path="teste4" element={<Teste4/>}/>
            <Route path="teste5" element={<Teste5/>}/>
            <Route path="teste6" element={<Teste6/>}/>
          </Route>
          <Route path="menu-desafios" element={<MenuDesafio />}>
            <Route path="desafio1" element={<Desafio1 />} />
            <Route path="desafio2" element={<Desafio2 />} />
            <Route path="desafio3" element={<Desafio3 />} />
            <Route path="desafio4" element={<Desafio4 />} />
            <Route path="desafio5" element={<Desafio5 />} />
            <Route path="desafio6" element={<Desafio6 />} />
            <Route path="desafio7" element={<Desafio7 />} />
          </Route>  
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
