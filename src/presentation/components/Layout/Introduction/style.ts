import styled from "styled-components";

import { mediaSM } from "@/presentation/shared/style/media";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 25% auto;
`;

export const Content = styled.article`
  background: ${(props) => props.theme.colors.bg.primary};

  padding: 42px 55px;

  ${mediaSM`
    padding: 20px 30px;
  `}
`;

export const Paragraph = styled.p`
  font-size: 24px;
  color: ${(props) => props.theme.colors.text.primary};

  p + & {
    margin-top: 30px;
  }
`;
