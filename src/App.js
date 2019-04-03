import React, { Component } from "react";
import "./css/style.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Actors from "./components/actors";
import Actress from "./components/actress";
import Films from "./components/films";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar title="Oscars 2019" />
          <Route exact path="/" render={() => <Home title="Oscar Winners" />} />
          <Route path="/actors" render={() => <Actors />} />
          <Route path="/actress" render={() => <Actress />} />
          <Route path="/films" render={() => <Films />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
