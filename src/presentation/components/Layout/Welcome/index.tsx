import { Photo, Header, Name, Image, Contact } from "@/presentation/components";

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
            <S.ButtonActions>
              <S.LinkSocialNetwork
                target="_blank"
                href="https://www.linkedin.com/in/marlon-francisco-a8ab2215b/"
              >
                <Image src="/images/linkedin.svg" />
              </S.LinkSocialNetwork>
              <S.LinkSocialNetwork
                target="_blank"
                href="https://github.com/MarlonFrancisco"
              >
                <Image src="/images/github.svg" />
              </S.LinkSocialNetwork>
            </S.ButtonActions>
          </S.DescriptionProfile>
        </div>

        <div>
          <S.HR />

          <Contact />
        </div>
      </S.ProfileContent>
    </S.Container>
  );
};

export default Welcome;
