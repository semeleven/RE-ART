// import React from 'react';
import styledProps from 'styled-props';
import styled from '../../lib/styled';
import {
	background,
	color,
	borderColor,
	hoverBackground,
	activeBackground
} from '../../lib/styled/theme';

// import { darken } from 'polished';

// type Props = {
// 	type: 'transparentDark' | 'transparentPurple' | 'purple';
// 	onClick: () => any;
// 	theme: any;
// 	className?: string;
// };

// const styles = ({ theme: { darkGray, darkPurple, white, purple }, type }: Props): object => {
// 	const commonStyles = {
// 		boxSizing: 'border-box',
// 		fontFamily: 'Gotham',
// 		textTransform: 'uppercase',
// 		color: 'white',
// 		display: 'inline-flex',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		minHeight: 40,
// 		minWidth: 115,
// 		paddingRight: 30,
// 		paddingLeft: 30,
// 		paddingTop: 11,
// 		paddingBottom: 11,
// 		borderStyle: 'solid',
// 		borderRadius: '10px',
// 		outline: 'none',
// 		fontSize: 15,
// 		textDecoration: 'none',
// 		verticalAlign: 'middle',
// 		cursor: 'pointer',
// 		transition: '0.1s ease-in-out',
// 	};
//
// 	if (type === 'transparentDark') {
// 		return {
// 			...commonStyles,
// 			borderColor: darkGray,
// 			color: darkGray,
// 			backgroundColor: white,
// 			'&:hover': {
// 				backgroundColor: darkGray,
// 				color: white,
// 			},
// 			'&:active': {
// 				backgroundColor: darken(0.1, darkGray),
// 			},
// 		};
// 	}
//
// 	if (type === 'transparentPurple') {
// 		return {
// 			...commonStyles,
// 			borderColor: purple,
// 			color: purple,
// 			backgroundColor: white,
// 			'&:hover': {
// 				backgroundColor: purple,
// 				color: white,
// 			},
// 			'&:active': {
// 				backgroundColor: darken(0.1, purple),
// 			},
// 		};
// 	}
//
// 	if (type === 'purple') {
// 		return {
// 			...commonStyles,
// 			borderColor: purple,
// 			color: white,
// 			backgroundColor: purple,
// 			'&:hover': {
// 				backgroundColor: darkPurple,
// 				color: white,
// 			},
// 			'&:active': {
// 				backgroundColor: darken(0.1, darkPurple),
// 			},
// 		};
// 	}
// };

const Button = styled.button`
	background-color: ${styledProps(background)};
	color: ${styledProps(color)};
	border-color: ${styledProps(borderColor)};
	border-style: solid;
	border-width: 2px;
	border-radius: 10px;
	box-sizing: border-box;
	font-family: GothamMedium, Tahoma, Geneva, sans-serif;
	text-transform: uppercase;
	text-align: center;
	padding: 11px 30px;
	outline: none;
	font-size: 15px;
	line-height: 1;
	cursor: pointer;
	transition: 0.1s ease-in-out;
	user-select: none;
  	text-decoration: none;
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
`;

export default Button;
