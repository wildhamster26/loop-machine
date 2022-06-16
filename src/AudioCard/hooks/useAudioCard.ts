import { useState, useEffect, useRef } from "react";
export const useAudioCard = (
  id: number,
  itemsToPlay: number[],
  setItemsToPlay: React.Dispatch<React.SetStateAction<number[]>>,
  setQueue: React.Dispatch<React.SetStateAction<number[]>>
) => {
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
          ref.current.currentTime = 0;
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
        ref.current.currentTime = 0;
        setIsPlaying(false);
      }
    }
  }, [itemsToPlay, id]);

  return { data: { isPlaying, ref }, handle: { setIsPlaying, togglePlay } };
};
