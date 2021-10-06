import React from "react";
import "./sidebar.css";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sideComponent">
      <div className="menuList">
        <div className="menuItem">
          <Link to="/cep">CEP</Link>
        </div>
        <div className="menuItem">
          <Link to="/new">Cadastrar Participante</Link>
        </div>
        <div className="menuItem">
          <Link to="/list">Listar Participantes</Link>
        </div>
        <div className="menuItem">
          <Link to="/search">Buscar Participante</Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
