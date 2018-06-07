import React from 'react';
import { Button } from '../components/';

const Landing = () => (
	<div>
		<Button type="transparentDark" onClick={() => console.log('transparentDark')}>
			HELLO
		</Button>
		<Button type="transparentPurple">LOGIN</Button>
		<Button type="purple">SIGN UP</Button>
	</div>
);

export default Landing;
