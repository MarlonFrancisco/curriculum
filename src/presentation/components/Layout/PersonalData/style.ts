import styled from 'styled-components';

import { mediaMD, mediaSM } from '@/presentation/shared/style/media';

export const Table = styled.table`
	width: 100%;

	th,
	td {
		text-align: left;
		color: ${props => props.theme.colors.text.primary};
	}

	td {
		padding-top: 20px;
	}

	${mediaSM`
    th, td {  
      padding-right: 30px;
    }
  `}
`;

export const Responsive = styled.div`
	overflow-x: auto;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	${mediaMD`
    flex-direction: column;
  `}
`;

export const Block = styled.div`
	display: flex;
	flex-direction: column;
	border-color: ${props => props.theme.colors.border};

	${mediaMD`
    align-items: center;
    border-top-width: 1px;
    border-top-style: solid;
    padding: 25px 0;

    &:first-child {
      margin-top: -20px;
    }
  `}

	&:first-child {
		border: none;
	}
`;

export const Title = styled.h3`
	font-weight: 700;
	font-size: 16px;
	color: ${props => props.theme.colors.text.primary};
`;

export const Description = styled.p`
	font-size: 16px;
	color: ${props => props.theme.colors.text.primary};
	margin-top: 20px;
`;
