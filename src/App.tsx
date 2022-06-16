import React, { useState } from "react";
import "./App.css";
import { loops } from "./assets/index";
import { AudioCard } from "./AudioCard/AudioCard";
function App() {
  const [playAll, setPlayAll] = useState<number[]>([]);
  const allItems = loops.map((_, i) => i);
  return (
    <div className="App">
      <div className="controls">
        <button
          className="play-button"
          onClick={() =>
            playAll.length > 0 ? setPlayAll([]) : setPlayAll(allItems)
          }
        >
          {`${playAll.length > 0 ? "Pause all" : "Play all"}`}
        </button>
      </div>
      <div className="cards">
        {loops.map((loop, i) => (
          <AudioCard id={i} src={loop} key={i} playAll={playAll} />
        ))}
      </div>
    </div>
  );
}

export default App;
