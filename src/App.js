import React, { useState } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Song } from "./components/Song/Song";
import { Player } from "./components/Player/Player";
import data from "./data";

function App() {
  const [songs, setSongs] = useState(data());
  return (
    <div className="App">
      <GlobalStyles />
      <Song />
      <Player />
    </div>
  );
}

export default App;
