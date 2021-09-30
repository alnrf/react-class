import React, { useState } from "react";
import "./searchParticipant.css";

function SearchParicipant() {
  const [showResult, setShowResult] = useState(false);
  return (
    <div className="searchContainer">
      <div className="searchHeader">
        <div className="searchTitle">
          <span>Pesquisa de Participante</span>
        </div>
        <div className="searchBox">
          <input type="text" />
          <input
            type="button"
            value="Buscar"
            style={{ marginLeft: "8px" }}
            onClick={() => setShowResult(true)}
          />
        </div>
      </div>
      {showResult && (
        <div className="searchContent">
          <div className="searchTitle">
            <span>Resultado:</span>
          </div>

          <div className="searchResult">
            <div className="searchWrapLine">
              <span className="searchLabel">ID:</span>
              <span className="searchText">34658712</span>
            </div>
            <div className="searchWrapLine">
              <span className="searchLabel">Nome:</span>
              <span className="searchText">Data Cubo</span>
            </div>
            <div className="searchWrapLine">
              <span className="searchLabel">Email:</span>
              <span className="searchText">datacubo@datacubo.net</span>
            </div>
            <div className="searchWrapLine">
              <span className="searchLabel">CPF:</span>
              <span className="searchText">321.654.987-65</span>
            </div>
            <div className="searchWrapLine">
              <span className="searchLabel">Status:</span>
              <span className="searchText">Inativo</span>
            </div>
            <div className="searchWrapLine">
              <span className="searchLabel">Tipo:</span>
              <span className="searchText">Participante</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchParicipant;
