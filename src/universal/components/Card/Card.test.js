import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Card from './Card';

it('renders Card component', () => {
	const wrapper = shallow(<Card>Content</Card>);
	expect(wrapper).toMatchSnapshot();
});
