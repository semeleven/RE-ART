import React from 'react';
import Slider from 'react-id-swiper';
import { Card, Main, Row, Col } from '../components';
import styled from '../lib/styled';

const SliderParams = {
	containerClass: 'swiper',
	slidesPerView: 1,
};

const ImageWrapper = styled.div`
	background-size: cover;
	overflow: hidden;
	height: 530px;
	width: 100%;
`;

const Landing = () => (
	<Main title="Home Page">
		<Row>
			<Col size={12}>
				<Slider>
					<Col size={12}>
						<img src="https://pp.userapi.com/c7007/v7007477/37e0e/qbny9kC12nw.jpg" />
					</Col>
					<Col size={12}>
						<img src="https://pp.userapi.com/c7007/v7007477/37e0e/qbny9kC12nw.jpg" />
					</Col>
					<Col size={12}>
						<img src="https://pp.userapi.com/c7007/v7007477/37e0e/qbny9kC12nw.jpg" />
					</Col>
				</Slider>
			</Col>
		</Row>
		<Row>
			<Col size={2}>
				<Card>PAINTING</Card>
			</Col>
			<Col size={2}>
				<Card>SCULPTURE</Card>
			</Col>
			<Col size={2}>
				<Card>WHATEVER</Card>
			</Col>
			<Col size={2}>
				<Card>CLOTHES</Card>
			</Col>
		</Row>
	</Main>
);

export default Landing;
