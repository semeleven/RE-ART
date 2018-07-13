import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '../../components';

storiesOf('Button', module)
	.add('loading state', () => (
		<Button width="100%" loading onClick={action('click')}>
			BUTTON
		</Button>
	))
	.add('inverted dark color', () => (
		<Button invertedDark onClick={action('click')}>
			BUTTON
		</Button>
	))
	.add('inverted purple color', () => (
		<Button invertedPurple onClick={action('click')}>
			BUTTON
		</Button>
	))
	.add('dark color', () => (
		<Button dark onClick={action('click')}>
			BUTTON
		</Button>
	))
	.add('purple', () => (
		<Button purple onClick={action('click')}>
			BUTTON
		</Button>
	))
	.add('disabled', () => (
		<Button disabled onClick={action('click')}>
			BUTTON
		</Button>
	));
