import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function MenuGeral() {
  return (
    <div>
      <nav>
        <Link to="helloworld" className="btn btn-bg-dark">
          helloworld
        </Link>
        <Link to="menu-testes" className="btn btn-info">
          Testes
        </Link>
        <Link to="menu-desafios" className="btn btn-info">
          desafios
        </Link>
        <Link to="/" className="btn btn-info">
          *
        </Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default MenuGeral;
