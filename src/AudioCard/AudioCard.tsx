import React from "react";
import { useAudioCard } from "./hooks/useAudioCard";

export const AudioCard: React.FC<Props> = ({
  id,
  src,
  itemsToPlay,
  setItemsToPlay,
  queue,
  setQueue,
}) => {
  const { data, handle } = useAudioCard(
    id,
    itemsToPlay,
    setItemsToPlay,
    setQueue
  );

  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button onClick={handle.togglePlay} style={{ minWidth: "100px" }}>
          {data.isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      <audio
        ref={data.ref}
        src={src}
        onEnded={() => {
          setItemsToPlay((prev) => [...prev, ...queue]);
          setQueue([]);
          handle.setIsPlaying(true);
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
