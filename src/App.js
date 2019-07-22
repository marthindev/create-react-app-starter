import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [planets, setPlanets] = useState({});

  async function fetchData() {
    const res = await fetch("https://swapi.co/api/planets/4/");
    res.json().then(res => setPlanets(res));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>{JSON.stringify(planets)}</div>
    </div>
  );
}

export default App;
