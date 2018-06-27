import React from 'react';

import { Heading } from '../../../components';
import styled from '../../../lib/styled';
import Image from './Image';

// type SlideItem = {
// 	id: number,
// 	url: string,
// 	type?: string,
// 	title: string,
// }
//
// interface Props {
// 	slides: Array<SlideItem>
// }

const StyledSlide = styled.div`
	position: absolute;
	bottom: 50px;
	left: 50px;
`;

const Slide: React.SFC<any> = ({ slides }) =>
	// There's an issue typing components that return arrays without Fragments
	// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/26890
	// TODO: return typings for slides prop when issue is resolved
	// <Fragment>
	slides.map(item => (
		<Image key={item.id} url={item.url}>
			<StyledSlide>
				<Heading uppercase mono size="M">
					{item.type}
				</Heading>
				<Heading uppercase mono size="XL" marginTop={25}>
					{item.title}
				</Heading>
			</StyledSlide>
		</Image>
	));
	// </Fragment>

export default Slide;
