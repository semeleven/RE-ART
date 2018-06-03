import React, { Component } from 'react';
import withStyles from '../../helpers/withStyles';

const styles = ({ theme, type }) => {
	console.log(theme, type, 'theme type');
	const commonStyles = {
		boxSizing: 'border-box',
		color: 'white',
		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center',
		// minHeight: 40,
		// minWidth: 115,
		// paddingRight: 30,
		// paddingLeft: 30,
		// paddingTop: 11,
		// paddingBottom: 11,
		// borderStyle: 'solid',
		// borderRadius: 10,
		// fontSize: 15,
		textDecoration: 'none',
		verticalAlign: 'middle',
		cursor: 'pointer',
		transition: '0.2s ease-in-out',
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
};

@withStyles(styles)
class Button extends Component<any, any> {
	public render(): JSX.Element {
		const { className, children } = this.props;
		console.log(this.props, 'props in button');
		return (
			<div className={className}>
				{children}
			</div>
		);
	}
}

export default Button;
// #6C5FC7
// const styles = {
// 	button: ({ type, theme }) => {
// 		const commonStyles = {
// 			boxSizing: 'border-box',
// 			color: 'white',
// 			display: 'inline-flex',
// 			justifyContent: 'center',
// 			alignItems: 'center',
// 			minHeight: 40,
// 			minWidth: 115,
// 			paddingRight: 30,
// 			paddingLeft: 30,
// 			paddingTop: 11,
// 			paddingBottom: 11,
// 			borderStyle: 'solid',
// 			borderRadius: 10,
// 			fontSize: 15,
// 			textDecoration: 'none',
// 			verticalAlign: 'middle',
// 			cursor: 'pointer',
// 			transition: '0.2s ease-in-out',
// 			'&:hover': {
// 				backgroundColor: 'white'
// 			},
// 		};
//
// 		if (type === 'transparentDark') {
// 			return {
// 				...commonStyles,
// 				backgroundColor: theme.darkGray,
// 			}
// 		}
//
// 		if (type === 'purple') {
// 			return {
// 				...commonStyles,
// 				backgroundColor: theme.purple,
// 			}
// 		}
// 	},
// };


// class Button extends Component<any, any>  {
// 	static defaultProps = {
// 		type: 'transparentDark',
// 	};
//
// 	public render(): JSX.Element {
// 		const { children } = this.props;
// 		return (
// 			<div>
// 				{children}
// 			</div>
// 		);
// 	}
// }

// import { createComponent } from 'react-fela'
//
// const container = ({ padding }) => ({
// 	padding: padding + 'px',
// 	backgroundColor: 'rgb(124, 114, 231)',
// 	fontSize: '20px'
// });
//
// const Button = createComponent(container);
//
// export default Button;
// export default Button;
  