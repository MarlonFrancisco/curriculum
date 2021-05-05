import styled from "styled-components";

export const Button = styled.button`
  position: absolute;
  bottom: 40px;
  right: 60px;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background: ${(props) => props.theme.colors.bg.thirty};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px 7px rgb(0 0 0 / 20%);

  img {
    width: 30px;
  }
`;
