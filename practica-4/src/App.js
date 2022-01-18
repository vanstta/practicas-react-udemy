import React from "react";
import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import User from "./components/User";

function App() {

  return (
      <Router>
        <div className="container">
         <div className="btn-group">
          <Link to="/" className="btn btn-dark mt-5">
            Inicio
          </Link>
          <Link to="/contacto" className="btn btn-dark mt-5 mx-2 active" >
            Contacto
          </Link>
          <NavLink to="/nosotros" className="btn btn-dark mt-5" activeClassName="active">
            Nosotros
          </NavLink>
         </div>
          
          <hr/>
          <Switch>
          <Route path="/nosotros/:id">
             <User/>
            </Route>
            <Route path="/contacto">
              <Contacto/>
            </Route>
            <Route path="/nosotros">
              <Nosotros/>
              </Route>
            <Route path="/">
              <Inicio/>
            </Route>
          </Switch>
        </div>
  </Router>

  );
}

export default App;
