import React from 'react';
import styledProps from 'styled-props';

import styled from '../../lib/styled';
import { fontSize, colors, headingMargin } from '../../lib/styled/theme';

interface Props {
	size?: 'XL' | 'L' | 'M' | 'S';
	mono?: boolean;
	children: React.ReactNode;
	className?: string;
	white?: boolean
	black?: boolean
	lighterGray?: boolean
	uppercase?: boolean
	marginTop?: number | string
	marginBottom?: number | string
}

const Sizes = {
	XL: 1,
	L: 2,
	M: 3,
	S: 4,
};

const Heading: React.SFC<Props> = ({ size = 'XL', className, children }) =>
	React.createElement(`h${Sizes[size]}`, { className }, children);

const StyledHeading = styled(Heading)`
	font-size: ${props => fontSize[props.size]};
	font-family: ${props =>
		(props.mono ? 'Source Code Pro, monospace' : 'Lato, sans-serif')};
	color: ${styledProps(colors)};
	text-transform: ${props => props.uppercase && 'uppercase'};
	margin-top: ${props =>
		props.marginTop
			? props.marginTop + 'px'
			: headingMargin[props.size]
	};
	margin-bottom: ${props => 
		props.marginBottom 
			? props.marginBottom + 'px' 
			: headingMargin[props.size]
	};
`;

StyledHeading.defaultProps = {
	white: true,
	size: 'XL',
	mono: false,
	uppercase: false,
	marginTop: null,
	marginBottom: null,
};

export default StyledHeading;
