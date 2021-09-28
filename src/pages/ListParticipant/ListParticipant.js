import React from "react";
import "./listParticipant.css";

function ListParticipant() {
  return (
    <div className="listContainer">
      <div className="header">
        <div className="title">
          <span>Lista de Participantes</span>
        </div>
      </div>
      <div className="listContent">
        <div className="resultCard">
          <div className="wrapLine">
            <span className="label">ID:</span>
            <span className="text">81320-180</span>
          </div>
          <div className="wrapLine">
            <span className="label">Nome:</span>
            <span className="text">Rua 123</span>
          </div>
          <div className="wrapLine">
            <span className="label">CPF:</span>
            <span className="text">Vila 123</span>
          </div>
          <div className="wrapLine">
            <span className="label">Status:</span>
            <span className="text">Curitiba</span>
          </div>
          <div className="wrapLine">
            <span className="label">Tipo:</span>
            <span className="text">PR</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListParticipant;
