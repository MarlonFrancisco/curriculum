import {
  ContextBlock,
  PersonalData,
  Name,
  SocialActions,
} from "@/presentation/components";

import * as S from "./style";

const Contact = () => {
  return (
    <S.Container id="contact">
      <ContextBlock title="Contato" subtitle="Ligue-me." bg="thirty" />
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
