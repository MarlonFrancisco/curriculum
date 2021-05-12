import { ContextBlock } from '@/presentation/components';

import * as S from './style';

const Introduction = () => {
	return (
		<S.Container id="intro">
			<ContextBlock title="INTRODUÇÃO" subtitle="Sobre mim." bg="thirty" />

			<S.Content>
				<S.Paragraph>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aaliquet
					nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
					sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
					mollis. Ut justo. Suspendisse potenti. Nulla vitae mauris non felis mollis faucibus.
				</S.Paragraph>

				<S.Paragraph>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aaliquet
					nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
					sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
					mollis. Ut justo. Suspendisse potenti. Nulla vitae mauris non felis mollis faucibus.
				</S.Paragraph>
			</S.Content>
		</S.Container>
	);
};

export default Introduction;
