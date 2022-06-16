import React, { useRef, useState, useEffect } from "react";

export const AudioCard: React.FC<Props> = ({
  id,
  src,
  itemsToPlay,
  setItemsToPlay,
  queue,
  setQueue,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (ref.current) {
      if (itemsToPlay.length > 0 && !itemsToPlay.includes(id)) {
        setQueue((prev) => [...prev, id]);
        return;
      } else {
        if (isPlaying) {
          const filtered = itemsToPlay.filter((item) => item !== id);
          setItemsToPlay(filtered);
        } else {
          setItemsToPlay([id]);
        }
      }
    }
  };

  useEffect(() => {
    if (ref.current) {
      if (itemsToPlay.includes(id)) {
        ref.current.play();
        setIsPlaying(true);
      } else {
        ref.current.pause();
        setIsPlaying(false);
      }
    }
  }, [itemsToPlay, id]);

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
        onEnded={() => {
          setItemsToPlay((prev) => [...prev, ...queue]);
          setQueue([]);
          setIsPlaying(true);
        }}
      />
    </div>
  );
};

interface Props {
  id: number;
  src: any;
  itemsToPlay: number[];
  setItemsToPlay: React.Dispatch<React.SetStateAction<number[]>>;
  queue: number[];
  setQueue: React.Dispatch<React.SetStateAction<number[]>>;
}
