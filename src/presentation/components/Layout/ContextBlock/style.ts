import styled from "styled-components";

export const Container = styled.aside<{
  bg: "primary" | "secondary" | "thirty";
}>`
  background: ${(props) => props.theme.colors.bg[props.bg]};
  padding: 40px 60px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text.primary};
  text-align: right;
`;

export const SubTitle = styled.h2`
  font-size: 24px;
  color: ${(props) => props.theme.colors.text.primary};
  font-weight: 400;
  text-align: right;
  margin-top: 15px;
`;
