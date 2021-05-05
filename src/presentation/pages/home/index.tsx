import {
  Welcome,
  Introduction,
  Experience,
  KnowLedge,
  Contact,
} from "@/presentation/components";

import * as S from "./style";

const Home = () => {
  return (
    <S.Container>
      <Welcome />
      <Introduction />
      <Experience />

      <KnowLedge />

      <Contact />
    </S.Container>
  );
};

export default Home;
