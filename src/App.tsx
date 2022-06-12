import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="controls">
        <button className="play-button">Play all</button>
        <button>Stop all</button>
      </section>
      <section className="cards">
        <div className="card">Loop 1</div>
        <div className="card">Loop 2</div>
        <div className="card">Loop 3</div>
        <div className="card">Loop 4</div>
        <div className="card">Loop 5</div>
        <div className="card">Loop 6</div>
        <div className="card">Loop 7</div>
        <div className="card">Loop 8</div>
        <div className="card">Loop 9</div>
      </section>
    </div>
  );
}

export default App;
