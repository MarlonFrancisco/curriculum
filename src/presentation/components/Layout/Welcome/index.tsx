import {
  Photo,
  Header,
  Name,
  SocialActions,
  PersonalData,
} from "@/presentation/components";

import * as S from "./style";

const Welcome = () => {
  return (
    <S.Container>
      <S.PhotoContent>
        <Photo src="/images/foto.jpg" width={250} height={250} />
      </S.PhotoContent>
      <S.ProfileContent>
        <Header />

        <div>
          <Name sizeFirst={64} sizeLast={96} />

          <S.DescriptionProfile>
            <S.Profission>Web developer & Front-end Expert</S.Profission>

            <SocialActions />
          </S.DescriptionProfile>
        </div>

        <div>
          <S.HR />

          <PersonalData />
        </div>
      </S.ProfileContent>
    </S.Container>
  );
};

export default Welcome;
