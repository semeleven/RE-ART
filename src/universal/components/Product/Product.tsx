import React from 'react';
import { Col, Image, Link, Heading } from '../../components';

type Item = {
	id: number;
	url: string;
	author: string;
	// title: string;
	name: string;
	price: string | number;
};

interface Props {
	item: Item;
}

const Product: React.SFC<Props> = ({ item }) => (
	<Col centered size={3} sizeL={6} sizeMd={6} sizeSm={6}>
		<Image margin height="220px" url={item.url} />
		<Link to="/">{`@${item.author}`}</Link>
		<Heading
			size="M"
			darkGray
			// mono
		>
			{item.name}
		</Heading>
		<Heading
			size="M"
			darkGray
			bold
			// mono
		>
			{`${item.price}$`}
		</Heading>
	</Col>
);

export default Product;
