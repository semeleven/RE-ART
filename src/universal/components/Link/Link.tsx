import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from '../../lib/styled';
import { colors, fontSize, headingMargin } from '../../lib/styled/theme';

interface Props {
	size?: string;
	marginTop?: string;
	marginBottom?: string;
	className?: string;
	to: string;
	children: React.ReactNode;
}

const LinkComponent: React.SFC<Props> = ({ className, to, children }) => (
	<Link className={className} to={to}>
		{children}
	</Link>
);

const StyledLink = styled(LinkComponent)`
	${(props: Props) => {
		const size: string = props.size || 'M';

		const handleSize = (param): string => param || headingMargin[size];

		return css`
			font-size: ${fontSize[size]};
			font-family: Source Code Pro, monospace;
			font-weight: bold;
			color: ${colors.darkGray};
			margin-top: ${handleSize(props.marginTop)};
			margin-bottom: ${handleSize(props.marginBottom)};
			:hover {
				color: ${colors.lighterGray};
			}
		`;
	}};
`;

export default StyledLink;
