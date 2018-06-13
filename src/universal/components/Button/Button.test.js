import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Button from './Button';

it('renders purple button', () => {
	const wrapper = shallow(<Button purple>PURPLE</Button>);
	expect(wrapper).toMatchSnapshot();
});

it('simulates click events', () => {
	const onButtonClick = sinon.spy();
	const wrapper = shallow(
		<Button onClick={onButtonClick}>
			TEST
		</Button>
	);
	wrapper.find('button').simulate('click');
	expect(onButtonClick.calledOnce).toEqual(true);
});