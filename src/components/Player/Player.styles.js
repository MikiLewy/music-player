import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TimeContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  .track {
    width: 100%;
    height: 1rem;
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
  }
  .track .animate-track {
    background: rgb(204, 204, 204);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(0%);
    padding: 1rem;
    pointer-events: none;
  }

  input {
    width: 100%;
    -webkit-appearance: none;
    background: transparent;
    cursor: pointer;
    &[type="range"]:focus {
      outline: none;
    }
    &[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 16px;
      width: 16px;
    }
    &[type="range"]::-moz-range-thumb {
      -webkit-appearance: none;
      height: 16px;
      width: 16px;
    }
  }

  p {
    padding: 1rem;
  }
`;

export const PlayerContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  @media screen and (max-width: 768px) {
    width: 60%;
  }
  svg {
    cursor: pointer;
  }
`;
