import React from "react";
import { useAudioCard } from "./hooks/useAudioCard";
import "./AudioCard.css";

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
      <button onClick={handle.togglePlay}>
        {data.isPlaying ? "Pause" : "Play"}
      </button>
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
