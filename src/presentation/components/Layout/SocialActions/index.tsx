import { Image } from "@/presentation/components";

import * as S from "./style";

const SocialActions = () => {
  return (
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
  );
};

export default SocialActions;
