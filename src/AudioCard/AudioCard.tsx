import React, { useRef, useState, useEffect } from "react";

export const AudioCard: React.FC<Props> = ({ id, src, playAll }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (ref.current) {
      // if (!standby?.includes(id)) {
      //   console.log("adding to standby list:", id);
      //   setStandby((prev) => [...prev, id]);
      //   return;
      // }
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
      if (playAll.includes(id)) {
        ref.current.play();
        setIsPlaying(true);
      } else {
        ref.current.pause();
        setIsPlaying(false);
      }
    }
  }, [playAll, id]);

  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button onClick={togglePlay} style={{ minWidth: "100px" }}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      <audio
        ref={ref}
        src={src}
        // loop={true}
        onEnded={() => {
          setIsPlaying(true);
          ref.current?.play();
        }}
      />
    </div>
  );
};

interface Props {
  id: number;
  src: any;
  playAll: number[];
}
