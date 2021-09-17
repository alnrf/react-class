import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sideComponent">
      <div className="menuList">
        <div className="menuItem">
          <a href="/">CEP</a>
        </div>
        <div className="menuItem">
          <a href="/">Cadastrar Participante</a>
        </div>
        <div className="menuItem">
          <a href="/">Listar Participantes</a>
        </div>
        <div className="menuItem">
          <a href="/">Buscar Participante</a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
