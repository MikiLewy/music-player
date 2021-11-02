import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { StyledNav } from "./Nav.styles";
export const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <StyledNav>
      <h1>Waves</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </StyledNav>
  );
};
