import React from 'react';
import { Main } from '../components';
import { Spotlight, Categories } from '../containers';

const Landing = () => (
	<Main title="Home Page">
		<Spotlight />
		<Categories />
	</Main>
);

export default Landing;
