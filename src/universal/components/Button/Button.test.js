import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

test('it renders purple button', () => {
	const tree = renderer.create(
		<Button purple>
			PURPLE
		</Button>
	)
		.toJSON();

	expect(tree).toMatchSnapshot();
});
