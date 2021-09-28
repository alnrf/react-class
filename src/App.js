import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import PostalCode from "./pages/PostalCode/PostalCode";
import ListParticipant from "./pages/ListParticipant/ListParticipant";

function App() {
  return (
    <div className="container">
      <div className="topo ">
        <Navbar />
      </div>
      <div className="contentContainer">
        <div className="sidebar ">
          <Sidebar />
        </div>
        <div className="conteudo">
          {/* <Home /> */}
          {/* <PostalCode /> */}
          <ListParticipant />
        </div>
      </div>

      <div className="rodape ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
