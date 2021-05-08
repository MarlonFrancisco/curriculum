import { useState } from "react";

import * as S from "./style";

type TCacheElements = {
  [x: string]: HTMLElement;
};

const Header = () => {
  const [cacheElements, setCacheElements] = useState<TCacheElements>({});

  const scrollManipulation = (
    top: number,
    left: number,
    behavior: ScrollBehavior = "smooth"
  ) => {
    window.scrollTo({
      behavior,
      top,
      left,
    });
  };

  const goToBlockHandler = (elementId: string) => () => {
    const cachedElement = cacheElements[elementId];

    if (cachedElement) {
      scrollManipulation(cachedElement.offsetTop, cachedElement.offsetLeft);
    } else {
      const element = document.querySelector(elementId) as HTMLElement;

      console.log(element);

      setCacheElements((prev) => ({ ...prev, [elementId]: element }));

      scrollManipulation(element.offsetTop, element.offsetLeft);
    }
  };
  return (
    <S.Menu>
      <ul>
        <li>
          <button onClick={goToBlockHandler("#intro")}>Introdução</button>
        </li>
        <li>
          <button onClick={goToBlockHandler("#exp")}>Experiência</button>
        </li>
        <li>
          <button onClick={goToBlockHandler("#skills")}>Conhecimentos</button>
        </li>
        <li>
          <button onClick={goToBlockHandler("#education")}>Education</button>
        </li>
        <li>
          <button onClick={goToBlockHandler("#contact")}>Contato</button>
        </li>
      </ul>
    </S.Menu>
  );
};

export default Header;
