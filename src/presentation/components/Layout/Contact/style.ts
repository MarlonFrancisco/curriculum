import styled from "styled-components";

import { mediaMD, mediaSM } from "@/presentation/shared/style/media";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 25% auto;

  ${mediaMD`
    grid-template-columns: 100%;
  `}
`;

export const Content = styled.article`
  background: ${(props) => props.theme.colors.bg.secondary};

  padding: 42px 55px;

  ${mediaSM`
    padding: 20px 30px;
  `}
`;

export const HR = styled.hr`
  background: ${(props) => props.theme.colors.border};
  border-color: ${(props) => props.theme.colors.border};
  margin-bottom: 30px;
`;

export const ContainerActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
`;
