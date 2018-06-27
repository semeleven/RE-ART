import React from 'react';
import Slider from 'react-id-swiper';
import { Card, Main, Row, Col } from '../components';
import styled from '../lib/styled';

const SliderParams = {
	containerClass: 'swiper',
	slidesPerView: 1,
	slidesPerRow: 1,
	slidesPerColumn: 1,
	spaceBetween: 50,
	height: 530,
};

const StyledImage = styled.div`
	overflow: hidden;
	width: 100%;
	height: 100%;
	background-image: url(https://pp.userapi.com/c7007/v7007477/37e0e/qbny9kC12nw.jpg);
	background-size: cover;
	background-position: center;
`;

const Landing = () => (
	<Main title="Home Page">
		<Row>
			<Col size={12}>
				<Slider {...SliderParams}>
					<StyledImage />
					<StyledImage />
					<StyledImage />
				</Slider>
			</Col>
		</Row>
		<Row>
			<Col size={3}>
				<Card>PAINTING</Card>
			</Col>
			<Col size={3}>
				<Card>SCULPTURE</Card>
			</Col>
			<Col size={3}>
				<Card>WHATEVER</Card>
			</Col>
			<Col size={3}>
				<Card>CLOTHES</Card>
			</Col>
		</Row>
	</Main>
);

export default Landing;
