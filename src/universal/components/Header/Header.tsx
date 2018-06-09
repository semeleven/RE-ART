import React, { Component } from 'react';
import { Button } from '../../components';
import { withStyles } from '../../lib/fela/';

type Props = {
	theme?: any;
	className?: string;
};

const styles = ({ theme }) => ({
	display: 'flex !important',
	color: theme.white,
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	backgroundColor: theme.darkGray,
	paddingLeft: 24,
	paddingRight: 24,
});

@withStyles(styles)
class Header extends Component<Props, any> {
	public render(): React.ReactNode {
		const { className } = this.props;

		return (
			<header className={className}>
				<div>
					MENU
				</div>
				<h1>
					RE:ART
				</h1>
				<div>
					<Button
						type="transparentDark"
						onClick={() => {}}
					>
						LOGIN
					</Button>
					<Button
						type="purple"
						onClick={() => {}}
					>
						SIGN UP
					</Button>
					<div>
						SEARCH
					</div>
				</div>
			</header>
		);
	}
}

export default Header;