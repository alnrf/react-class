import React from "react";
import "./postalCode.css";

function PostalCode() {
  return (
    <div className="postalContainer">
      <div className="header">
        <div className="title">
          <h2>Pesquisa de CEP</h2>
        </div>
        <div className="search">
          <input type="text" />
          <input type="button" value="buscar" style={{ marginLeft: "8px" }} />
        </div>
      </div>
      <div className="content">
        <div className="title">
          <span>Resultado:</span>
        </div>
        <div className="result">
          <div className="wrapLine">
            <span className="label">CEP:</span>
            <span className="text">81320-180</span>
          </div>
          <div className="wrapLine">
            <span className="label">Logradouro:</span>
            <span className="text">Rua 123</span>
          </div>
          <div className="wrapLine">
            <span className="label">Bairro:</span>
            <span className="text">Vila 123</span>
          </div>
          <div className="wrapLine">
            <span className="label">Cidade:</span>
            <span className="text">Curitiba</span>
          </div>
          <div className="wrapLine">
            <span className="label">Estado:</span>
            <span className="text">PR</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostalCode;
