import styled from "styled-components";

export const LibrarySongs = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: background 0.3s ease;
  img {
    width: 40%;
  }
  &:hover {
    background: #f7f0fd;
  }
`;
export const SongDescription = styled.div`
  padding-left: 1rem;
  h3 {
    font-size: 1rem;
  }
  h4 {
    font-size: 0.7rem;
  }
`;
