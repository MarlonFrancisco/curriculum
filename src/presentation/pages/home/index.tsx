import { Welcome, Introduction } from "@/presentation/components";

import * as S from "./style";

const Home = () => {
  return (
    <S.Container>
      <Welcome />
      <Introduction />
    </S.Container>
  );
};

export default Home;
