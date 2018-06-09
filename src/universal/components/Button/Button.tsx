import React, { Component } from 'react';
import { darken } from 'polished';
import { withStyles, ThemeInterface } from '../../lib/fela/';

type Props = {
	type: 'transparentDark' | 'transparentPurple' | 'purple';
	onClick: () => any;
	theme: ThemeInterface;
	className: string;
};

const styles = ({ theme: { darkGray, darkPurple, white, purple }, type }: Props): object => {
	const commonStyles = {
		boxSizing: 'border-box',
		fontFamily: 'GothamMedium',
		textTransform: 'uppercase',
		color: 'white',
		textAlign: 'center',
		minWidth: 115,
		paddingRight: 30,
		paddingLeft: 30,
		paddingTop: 11,
		paddingBottom: 11,
		borderStyle: 'solid',
		borderRadius: '10px',
		outline: 'none',
		fontSize: 15,
		textDecoration: 'none',
		lineHeight: 1,
		// verticalAlign: 'middle',
		cursor: 'pointer',
		transition: '0.1s ease-in-out',
	};

	if (type === 'transparentDark') {
		return {
			...commonStyles,
			borderColor: darkGray,
			color: darkGray,
			backgroundColor: white,
			'&:hover': {
				backgroundColor: darkGray,
				color: white,
			},
			'&:active': {
				backgroundColor: darken(0.1, darkGray),
			},
		};
	}

	if (type === 'transparentPurple') {
		return {
			...commonStyles,
			borderColor: purple,
			color: purple,
			backgroundColor: white,
			'&:hover': {
				backgroundColor: purple,
				color: white,
			},
			'&:active': {
				backgroundColor: darken(0.1, purple),
			},
		};
	}

	if (type === 'purple') {
		return {
			...commonStyles,
			borderColor: purple,
			color: white,
			backgroundColor: purple,
			'&:hover': {
				backgroundColor: darkPurple,
				color: white,
			},
			'&:active': {
				backgroundColor: darken(0.1, darkPurple),
			},
		};
	}
};

@withStyles(styles)
class Button extends Component<Props, any> {
	public render(): React.ReactNode {
		const { className, children, onClick } = this.props;

		return (
			<button type="button" className={className} onClick={onClick}>
				{children}
			</button>
		);
	}
}

export default Button;
