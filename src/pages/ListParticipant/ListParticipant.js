import React from "react";
import "./listParticipant.css";
import users from "../../utils/mocks/users.json";

function ListParticipant() {
  return (
    <div className="listContainer">
      <div className="header">
        <div className="title">
          <span>Lista de Participantes</span>
        </div>
      </div>
      <div className="listContent">
        {users.map((item) => (
          <div className="resultCard" key={item._id}>
            <div className="wrapLine">
              <span className="label">ID:</span>
              <span className="text">{item._id}</span>
            </div>
            <div className="wrapLine">
              <span className="label">Nome:</span>
              <span className="text">{item.name}</span>
            </div>
            <div className="wrapLine">
              <span className="label">Email:</span>
              <span className="text">{item.email}</span>
            </div>
            <div className="wrapLine">
              <span className="label">CPF:</span>
              <span className="text">{item.CPF}</span>
            </div>
            <div className="wrapLine">
              <span className="label">Status:</span>
              <span className="text">{item.status}</span>
            </div>
            <div className="wrapLine">
              <span className="label">Tipo:</span>
              <span className="text">{item.type}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListParticipant;
