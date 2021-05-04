import * as S from "./style";

const Header = () => {
  return (
    <S.Menu>
      <ul>
        <li>
          <a href="#intro">Introdução</a>
        </li>
        <li>
          <a href="#exp">Experiência</a>
        </li>
        <li>
          <a href="#skills">Conhecimentos</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </S.Menu>
  );
};

export default Header;
