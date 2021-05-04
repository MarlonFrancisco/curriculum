import styled from "styled-components";

import { mediaSM } from "@/presentation/shared/style/media";

export const FirstName = styled.p<{ size: number }>`
  font-size: ${(props) => `${props.size}px`};
  color: ${(props) => props.theme.colors.text.primary};

  ${mediaSM`
    font-size: 50px;
  `}
`;

export const LastName = styled.p<{ size: number }>`
  font-size: ${(props) => `${props.size}px`};
  color: ${(props) => props.theme.colors.text.secondary};

  ${mediaSM`
    font-size: 55px;
  `}
`;
