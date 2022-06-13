import React from "react";
import "./App.css";
import {
  loop1,
  loop2,
  loop3,
  loop4,
  loop5,
  loop6,
  loop7,
  loop8,
  loop9,
} from "./assets/index";
function App() {
  return (
    <div className="App">
      <div className="controls">
        <button className="play-button">Play all</button>
        <button>Stop all</button>
      </div>
      <div className="cards">
        <div className="card">
          Loop 1<audio controls src={loop1} />
        </div>
        <div className="card">
          Loop 2<audio controls src={loop2} />
        </div>
        <div className="card">
          Loop 3<audio controls src={loop3} />
        </div>
        <div className="card">
          Loop 4<audio controls src={loop4} />
        </div>
        <div className="card">
          Loop 5<audio controls src={loop5} />
        </div>
        <div className="card">
          Loop 6<audio controls src={loop6} />
        </div>
        <div className="card">
          Loop 7<audio controls src={loop7} />
        </div>
        <div className="card">
          Loop 8<audio controls src={loop8} />
        </div>
        <div className="card">
          Loop 9<audio controls src={loop9} />
        </div>
      </div>
    </div>
  );
}

export default App;
