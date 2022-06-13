import React from "react";
import "./App.css";
import { loops } from "./assets/index";
import { AudioCard } from "./AudioCard/AudioCard";
function App() {
  return (
    <div className="App">
      {/* <div className="controls">
        <button className="play-button" onClick={playAll}>
          Play all
        </button>
        <button onClick={pauseAll}>Stop all</button>
      </div> */}
      <div className="cards">
        {loops.map((loop, i) => (
          <AudioCard src={loop} key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
