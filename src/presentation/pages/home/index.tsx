import { Welcome, Introduction, Experience } from "@/presentation/components";

import * as S from "./style";

const Home = () => {
  return (
    <S.Container>
      <Welcome />
      <Introduction />
      <Experience />
    </S.Container>
  );
};

export default Home;
