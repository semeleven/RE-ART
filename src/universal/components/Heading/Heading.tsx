import React from 'react';
import styledProps from 'styled-props';

import styled from '../../lib/styled';
import { fontSize, colors } from '../../lib/styled/theme';

interface Props {
	size?: 'XL' | 'L' | 'M' | 'S'
	mono?: boolean
	children: React.ReactNode
	className?: string
	color?: 'white' | 'black' | 'lighterGray'
}

const Sizes = {
	XL: 1,
	L: 2,
	M: 3,
	S: 4,
};

const Heading: React.SFC<Props> = ({ size = 'XL', className, children }) => (
	React.createElement(`h${Sizes[size]}`, { className }, children)
);

const StyledHeading = styled(Heading)`
	font-size: ${props => fontSize[props.size]}px;
	font-family: ${props => 
		props.mono 
			? 'Source Code Pro, monospace' 
			: 'Lato, sans-serif'
	};
	color: ${styledProps(colors)};
`;

StyledHeading.defaultProps = {
	color: 'white',
	size: 'XL',
	mono: false,
};

export default StyledHeading;