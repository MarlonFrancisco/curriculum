import { FC } from 'react';

import TimeBlock from './TimeBlock';

import * as S from './style';

type TEvent = {
	period: string;
	company: string;
	office: string;
	children: string;
};

type TProps = {
	events: TEvent[];
};

const Timeline: FC<TProps> = ({ events }) => {
	return (
		<>
			{events.map(events => (
				<S.Wrapper key={events.company}>
					<TimeBlock {...events} />
				</S.Wrapper>
			))}
		</>
	);
};

export default Timeline;
