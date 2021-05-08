import * as S from './style';

type TProps = {
	src: string;
	width?: number;
	height?: number;
};

const Photo: React.FC<TProps> = ({ width, height, ...rest }) => {
	return (
		<S.Container>
			<S.Image loading="lazy" {...rest} maxWidth={width} maxHeight={height} alt="Foto Marlon Francisco" />
		</S.Container>
	);
};

export default Photo;
