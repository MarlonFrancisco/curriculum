import * as S from "./style";

type TProps = {
  sizeFirst: number;
  sizeLast: number;
};

const Name: React.FC<TProps> = ({ sizeFirst, sizeLast }) => {
  return (
    <>
      <S.FirstName size={sizeFirst}>Marlon</S.FirstName>
      <S.LastName size={sizeLast}>Francisco</S.LastName>
    </>
  );
};

export default Name;
