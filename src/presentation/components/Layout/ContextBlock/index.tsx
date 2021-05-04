import { FC } from "react";
import * as S from "./style";

type TProps = {
  title: string;
  subtitle: string;
  bg: "primary" | "secondary" | "thirty";
};

const ContextBlock: FC<TProps> = ({ title, subtitle, bg }) => {
  return (
    <S.Container bg={bg}>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
    </S.Container>
  );
};

export default ContextBlock;
