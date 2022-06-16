import React, { useRef, useState, useEffect } from "react";

export const AudioCard: React.FC<Props> = ({ src, playAll }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (ref.current) {
      if (isPlaying) {
        ref.current.pause();
      } else {
        ref.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (ref.current) {
      if (playAll === true) {
        ref.current.play();
        setIsPlaying(true);
      } else if (playAll === false) {
        ref.current.pause();
        setIsPlaying(false);
      }
    }
  }, [playAll]);

  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button onClick={togglePlay} style={{ minWidth: "100px" }}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      <audio ref={ref} src={src} loop={true} />
    </div>
  );
};

interface Props {
  src: any;
  playAll: boolean;
}
