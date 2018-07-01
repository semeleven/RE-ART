import React, { PureComponent, Fragment } from 'react';
// import { connect } from 'react-redux';
import { Row, Col, Card, Title } from '../../components';

const mockCards = [
	{
		id: 0,
		category: 'PAINTING',
	},
	{
		id: 1,
		category: 'SCULPTURE',
	},
	{
		id: 2,
		category: 'JEWELRY',
	},
	{
		id: 3,
		category: 'CLOTHES',
	},
	{
		id: 4,
		category: 'WHATEVER',
	},
	{
		id: 5,
		category: 'WHATEVER',
	},
	{
		id: 6,
		category: 'WHATEVER',
	},
	{
		id: 7,
		category: 'WHATEVER',
	},
];

export default class Categories extends PureComponent {
	renderCards = () =>
		mockCards.map(item => (
			<Col key={item.id} size={3} sizeMd={6} sizeSm={6}>
				<Card>{item.category}</Card>
			</Col>
		));

	render() {
		return (
			<Fragment>
				<Title>Browse Categories</Title>
				<Row>{this.renderCards()}</Row>
			</Fragment>
		);
	}
}
