import React, { PureComponent, Fragment } from 'react';
// import { helpers } from 'react-redux';
import { Row, Title, Product } from '@Components';

const mockSlides = [
	{
		id: 0,
		url: 'https://pp.userapi.com/c630117/v630117754/2d72d/fBdlOlnOvUk.jpg',
		author: 'LoremIpsum',
		name: 'Lesbians',
		price: '777',
	},
	{
		id: 1,
		url: 'https://pp.userapi.com/c630117/v630117754/2d72d/fBdlOlnOvUk.jpg',
		author: 'LoremIpsum',
		name: 'Lesbians',
		price: '777',
	},
	{
		id: 2,
		url: 'https://pp.userapi.com/c630117/v630117754/2d72d/fBdlOlnOvUk.jpg',
		author: 'LoremIpsum',
		name: 'Lesbians',
		price: '777',
	},
	{
		id: 3,
		url: 'https://pp.userapi.com/c630117/v630117754/2d72d/fBdlOlnOvUk.jpg',
		author: 'LoremIpsum',
		name: 'Lesbians',
		price: '777',
	},
];

export default class Categories extends PureComponent {
	renderSlides = () => (
		<Row>
			{mockSlides.map(item => <Product small key={item.id} item={item} />)}
		</Row>
	);

	render() {
		return (
			<Fragment>
				<Title>Recently Dropped</Title>
				<Row>{this.renderSlides()}</Row>
			</Fragment>
		);
	}
}
