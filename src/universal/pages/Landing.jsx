import React from 'react';
import { Main } from '../components';
import { Spotlight, Categories, Recent } from '../containers';

const Landing = () => (
	<Main title="Home Page">
		<Spotlight />
		<Categories />
		<Recent />
	</Main>
);

export default Landing;
