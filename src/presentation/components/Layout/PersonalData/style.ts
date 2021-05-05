import styled from "styled-components";

import { mediaSM } from "@/presentation/shared/style/media";

export const Table = styled.table`
  width: 100%;

  th,
  td {
    text-align: left;
    color: ${(props) => props.theme.colors.text.primary};
  }

  td {
    padding-top: 20px;
  }

  ${mediaSM`
    th, td {  
      padding-right: 30px;
    }
  `}
`;

export const Responsive = styled.div`
  overflow-x: auto;
`;
