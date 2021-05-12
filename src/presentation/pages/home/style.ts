import styled from 'styled-components';
import { mediaMD } from '@/presentation/shared/style/media';

export const Container = styled.div`
	height: 100%;
	display: grid;
  grid-template-rows: 100%;

	${mediaMD`
    grid-template-rows: 150%;
  `}
`;
