import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Canvas from './Canvas';

it('renders Canvas component', () => {
	const wrapper = shallow(
		<Canvas>
			Content
		</Canvas>
	);
	expect(wrapper).toMatchSnapshot();
});
