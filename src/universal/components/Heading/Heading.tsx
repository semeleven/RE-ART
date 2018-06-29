import React from 'react';
import styledProps from 'styled-props';

import styled, { css } from '../../lib/styled';
import { fontSize, colors, headingMargin } from '../../lib/styled/theme';

interface Props {
	size?: 'XL' | 'L' | 'M' | 'S';
	mono?: boolean;
	bold?: boolean;
	children: React.ReactNode;
	className?: string;
	white?: boolean;
	black?: boolean;
	darkGray?: boolean;
	lighterGray?: boolean;
	uppercase?: boolean;
	marginTop?: string;
	marginBottom?: string;
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
	${(props: Props) => {
		const handleSize = (param): string => param || headingMargin[props.size];

		return css`
			font-size: ${fontSize[props.size]};
			font-family: ${props.mono
		? 'Source Code Pro, monospace'
		: 'Lato, sans-serif'};
			font-weight: ${props.bold && 'bold'};
			color: ${styledProps(colors)};
			text-transform: ${props.uppercase && 'uppercase'};
			margin-top: ${handleSize(props.marginTop)};
			margin-bottom: ${handleSize(props.marginBottom)};
		`;
	}};
`;

StyledHeading.defaultProps = {
	size: 'XL',
	mono: false,
	bold: false,
	uppercase: false,
	marginTop: null,
	marginBottom: null,
};

export default StyledHeading;
