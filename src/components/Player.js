import React from "react";

export const Player = () => {
  return (
    <>
      <div className="time-control">
        <p>Start time</p>
        <input type="range" />
        <p>End time</p>
      </div>
      <div className="play-control"></div>
    </>
  );
};
