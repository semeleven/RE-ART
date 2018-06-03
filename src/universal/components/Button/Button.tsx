import React, { PureComponent } from 'react';
import injectSheet, { withTheme } from 'react-jss';
// #6C5FC7
const styles = {
	button: ({ type, theme }) => {
		const commonStyles = {
			boxSizing: 'border-box',
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
			borderRadius: 10,
			fontSize: 15,
			textDecoration: 'none',
			verticalAlign: 'middle',
			cursor: 'pointer',
			transition: '0.2s ease-in-out',
			'&:hover': {
				backgroundColor: 'white'
			},
		};

		if (type === 'transparentDark') {
			return {
				...commonStyles,
				backgroundColor: theme.darkGray,
			}
		}

		if (type === 'purple') {
			return {
				...commonStyles,
				backgroundColor: theme.purple,
			}
		}
	},
};

@withTheme
@injectSheet(styles)
class Button extends PureComponent<any, any>  {
	static defaultProps = {
		type: 'transparentDark',
	};

	public render(): JSX.Element {
		const { classes, children } = this.props;
		return (
			<div className={classes.button}>
				{children}
			</div>
		);
	}
}

export default Button;
  