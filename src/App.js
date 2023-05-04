import React,{Component} from "react";
import "./styles/App.css";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/Images.css"

import Profile from "./components/home_compraventa";
import AddCompra from "./components/add-compraventa.component";
import CompraList from "./components/compraventa-list.component";


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/home" className="navbar-brand">
            Home
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/ventas"} className="nav-link">
                Ver Ventas
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"add"} className="nav-link">
                Añadir nueva venta
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <h1>Compra Ventas UV</h1>
          <Routes>
            <Route path="home" element={<Profile/>}/>
            <Route path="/ventas" element={<CompraList />} />
            <Route path="add" element={<AddCompra />} />
          </Routes>

    
        </div>
      </div>
    );
  }
}

export default App;