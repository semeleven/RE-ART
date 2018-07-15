import React from 'react';
import { Link } from 'react-router-dom';
import styledProps from 'styled-props';
import styled, { css } from '@Styled';
import {
	colors,
	colorsPartialInterface,
	fontSize,
	headingMargin,
} from '@Styled/theme';

interface Props extends colorsPartialInterface {
	size?: string;
	marginTop?: string;
	marginBottom?: string;
	className?: string;
	to?: string;
	onClick?: () => void;
	children: React.ReactNode;
}

// const LinkComponent: React.SFC<Partial<Props>> = ({
const LinkComponent: React.SFC<Props> = ({
	onClick,
	className,
	to,
	children,
}) => {
	if (to) {
		return (
			<Link className={className} to={to}>
				{children}
			</Link>
		);
	}

	return (
		<a className={className} onClick={onClick}>
			{children}
		</a>
	);
};

// LinkComponent.defaultProps = {
// 	onClick: () => {}
// };

const StyledLink = styled(LinkComponent)`
	${(props: Props) => {
		const size: string = props.size || 'M';

		const handleSize = (param): string => param || headingMargin[size];

		return css`
			cursor: pointer;
			font-size: ${fontSize[size]};
			font-family: Source Code Pro, monospace;
			font-weight: bold;
			color: ${styledProps(colors)};
			margin-top: ${handleSize(props.marginTop)};
			margin-bottom: ${handleSize(props.marginBottom)};
			:hover {
				color: ${colors.lighterGray};
			}
		`;
	}};
`;

export default StyledLink;
