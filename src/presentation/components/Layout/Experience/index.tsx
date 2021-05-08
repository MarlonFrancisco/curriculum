import { ContextBlock, Timeline } from '@/presentation/components';

import * as S from './style';

const experiences = [
	{
		period: '09/2020 - Atualmente',
		company: 'WEBMOTORS',
		office: 'Front-end developer',
		children: `Responsável por definir as melhores práticas de desenvolvimento de front-end, escolha de frameworks
		 e iniciativas para melhoria da nossa base de código. Identificar riscos, trabalhar junto com o time na 
		 discussão das histórias até definirmos a melhor solução de negócio e técnica. 
		 Trabalho muito próximo ao UX na construção da melhor experiência para nosso usuário.
         Buscando ser decisivo e incisivo nas discussões sempre dando pitaco no que acredita ser o melhor
	 	 caminho ou a melhor solução, meu foco é a engenharia de front-end.Na webmotors tenho contato com React, Next.js, 
		 Typescript, Webpack, TDD, CSS in JS, Folhas de estilo css e suas vertentes sass/scss, Redux e outros...`
	},
	{
		period: '04/2020 - 09/2020',
		company: 'VORTTEX',
		office: 'Front-end developer',
		children: `Atuando no desenvolvimento de projetos em diferentes empresas, conectado e trabalhando com diferentes times de desenvolvimento. Utilizando uma stack de tecnologias consolidadas no mercado, como React, React native, Next.js e sempre conhecendo novas tecnologias e padrões.`
	},
	{
		period: '08/2019 - 03/2020',
		company: 'VTEX',
		office: 'Front-end Intern Developer',
		children: `Integração de ferramentas em diversas plataformas de e-commerce, visando melhorar a experiência do usuário e a conversão da loja. Principal objetivo tendo como estudo e atividades na plataforma VTEX IO. Também participo de projetos secundários para integração de plataformas de e-commerce B2B para o VTEX IO, responsável pelo desenvolvimento de suas Store themes (Estrutura base da interface de um ecommerce VTEX IO). Algumas das tecnologias utilizadas no meu dia a dia: React, Typescript, NodeJS e Graphql`
	},
	{
		period: '04/2019 - 10/2019',
		company: 'BIGGY',
		office: 'Front-end Intern Developer',
		children: `Integração de produtos Biggy em plataformas de e-commerce, visando melhorar a experiência do usuário e a conversão da loja. Desenvolvimento de features em ambiente Angular 5+ e email Marketing. Em meu dia a dia utilizo SASS, NodeJS, Typescript, Angular, template engine EJS, metodologia Scrum, e a convenção BEM.`
	}
];

const Experience = () => {
	return (
		<S.Container id="exp">
			<ContextBlock title="EXPERIÊNCIA" subtitle="Codei por ai rs." bg="primary" />
			<S.Content>
				<Timeline events={experiences} />
			</S.Content>
		</S.Container>
	);
};

export default Experience;
