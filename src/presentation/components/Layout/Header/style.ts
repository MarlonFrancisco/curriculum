import styled from "styled-components";

export const Menu = styled.nav`
  ul {
    text-align: right;
  }

  li {
    display: inline-block;
    margin-left: 13.5px;
    text-transform: uppercase;

    a {
      color: ${(props) => props.theme.colors.text.primary};
      text-decoration: none;
    }
  }
`;
