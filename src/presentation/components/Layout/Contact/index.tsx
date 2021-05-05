import {
  ContextBlock,
  PersonalData,
  Name,
  SocialActions,
} from "@/presentation/components";

import * as S from "./style";

const Contact = () => {
  return (
    <S.Container>
      <ContextBlock title="Contato" subtitle="Ligue-me." bg="primary" />
      <S.Content>
        <S.HR />
        <PersonalData />

        <S.ContainerActions>
          <SocialActions />
        </S.ContainerActions>
        <Name sizeFirst={36} sizeLast={48} />
      </S.Content>
    </S.Container>
  );
};

export default Contact;
