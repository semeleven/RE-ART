import React from 'react';
import { Main } from '../components';
import { Auth } from '../containers';

const Sign = ({ ...rest }) => (
	<Main title="Authorization">
		<Auth {...rest} />
	</Main>
);

export default Sign;
