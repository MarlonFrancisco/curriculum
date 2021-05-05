import { useContext } from "react";

import ThemeContext from "@/main/contexts/theme";

import * as S from "./style";

const SwitchTheme = () => {
  const { toggleThemeHandler } = useContext(ThemeContext);

  return (
    <S.Button onClick={toggleThemeHandler}>
      <img src="/images/switchtheme.svg" alt="Switch theme" />
    </S.Button>
  );
};

export default SwitchTheme;
