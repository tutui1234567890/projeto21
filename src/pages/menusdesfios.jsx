import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function MenusDesafio() {
  return (
    <div>
      <nav>
        <Link to="desafio1" className="btn btn-info">
          REACT
        </Link>
        <Link to="desafio2" className="btn btn-info">
          CRIADOR DE PERFIL
        </Link>
        <Link to="desafio3" className="btn btn-info">
          CRIADOR DE PERFIL COM MAIS COISAS
        </Link>
        <Link to="desafio4" className="btn btn-info">
          CALCULADORAS DIVERSAS
        </Link>
        <Link to="desafio5" className="btn btn-info">
          CLICKER
        </Link>
        <Link to="desafio6" className="btn btn-info">
          desafio6
        </Link>
        <Link to="desafio7" className="btn btn-info">
          pokemon
        </Link>
      
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default MenusDesafio;
