import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Wrapper, TimeContainer, PlayerContainer } from "./Player.styles";
export const Player = () => {
  return (
    <Wrapper>
      <TimeContainer>
        <p>Start time</p>
        <input type="range" />
        <p>End time</p>
      </TimeContainer>
      <PlayerContainer>
        <FontAwesomeIcon size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon size="2x" icon={faPlay} />
        <FontAwesomeIcon size="2x" icon={faAngleRight} />
      </PlayerContainer>
    </Wrapper>
  );
};
