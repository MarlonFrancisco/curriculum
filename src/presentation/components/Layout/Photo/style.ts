import styled from "styled-components";

export const Container = styled.div`
  padding: 3px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  &,
  & > img {
    border-radius: 50%;
  }
`;

export const Image = styled.img<{ maxWidth: number; maxHeight: number }>`
  width: 100%;
  height: 100%;
  max-width: ${(props) => `${props.maxWidth}px`};
  max-height: ${(props) => `${props.maxHeight}px`};
  object-fit: cover;
  object-position: top center;
`;
