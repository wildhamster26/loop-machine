import React, { useState } from "react";
import "./App.css";
import { loops } from "./assets/index";
import { AudioCard } from "./AudioCard/AudioCard";
function App() {
  //! continue from here. Add the Queue functionality

  const [playAll, setPlayAll] = useState<boolean>(false);
  return (
    <div className="App">
      <div className="controls">
        <button className="play-button" onClick={() => setPlayAll(!playAll)}>
          {`${playAll ? "Pause all" : "Play all"}`}
        </button>
      </div>
      <div className="cards">
        {loops.map((loop, i) => (
          <AudioCard src={loop} key={i} playAll={playAll} />
        ))}
      </div>
    </div>
  );
}

export default App;
