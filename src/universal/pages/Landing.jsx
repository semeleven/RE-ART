import React from 'react';
import { Button, Main } from '../components';

const Landing = () => (
	<Main title="Home Page">
		<Button invertedDark onClick={() => console.log('transparentDark')}>
			invertedDark
		</Button>
		<Button invertedPurple>invertedPurple</Button>
		<Button purple>PURPLE</Button>
	</Main>
);

export default Landing;
