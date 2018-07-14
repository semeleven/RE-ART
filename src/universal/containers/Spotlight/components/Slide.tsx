import React from 'react';

import { Heading, Image } from '../../../components';
import styled from '../../../lib/styled';
import { media } from '../../../lib/styled/theme';

type SlideItem = {
	id: number;
	url: string;
	type?: string;
	title: string;
};

interface Props {
	item: SlideItem;
}

const StyledSlide = styled.div`
	position: absolute;
	bottom: 50px;
	left: 50px;
	${media.mobile`
		bottom: 20px;
		left: 20px;
	`};
`;

const HideOnDesktop = styled.div`
	display: none;
	${media.mobile`
		display: flex;
	`};
`;

const ShowOnDesktop = styled.div`
	display: flex;
	${media.mobile`
		display: none;
	`};
`;

const Slide: React.SFC<Props> = ({ item }) => (
	// There's an issue typing components that return arrays without Fragments
	// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/26890
	<Image hideLink imageSrc={item.url}>
		<StyledSlide>
			<Heading white uppercase mono size="M">
				{item.type}
			</Heading>
			<HideOnDesktop>
				<Heading white uppercase mono size="L" marginTop="25px">
					{item.title}
				</Heading>
			</HideOnDesktop>
			<ShowOnDesktop>
				<Heading white uppercase mono size="XL" marginTop="25px">
					{item.title}
				</Heading>
			</ShowOnDesktop>
		</StyledSlide>
	</Image>
);

export default Slide;
