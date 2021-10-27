import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Song } from "./components/Song";
import { Player } from "./components/Player";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Song />
      <Player />
    </div>
  );
}

export default App;
