import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import { Button, Icon } from '@Components';

storiesOf('Button', module).add('with loading state', () => (
	<Button width="100%" loading onClick={() => {}}>
		<Icon icon="Loading" absolute />
		SIGN UP
	</Button>
));
