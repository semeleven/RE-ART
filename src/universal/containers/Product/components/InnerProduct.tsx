import React from 'react';
import {
	Button,
	Row,
	Col,
	Heading,
	Swiper,
	Image,
	Link,
} from '@Components';

type Product = {
	id: number;
	url: string;
	name: string;
	author: string;
	price: number;
	description: string;
};

interface Props {
	item: Product;
}

const InnerProduct: React.SFC<Props> = ({ item }) => {
	// temporary function, cause there's single image in the response yet
	const renderSlides = () => (
		<div key={item.id} className="swiper-slide">
			<Image hideLink id={item.id} imageSrc={item.url} />
		</div>
	);

	return (
		<Row>
			<Col size={6} sizeL={12} sizeMd={12} sizeSm={12} marginBottom="50px">
				<Swiper>{renderSlides()}</Swiper>
			</Col>
			<Col size={6} sizeL={12} sizeMd={12} sizeSm={12}>
				<Col size={12}>
					<Heading darkGray size="L">
						{item.name}
					</Heading>
				</Col>
				<Col size={12}>
					<Heading inline bold size="S">
						{'by' + ' '}
					</Heading>
					<Link darkGray to="/">
						@{item.author}
					</Link>
				</Col>
				<Col size={12}>
					<Heading size="L">{item.price} $</Heading>
				</Col>
				<Col size={12} marginBottom="20px">
					<Button dark width="100%" onClick={() => console.log('add to cart!')}>
						ADD TO CART
					</Button>
				</Col>
				<Col size={12} marginBottom="50px">
					<Button
						invertedDark
						width="100%"
						onClick={() => console.log('add to cart!')}
					>
						SEND A MESSAGE
					</Button>
				</Col>
				<Col size={12}>
					<Heading size="M">{item.description}</Heading>
				</Col>
			</Col>
		</Row>
	);
};

export default InnerProduct;
