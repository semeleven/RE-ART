import React from 'react';
import { Row, Col, Input } from '../../../components';

interface Props {}

const FiltersBlock: React.SFC<Props> = () => (
	<Row marginTop="50px">
		<Col size={3} />
		<Col size={6}>
			<Input
				centered
				type="text"
				placeholder="Search..."
				onChange={e => console.log(e.currentTarget.value)}
			/>
		</Col>
		<Col right size={3}>
			SORT BY
		</Col>
	</Row>
);

export default FiltersBlock;
