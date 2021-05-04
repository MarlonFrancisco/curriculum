import { mediaSM } from "@/presentation/shared/style/media";
import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 25% auto;
  grid-template-rows: 100%;
  height: 100%;

  ${mediaSM`
    grid-template-columns: 100%;
    grid-template-rows: 100%;
  `}
`;

export const PhotoContent = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.bg.primary};
  height: 100%;
  width: 100%;

  ${mediaSM`
    display: none;
  `}
`;

export const ProfileContent = styled.article`
  background: ${(props) => props.theme.colors.bg.secondary};
  height: 100%;
  width: 100%;
  padding: 42px 55px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  ${mediaSM`
    padding: 20px 30px;
  `}
`;

export const Profission = styled.p`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 24px;
`;

export const DescriptionProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
`;

export const ButtonActions = styled.div``;

export const LinkSocialNetwork = styled.a`
  width: 56px;
  height: 56px;
  border-radius: ${(props) => props.theme.borderRadius};
  background: ${(props) => props.theme.colors.bg.primary};
  margin-left: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  img {
    width: 40px;
    height: 40px;
  }
`;

export const HR = styled.hr`
  background: #767676;
  border-color: #767676;
  margin-bottom: 30px;
`;
