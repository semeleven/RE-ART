import React from 'react';

import { Heading } from '../../../components';
import styled from '../../../lib/styled';
import Image from './Image';

type SlideItem = {
	id: number,
	url: string,
	type?: string,
	title: string,
}

interface Props {
	item: SlideItem
}

const StyledSlide = styled.div`
	position: absolute;
	bottom: 50px;
	left: 50px;
`;

const Slide: React.SFC<Props> = ({ item }) => (
	// There's an issue typing components that return arrays without Fragments
	// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/26890
	// <Fragment>
		<Image url={item.url}>
			<StyledSlide>
				<Heading white uppercase mono size="M">
					{item.type}
				</Heading>
				<Heading white uppercase mono size="XL" marginTop={25}>
					{item.title}
				</Heading>
			</StyledSlide>
		</Image>
);
// </Fragment>

export default Slide;
