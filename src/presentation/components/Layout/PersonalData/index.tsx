import * as S from './style';

const PersonalData = () => {
	return (
		// <S.Responsive>
		//   <S.Table>
		//     <thead>
		//       <tr>
		//         <th>Localização</th>
		//         <th>Celular</th>
		//         <th>E-Mail</th>
		//         <th>Idade</th>
		//       </tr>
		//     </thead>

		//     <tbody>
		//       <tr>
		//         <td>São Bernardo do Campo, SP</td>
		//         <td>(11) 98233-3981</td>
		//         <td>marlon.nascimentofr@gmail.com</td>
		//         <td>19</td>
		//       </tr>
		//     </tbody>
		//   </S.Table>
		// </S.Responsive>

		<S.Container>
			<S.Block>
				<S.Title>Localização</S.Title>
				<S.Description>São Bernardo do Campo, SP</S.Description>
			</S.Block>
			<S.Block>
				<S.Title>Celular</S.Title>
				<S.Description>(11) 98233-3981</S.Description>
			</S.Block>
			<S.Block>
				<S.Title>E-Mail</S.Title>
				<S.Description>marlon.nascimentofr@gmail.com</S.Description>
			</S.Block>
			<S.Block>
				<S.Title>Idade</S.Title>
				<S.Description>19</S.Description>
			</S.Block>
		</S.Container>
	);
};

export default PersonalData;
