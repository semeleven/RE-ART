import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import 'jest-styled-components';

import Button from './Button';

it('renders purple button', () => {
	const wrapper = shallow(<Button purple>PURPLE</Button>);
	expect(wrapper).toMatchSnapshot();
});

it('renders loading button', () => {
	const wrapper = shallow(
		<Button width="100%" loading onClick={() => {}}>
			SIGN UP
		</Button>
	);
	expect(wrapper).toMatchSnapshot();
});

it('simulates click events', () => {
	const onButtonClick = sinon.spy();
	const wrapper = shallow(<Button onClick={onButtonClick}>TEST</Button>);
	console.log(wrapper, 'wrapper?');
	wrapper.simulate('click');
	expect(onButtonClick.calledOnce).toEqual(true);
});
