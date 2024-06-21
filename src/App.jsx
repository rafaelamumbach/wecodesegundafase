import React from "react";
import "./App.scss";
import logo from "./imgs/Logo.png";
import produtos from "./imgs/Produtos.png";
import lancamentos from "./imgs/Lancamentos.png";
import outlet from "./imgs/Outlet.png";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="hd1">Você está em:</h1>
        <h1 className="localizacao">São Paulo</h1>
        <h1 className="alterar">Alterar</h1>
      </header>
      <div className="opcoes">
        <img src={logo} alt="Logo Bebece" className="logo" />
        <img src={produtos} alt="Produtos" className="produtos" />
        <img src={lancamentos} alt="Lancamentos" className="lancamentos" />
        <img src={outlet} alt="Outlet" className="outlet" />
      </div>
    </div>
  );
}

export default App;

