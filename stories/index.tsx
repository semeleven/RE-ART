import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import { Button, Icon } from '../src/universal/components/';

storiesOf('Button', module).add('with loading state', () => (
	<Button width="100%" loading onClick={() => {}}>
		<Icon icon="loading" absolute />
		SIGN UP
	</Button>
));
