import React from 'react';
import styledProps from 'styled-props';
import styled, { css } from '../../lib/styled';
import {
	background,
	buttonTextColor,
	borderColor,
	hoverBackground,
	activeBackground,
} from '../../lib/styled/theme';

interface Props {
	invertedDark?: boolean;
	invertedPurple?: boolean;
	dark?: boolean;
	purple?: boolean;
	spaced?: boolean;
	width?: string;
	onClick: () => any;
	theme?: any;
	className?: string;
	children: React.ReactNode;
}

const StyledButton = styled.button`
	${(props: Props) => css`
		width: ${props.width ? props.width : 'auto'};
		background-color: ${styledProps(background)};
		color: ${styledProps(buttonTextColor)};
		border-color: ${styledProps(borderColor)};
		border-style: solid;
		border-width: 2px;
		border-radius: 10px;
		box-sizing: border-box;
		font-family: 'Lato', sans-serif;
		font-weight: 600;
		text-transform: uppercase;
		text-align: center;
		padding: 11px 30px;
		outline: none;
		font-size: 15px;
		line-height: 1;
		cursor: pointer;
		transition: 0.2s ease-in-out;
		user-select: none;
		text-decoration: none;
		white-space: nowrap;
		margin-right: ${props.spaced && '20px'};
		:hover {
			background-color: ${styledProps(hoverBackground)};
			border-color: ${styledProps(hoverBackground)};
			color: white;
		}
		:active {
			background-color: ${styledProps(activeBackground)};
			border-color: ${styledProps(activeBackground)};
			color: white;
		}
	`};
`;

export default StyledButton;
