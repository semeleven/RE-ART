import React from 'react';
import { Card, Main, Row, Col } from '../components';
import Spotlight from '../containers/Spotlight';


const Landing = () => (
	<Main title="Home Page">
		<Spotlight />
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
