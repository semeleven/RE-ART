import React from 'react';
import { Main } from '../components';
import {
	Spotlight,
	Categories,
	Recent,
	Filters,
	Products,
} from '../containers';

const Landing = () => (
	<Main title="Home Page">
		<Spotlight />
		<Categories />
		<Recent />
		<Filters />
		<Products />
	</Main>
);

export default Landing;
