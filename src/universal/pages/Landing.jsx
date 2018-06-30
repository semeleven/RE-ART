import React from 'react';
import { Main } from '../components';
import { Spotlight, Categories, Recent, Filters } from '../containers';

const Landing = () => (
	<Main title="Home Page">
		<Spotlight />
		<Categories />
		<Recent />
		<Filters />
	</Main>
);

export default Landing;
