import React, { PureComponent, Fragment } from 'react';
// import { connect } from 'react-redux';
import { Row, Title, Product } from '../../components';

const mockSlides = [
	{
		id: 0,
		url: 'https://pp.userapi.com/c7008/v7008477/6bdb6/aRaLC8otx8E.jpg',
		author: 'LoremIpsum',
		title: 'Lesbians',
		price: '777',
	},
	{
		id: 1,
		category: 'SCULPTURE',
		url: 'https://pp.userapi.com/c7008/v7008477/6bdb6/aRaLC8otx8E.jpg',
		author: 'LoremIpsum',
		title: 'Lesbians',
		price: '777',
	},
	{
		id: 2,
		url: 'https://pp.userapi.com/c7008/v7008477/6bdb6/aRaLC8otx8E.jpg',
		author: 'LoremIpsum',
		title: 'Lesbians',
		price: '777',
	},
	{
		id: 3,
		url: 'https://pp.userapi.com/c7008/v7008477/6bdb6/aRaLC8otx8E.jpg',
		author: 'LoremIpsum',
		title: 'Lesbians',
		price: '777',
	},
];

export default class Categories extends PureComponent {
	renderSlides = () => (
		<Row>{mockSlides.map(item => <Product key={item.id} item={item} />)}</Row>
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
