import React from "react";
import "./navbar.css";
import logo from "../../assets/DataCuboNet.png";
import avatar from "../../assets/avatar.jpg";

function Navbar() {
  return (
    <div className="navContainer">
      <div className="logo">
        <img src={logo} alt="Logotipo" />
      </div>
      <div className="rightWrap">
        <div className="navLinks">
          <span onClick={() => alert("Vai chamar a home")}>Home</span>
          <span onClick={() => alert("Vai mostrar quando nao estiver logado")}>
            Login
          </span>
          <span onClick={() => alert("Vai mostrar quando estiver logado")}>
            Logout
          </span>
        </div>
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
