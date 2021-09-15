import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="container">
      <div className="topo box">
        <Navbar />
      </div>
      <div className="sidebar box">
        <Sidebar />
      </div>
      <div className="conteudo box">Área de Conteúdo</div>
      <div className="rodape rodapeText">Rodapé</div>
    </div>
  );
}

export default App;
