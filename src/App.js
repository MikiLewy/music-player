import React, { useState } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Song } from "./components/Song/Song";
import { Player } from "./components/Player/Player";
import { Library } from "./components/Library/Library";
import { Nav } from "./components/Nav/Nav";
import data from "./data";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  return (
    <div className="App">
      <GlobalStyles />
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        songs={songs}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
      <Library
        libraryStatus={libraryStatus}
        songs={songs}
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;
