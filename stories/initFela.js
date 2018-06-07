// Pass Fela renderer to context for usage with storybook
import React from 'react';
import { Provider } from 'react-fela';
import createRenderer from '../src/universal/lib/fela/renderer';

const renderer = createRenderer();

export default () =>
	story => (
		<Provider renderer={renderer}>
			{story()}
		</Provider>
	);
