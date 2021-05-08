import { Image } from "@/presentation/components";

import * as S from "./style";

const SocialActions = () => {
  return (
    <S.ButtonActions>
      <S.LinkSocialNetwork
        target="_blank"
        rel="noopener"
        href="https://www.linkedin.com/in/marlon-francisco-a8ab2215b/"
      >
        <Image src="/images/linkedin.svg" alt="Linkedin Marlon Francisco" />
      </S.LinkSocialNetwork>
      <S.LinkSocialNetwork
        target="_blank"
        rel="noopener"
        href="https://github.com/MarlonFrancisco"
      >
        <Image src="/images/github.svg" alt="Github Marlon Francisco" />
      </S.LinkSocialNetwork>
    </S.ButtonActions>
  );
};

export default SocialActions;
