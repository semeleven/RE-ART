import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
// import styled from '../../lib/styled';
import { Row, Col, Input } from '../../components';

export default class Filters extends PureComponent {
	render() {
		return (
			<Row>
				<Col size={3}>SHOW FILTERS ></Col>
				<Col size={6}>
					<Input type="text" />
				</Col>
				<Col size={3}>SORT BY</Col>
			</Row>
		);
	}
}
