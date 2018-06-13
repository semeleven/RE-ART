import React from 'react';
import Helmet from 'react-helmet';

import styled from '../../lib/styled';

interface Props {
	children: React.ReactNode
	className?: string
	title?: string
}

const Main: React.SFC<Props> = ({ className, title,  children }) => (
	<main className={className}>
		<Helmet>
			<title>{title}</title>
		</Helmet>
		{children}
	</main>
);

Main.defaultProps = {
	title: 'RE:ART'
};

const StyledMain = styled(Main)`
	max-width: 1200px;
	margin: 0 auto;
`;

export default StyledMain;