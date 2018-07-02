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
	small?: boolean;
}

const Product: React.SFC<Props> = ({ item, small }) => (
	<Col centered size={3} sizeL={6} sizeMd={6} sizeSm={12}>
		<Image
			margin
			height={small ? "220px" : "390px"}
			url={item.url}
		/>
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
			marginBottom="50px"
			darkGray
			bold
			// mono
		>
			{`${item.price}$`}
		</Heading>
	</Col>
);

export default Product;
