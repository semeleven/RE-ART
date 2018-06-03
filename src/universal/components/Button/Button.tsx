import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';

const styles = {
	button: {
		backgroundColor: '#16111C',
	},
};

@injectSheet(styles)
class Button extends PureComponent<any, any>  {
	public render() {
		const { classes, children } = this.props;
		return (
			<div className={classes.button}>
				{children}
			</div>
		);
	}
}

export default Button;
  