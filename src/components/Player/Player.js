import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { Wrapper, TimeContainer, PlayerContainer } from "./Player.styles";

export const Player = ({
  currentSong,
  setIsPlaying,
  isPlaying,
  songs,
  setCurrentSong,
}) => {
  const audioRef = useRef(null);
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  const autoPlayHandler = () => {
    if (isPlaying) {
      audioRef.current.play();
    }
  };
  const skipSongHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "backward") {
      setCurrentSong(
        currentIndex === 0 ? songs[songs.length - 1] : songs[currentIndex - 1]
      );
    }
    if (direction === "forward") {
      setCurrentSong(
        currentIndex === songs.length - 1 ? songs[0] : songs[currentIndex + 1]
      );
    }
  };
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  return (
    <Wrapper>
      <TimeContainer>
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration ? songInfo.duration : "0"}
          onChange={dragHandler}
          value={songInfo.currentTime}
          type="range"
        />
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </TimeContainer>
      <PlayerContainer>
        <FontAwesomeIcon
          size="2x"
          icon={faAngleLeft}
          onClick={() => skipSongHandler("backward")}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          size="2x"
          icon={faAngleRight}
          onClick={() => skipSongHandler("forward")}
        />
      </PlayerContainer>
      <audio
        onLoadedData={autoPlayHandler}
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </Wrapper>
  );
};
