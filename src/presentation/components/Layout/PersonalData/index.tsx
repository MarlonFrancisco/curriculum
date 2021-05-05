import * as S from "./style";

const PersonalData = () => {
  return (
    <S.Responsive>
      <S.Table>
        <thead>
          <tr>
            <th>Localização</th>
            <th>Celular</th>
            <th>E-Mail</th>
            <th>Idade</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>São Bernardo do Campo, SP</td>
            <td>(11) 98233-3981</td>
            <td>marlon.nascimentofr@gmail.com</td>
            <td>19</td>
          </tr>
        </tbody>
      </S.Table>
    </S.Responsive>
  );
};

export default PersonalData;
