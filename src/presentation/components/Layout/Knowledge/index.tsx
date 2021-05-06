import { ContextBlock } from "@/presentation/components";

import * as S from "./style";

const Knowledge = () => {
  return (
    <S.Container id="skills">
      <ContextBlock
        title="Conhecimentos"
        subtitle="Preguiçoso não está em meu vocabulário, só um pouco."
        bg="thirty"
      />
      <S.Content></S.Content>
    </S.Container>
  );
};

export default Knowledge;
