import React from 'react';
import styled, { css } from '../../lib/styled';

const singleColWidth = 100 / 12;

interface Props {
	size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
	centered: boolean
	children: React.ReactNode
}

const StyledDiv = styled.div`
	${(props: Props) => 
		css`
			width: ${singleColWidth * props.size};
	        padding-left: 20;
	        padding-right: 20;
	        flex: none;
	        text-align: ${props.centered && 'center'};
		`
	};
`;

export default StyledDiv;
