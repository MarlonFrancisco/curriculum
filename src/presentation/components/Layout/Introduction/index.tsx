import { ContextBlock } from "@/presentation/components";

import * as S from "./style";

const Introduction = () => {
  return (
    <S.Container id="#intro">
      <ContextBlock title="INTRODUÇÃO" subtitle="Sobre mim." bg="thirty" />

      <S.Content>
        <S.Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet
          vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
          laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor
          eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Nulla vitae
          mauris non felis mollis faucibus.
        </S.Paragraph>

        <S.Paragraph>
          Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
          luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
          commodo quis, gravida id, est. Sed lectus. Praesent elementum
          hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat,
          lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc
          sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et,
          dapibus sed, urna. Fusce lacinia arcu et nulla. Nulla vitae mauris non
          felis mollis.
        </S.Paragraph>
      </S.Content>
    </S.Container>
  );
};

export default Introduction;
