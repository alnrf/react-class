import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import PostalCode from "./pages/PostalCode/PostalCode";
import ListParticipant from "./pages/ListParticipant/ListParticipant";
import NewParticipant from "./pages/NewParticipant/NewParticipant";
import SearchParicipant from "./pages/SearchParticipant/SearchParicipant";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <div className="topo ">
          <Navbar />
        </div>
        <div className="contentContainer">
          <div className="sidebar ">
            <Sidebar />
          </div>
          <div className="conteudo">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/cep" exact component={PostalCode} />
              <Route path="/list" exact component={ListParticipant} />
              <Route path="/new" exact component={NewParticipant} />
              <Route path="/search" exact component={SearchParicipant} />
            </Switch>
          </div>
        </div>

        <div className="rodape ">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
