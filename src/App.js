import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Receitas from "./Receitas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Receitas />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          </p>
      </header>
    </div>
  );
}

export default App;
