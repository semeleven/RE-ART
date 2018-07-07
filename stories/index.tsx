import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import { Heading } from '../src/universal/components/';

storiesOf('Heading', module).add('with text', () => (
	<Heading>STORYBOOK</Heading>
));
