import { ContextBlock } from '@/presentation/components';

import * as S from './style';

const Introduction = () => {
	return (
		<S.Container id="intro">
			<ContextBlock title="INTRODUÇÃO" subtitle="Sobre mim." bg="thirty" />

			<S.Content>
				<S.Paragraph>
					Meu principal objetivo profissional é buscar cada vez mais conhecimento, apaixonado por conhecer e
					aplicar novas tecnologias no meu dia a dia. Tenho muito a aprender e entendo isso, pois procuro
					sempre a melhor forma de compartilhar meus conhecimentos com quem deseja aprender.
				</S.Paragraph>

				<S.Paragraph>
					Técnico formado em Informática p/Internet(2018) e Desenvolvimento de sistemas(2019) pela ETEC Lauro
					Gomes, apaixonado por aprender novas tecnologias e aplicá-las no meu dia a dia, sempre disposto a
					aprender cada vez mais.
				</S.Paragraph>
			</S.Content>
		</S.Container>
	);
};

export default Introduction;
