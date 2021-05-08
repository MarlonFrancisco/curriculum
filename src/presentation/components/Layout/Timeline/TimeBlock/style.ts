import { mediaMD } from '@/presentation/shared/style/media';
import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 0% 25% 75%;
	overflow-y: hidden;

	${mediaMD`
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
  `}
`;

export const Point = styled.div`
	background: ${props => props.theme.colors.primary};
	width: 20px;
	height: 20px;
	border-radius: 50%;
`;

export const Line = styled.div`
	transform: rotate(90deg);
	background: ${props => props.theme.colors.border};
	border-color: ${props => props.theme.colors.border};
	width: 150px;
	height: 1px;
`;

export const PointLine = styled.div`
	position: relative;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		background: ${props => props.theme.colors.primary};
		width: 10px;
		height: 10px;
		border-radius: 50%;
	}

	&::after {
		content: '';
		position: absolute;
		top: 215px;
		left: -195px;
		transform: rotate(90deg);
		background: ${props => props.theme.colors.border};
		border-color: ${props => props.theme.colors.border};
		width: 400px;
		height: 1px;

		${mediaMD`
      display: none;
    `}
	}
`;

export const InfoContainer = styled.div`
	margin-left: 35px;
`;

export const Info = styled.p`
	font-size: 14px;
	color: ${props => props.theme.colors.text.primary};

	p + & {
		margin-top: 10px;
	}
`;

export const Company = styled.p`
	font-size: 24px;
	color: ${props => props.theme.colors.text.primary};
	margin-top: 13px;
`;

export const Paragraph = styled.p`
	font-size: 18px;
	color: ${props => props.theme.colors.text.primary};
	border-color: ${props => props.theme.colors.border};
	margin-left: 100px;

	${mediaMD`
    margin-left: 0;
    margin-top: 20px;
    border-bottom: 1px solid;
    padding-bottom: 35px;
  `}
`;
