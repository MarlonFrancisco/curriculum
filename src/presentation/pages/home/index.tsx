import { Welcome, Introduction, Experience, KnowLedge, Contact, Education } from '@/presentation/components';

import * as S from './style';

const Home = () => {
	return (
		<S.Container>
			<Welcome />
			<Introduction />
			<Experience />
			<KnowLedge />
			<Education />
			<Contact />
		</S.Container>
	);
};

export default Home;
