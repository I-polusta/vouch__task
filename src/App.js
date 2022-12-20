import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Login/Login";
import Sidebar from "./Components/Sidebar/Sidebar";
import AddClients_Page from "./Pages/AddClients_page";
import View_ClientPage from "./Pages/View_ClientPage";
import FinishModal from "./Components/Add Clients/FinishModal";
import Clients_successPage from "./Pages/Clients_successPage";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route
            exact
            path="/view_clients"
            element={<View_ClientPage />}
          ></Route>
          <Route
            exact
            path="/add_clients"
            element={<AddClients_Page />}
          ></Route>
          <Route
            exact
            path="/addClients/success"
            element={<Clients_successPage />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
