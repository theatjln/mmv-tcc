import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";

const Audio = ({ src }) => {
  const router = useRouter();
  const textColor =
    router.pathname === "/blog/[slug]" ? "text-blueGray-700" : "text-indigo-800";

  const player = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const iconStyle = `fas ${
    isPlaying ? "fa-pause" : "fa-music"
  } absolute ${textColor} cursor-pointer`;

  const playSong = () => {
    player.current.play();
    setIsPlaying(true);
  };
  const pauseSong = () => {
    player.current.pause();
    setIsPlaying(false);
  };

  useEffect(() => {
    player.current.src = src;
  }, [src]);

  return (
    <div className="flex ml-6">
      <button className="flex items-center justify-center">
        {isPlaying && <i className={iconStyle} onClick={pauseSong}></i>}
        {!isPlaying && <i className={iconStyle} onClick={playSong}></i>}
      </button>
      <audio loop ref={player}>
        <source type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Audio;
