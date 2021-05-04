import ReactLoader from "react-loader-spinner";

import * as S from "./style";

const Loader = () => {
  return (
    <S.Container>
      <ReactLoader color="#fff" type="RevolvingDot" height={100} width={100} />
    </S.Container>
  );
};

export default Loader;
