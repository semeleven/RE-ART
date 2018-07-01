import React from 'react';
import styled, { css } from '../../../lib/styled';
import { media } from '../../../lib/styled/theme';

const singleColWidth = 100 / 12;
// const colGapMobile = 30;

type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface Props {
	size: Size;
	sizeL?: Size;
	sizeMd?: Size;
	sizeSm?: Size;
	centered?: boolean;
	right?: boolean;
	children: React.ReactNode;
	noMobilePadding?: boolean;
}

const StyledDiv = styled.div`
	${(props: Props) => {
		const handleWidth = param =>
			`${param ? singleColWidth * param : singleColWidth * props.size}%`;

		const noMobilePadding = props.noMobilePadding && '0px';

		return css`
			width: ${handleWidth(props.size)};
			padding-left: 20px;
			padding-right: 20px;
			flex: 0 1 auto;
			align-items: center;
			text-align: ${(props.centered && 'center') || (props.right && 'right')};
			${media.tablet`
				width: ${handleWidth(props.sizeL)};
			`}
			${media.mobile`
				width: ${handleWidth(props.sizeMd)};
				padding-left: ${noMobilePadding};
				padding-right: ${noMobilePadding};
			`}
			${media.small`
				width: ${handleWidth(props.sizeSm)};
			`}
		`;
	}};
`;

export default StyledDiv;
