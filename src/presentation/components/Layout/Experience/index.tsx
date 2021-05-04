import { ContextBlock, Timeline } from "@/presentation/components";

import * as S from "./style";

const Experience = () => {
  return (
    <S.Container>
      <ContextBlock
        title="EXPERIÊNCIA"
        subtitle="Codei por ai rs."
        bg="primary"
      />
      <S.Content>
        <Timeline />
      </S.Content>
    </S.Container>
  );
};

export default Experience;
