import styled from "styled-components";

export const ButtonActions = styled.div``;

export const LinkSocialNetwork = styled.a`
  width: 56px;
  height: 56px;
  border-radius: ${(props) => props.theme.borderRadius};
  background: ${(props) => props.theme.colors.bg.thirty};
  margin-left: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  img {
    width: 40px;
    height: 40px;
  }
`;
