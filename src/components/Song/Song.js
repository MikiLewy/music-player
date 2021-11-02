import React from "react";
import { Wrapper } from "./Song.styles";

export const Song = ({ currentSong }) => {
  return (
    <Wrapper>
      <img alt={currentSong.name} src={currentSong.cover}></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </Wrapper>
  );
};
