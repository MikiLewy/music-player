import React from "react";
import { LibrarySongs, SongDescription } from "./LibrarySong.styles";
export const LibrarySong = ({ song, setCurrentSong, currentSong }) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
  };
  return (
    <LibrarySongs
      onClick={songSelectHandler}
      className={`${song.id === currentSong.id ? "selected" : null}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <SongDescription>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </SongDescription>
    </LibrarySongs>
  );
};
