import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Heading from './Heading';
import sinon from 'sinon';

const sizes = ['XL', 'L', 'M', 'S'];

for (let i = 0; i < sizes.length; i++) {
	const currentSize = sizes[i];

	it(`renders black ${currentSize} Heading`, () => {
		const wrapper = shallow(
			<Heading black size={currentSize}>
				${currentSize}
			</Heading>
		);
		expect(wrapper).toMatchSnapshot();
	});
}

it(`renders mono dark gray Heading with default prop XL`, () => {
	const wrapper = shallow(
		<Heading mono darkGray>
			DARK GRAY MONO
		</Heading>
	);
	expect(wrapper).toMatchSnapshot();
});

it(`renders bold and uppercase lighter gray Heading`, () => {
	const wrapper = shallow(
		<Heading bold uppercase lighterGray>
			MONO
		</Heading>
	);
	expect(wrapper).toMatchSnapshot();
});

it(`renders black (default color prop) Heading with vertical margins`, () => {
	const wrapper = shallow(
		<Heading marginBottom="30px" marginTop="30px">
			MONO
		</Heading>
	);
	expect(wrapper).toMatchSnapshot();
});

it(`renders purple Heading`, () => {
	const wrapper = shallow(<Heading purple>MONO</Heading>);
	expect(wrapper).toMatchSnapshot();
});

it(`renders dark purple Heading`, () => {
	const wrapper = shallow(<Heading darkPurple>MONO</Heading>);
	expect(wrapper).toMatchSnapshot();
});

it('simulates click events', () => {
	const onHeadingClick = sinon.spy();
	const wrapper = shallow(<Heading onClick={onHeadingClick}>CLICK!</Heading>);
	wrapper.find('Heading').simulate('click');
	expect(onHeadingClick.calledOnce).toEqual(true);
});
