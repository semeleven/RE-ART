import React, { Component } from 'react';
import { FelaWithStylesProps } from 'react-fela';
import { darken } from 'polished';
import { withStyles, ThemeInterface } from '../../lib/fela/';

interface OwnProps {
	type: 'transparentDark' | 'transparentPurple' | 'purple'
	onClick: () => any
	theme: ThemeInterface
}

interface Styles {
	className: string
}

type Props = OwnProps & FelaWithStylesProps<OwnProps, Styles, ThemeInterface>

const styles = ({ 
	theme: { darkGray, darkPurple, white, purple },
    type 
}: Props): object => {
	const commonStyles = {
		boxSizing: 'border-box',
		fontFamily: 'Gotham',
		textTransform: 'uppercase',
		color: 'white',
		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: 40,
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
		verticalAlign: 'middle',
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
		}
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
		}
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
		}
	}
};

@withStyles(styles)
class Button extends Component<Props, any> {
	public render(): JSX.Element {
		const { className, children, onClick } = this.props;

		return (
			<button
				type="button"
				className={className}
				onClick={onClick}
			>
				{children}
			</button>
		);
	}
}

export default Button;

  