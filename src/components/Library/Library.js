import React from "react";
import { LibrarySong } from "../LibrarySong/LibrarySong";
import { Wrapper } from "./Library.styles";

export const Library = ({
  songs,
  setCurrentSong,
  currentSong,
  libraryStatus,
}) => {
  return (
    <Wrapper className={libraryStatus ? "active" : ""}>
      <h2>Library</h2>
      <div>
        {songs.map((song) => (
          <LibrarySong
            setCurrentSong={setCurrentSong}
            song={song}
            key={song.id}
            currentSong={currentSong}
          />
        ))}
      </div>
    </Wrapper>
  );
};
