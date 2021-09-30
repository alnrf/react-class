import React from "react";
import "./newParticipant.css";

function NewParticipant() {
  return (
    <div className="partContainer">
      <div className="partHeader">
        <div className="partTitle">
          <span>Cadastrar novo participante</span>
        </div>
      </div>
      <div className="partContent">
        <div className="partWrapLine">
          <span className="label">Nome:</span>
          <input type="text" />
        </div>
        <div className="partWrapLine">
          <span className="label">Email:</span>
          <input type="text" />
        </div>
        <div className="partWrapLine">
          <span className="label">CPF:</span>
          <input type="number" />
        </div>
        <div className="partWrapLine">
          <span className="label">Status:</span>
          <input type="checkbox" id="active" />
          <label htmlFor="active">Ativo</label>

          <input type="checkbox" id="inactive" />
          <label htmlFor="inactive">Inativo</label>
        </div>
        <div className="partWrapLine">
          <span className="label">Tipo:</span>
          <input type="checkbox" id="participant" />
          <label htmlFor="participant">Participante</label>

          <input type="checkbox" id="user" />
          <label htmlFor="user">Usuário</label>

          <input type="checkbox" id="client" />
          <label htmlFor="client">Cliente</label>
        </div>
        <div className="partWrapLine">
          <input type="button" value="Salvar" />
        </div>
      </div>
    </div>
  );
}

export default NewParticipant;
