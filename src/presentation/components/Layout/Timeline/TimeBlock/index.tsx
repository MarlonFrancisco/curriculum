import { FC } from "react";

import * as S from "./style";

type TProps = {
  period: string;
  company: string;
  office: string;
};

const TimeBlock: FC<TProps> = ({ period, company, office, children }) => {
  return (
    <S.Container>
      <S.PointLine />

      <S.InfoContainer>
        <S.Info>{period}</S.Info>
        <S.Company>{company}</S.Company>
        <S.Info>{office}</S.Info>
      </S.InfoContainer>

      <S.Paragraph>{children}</S.Paragraph>
    </S.Container>
  );
};

export default TimeBlock;
