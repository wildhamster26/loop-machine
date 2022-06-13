import React, { useRef } from "react";
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
  const loop1Ref = useRef<HTMLAudioElement | null>(null);
  const loop2Ref = useRef<HTMLAudioElement | null>(null);
  const loop3Ref = useRef<HTMLAudioElement | null>(null);
  const loop4Ref = useRef<HTMLAudioElement | null>(null);
  const loop5Ref = useRef<HTMLAudioElement | null>(null);
  const loop6Ref = useRef<HTMLAudioElement | null>(null);
  const loop7Ref = useRef<HTMLAudioElement | null>(null);
  const loop8Ref = useRef<HTMLAudioElement | null>(null);
  const loop9Ref = useRef<HTMLAudioElement | null>(null);

  const playAll = () => {
    if (
      loop1Ref.current &&
      loop2Ref.current &&
      loop3Ref.current &&
      loop4Ref.current &&
      loop5Ref.current &&
      loop6Ref.current &&
      loop7Ref.current &&
      loop8Ref.current &&
      loop9Ref.current
    ) {
      loop1Ref.current.play();
      loop2Ref.current.play();
      loop3Ref.current.play();
      loop4Ref.current.play();
      loop5Ref.current.play();
      loop6Ref.current.play();
      loop7Ref.current.play();
      loop8Ref.current.play();
      loop9Ref.current.play();
    }
  };

  const pauseAll = () => {
    if (
      loop1Ref.current &&
      loop2Ref.current &&
      loop3Ref.current &&
      loop4Ref.current &&
      loop5Ref.current &&
      loop6Ref.current &&
      loop7Ref.current &&
      loop8Ref.current &&
      loop9Ref.current
    ) {
      loop1Ref.current.pause();
      loop2Ref.current.pause();
      loop3Ref.current.pause();
      loop4Ref.current.pause();
      loop5Ref.current.pause();
      loop6Ref.current.pause();
      loop7Ref.current.pause();
      loop8Ref.current.pause();
      loop9Ref.current.pause();
    }
  };

  return (
    <div className="App">
      <div className="controls">
        <button className="play-button" onClick={playAll}>
          Play all
        </button>
        <button onClick={pauseAll}>Stop all</button>
      </div>
      <div className="cards">
        <div className="card">
          Loop 1<audio ref={loop1Ref} controls src={loop1} />
        </div>
        <div className="card">
          Loop 2<audio ref={loop2Ref} controls src={loop2} />
        </div>
        <div className="card">
          Loop 3<audio ref={loop3Ref} controls src={loop3} />
        </div>
        <div className="card">
          Loop 4<audio ref={loop4Ref} controls src={loop4} />
        </div>
        <div className="card">
          Loop 5<audio ref={loop5Ref} controls src={loop5} />
        </div>
        <div className="card">
          Loop 6<audio ref={loop6Ref} controls src={loop6} />
        </div>
        <div className="card">
          Loop 7<audio ref={loop7Ref} controls src={loop7} />
        </div>
        <div className="card">
          Loop 8<audio ref={loop8Ref} controls src={loop8} />
        </div>
        <div className="card">
          Loop 9<audio ref={loop9Ref} controls src={loop9} />
        </div>
      </div>
    </div>
  );
}

export default App;
