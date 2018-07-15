import * as React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';

import { Product } from '@Components';

const item = {
	id: 1,
	url: 'https://pp.userapi.com/c630117/v630117754/2d72d/fBdlOlnOvUk.jpg',
	author: 'author',
	// title: string;
	name: 'name',
	price: '7777',
};

storiesOf('Product', module)
	.addDecorator(story => (
		<MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
	))
	.add('regular size', () => <Product item={item} />)
	.add('small size', () => <Product item={item} small />);
