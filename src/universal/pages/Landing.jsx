import React from 'react';
import { Button } from '../components/';

const Landing = () => (
	<div>
		<Button invertedDark onClick={() => console.log('transparentDark')}>
			invertedDark
		</Button>
		<Button invertedPurple>invertedPurple</Button>
		<Button dark>DARK</Button>
		<Button purple>PURPLE</Button>
	</div>
);

export default Landing;
