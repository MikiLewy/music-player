import styled from "styled-components";

export const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    background: transparent;
    border: 2px solid rgb(65, 65, 65);
    cursor: pointer;
    padding: 0.5rem;
    transition: 0.3s ease;
    @media screen and (max-width: 768px) {
      z-index: 10;
    }
    &:hover {
      background: rgb(65, 65, 65);
      color: white;
    }
  }
`;
