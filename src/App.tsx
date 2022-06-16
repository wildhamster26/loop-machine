import React, { useState } from "react";
import "./App.css";
import { loops } from "./assets/index";
import { AudioCard } from "./AudioCard/AudioCard";
function App() {
  const [itemsToPlay, setItemsToPlay] = useState<number[]>([]);
  const [queue, setQueue] = useState<number[]>([]);

  const allItems = loops.map((_, i) => i);
  return (
    <div className="App">
      <div className="controls">
        <button
          className="play-button"
          onClick={() =>
            itemsToPlay.length > 0
              ? setItemsToPlay([])
              : setItemsToPlay(allItems)
          }
        >
          {`${itemsToPlay.length > 0 ? "Pause all" : "Play all"}`}
        </button>
      </div>
      <div className="cards">
        {loops.map((loop, i) => (
          <AudioCard
            id={i}
            src={loop}
            key={i}
            itemsToPlay={itemsToPlay}
            setItemsToPlay={setItemsToPlay}
            queue={queue}
            setQueue={setQueue}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
