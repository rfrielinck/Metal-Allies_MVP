import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Components/Main";
import Aboutus from "./Components/Aboutus";

import Buyer from "./Components/Buyer";
import Supplier from "./Components/Supplier";
import Login from "./Components/Login";

import Contact from "./Components/Contact";

import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/Main" component={Main} />
          <Route path="/Aboutus" component={Aboutus} />
          <Route path="/Buyer" component={Buyer} />
          <Route path="/Supplier" component={Supplier} />
          <Route path="/Login" component={Login} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
