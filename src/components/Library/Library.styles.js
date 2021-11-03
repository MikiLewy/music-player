import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 20rem;
  background-color: white;
  box-shadow: 2px 2px 50px rgb(204, 204, 204);
  overflow-y: scroll;
  transform: translateX(-100%);
  transition: 0.5s ease;
  opacity: 0;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  &.active {
    transform: translateX(0);
    opacity: 1;
  }
  h2 {
    padding: 2rem;
  }
`;
