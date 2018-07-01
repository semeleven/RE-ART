import React from 'react';
import { Row, Col, Input, Heading } from '../../../components';

interface Props {
	handleSearch: (e: React.FormEvent<HTMLInputElement>) => void;
	handleFilters: () => void;
	showFilters: boolean;
}

const Controls : React.SFC<Props> = ({ handleSearch, handleFilters, showFilters }) => (
	<Row marginTop="50px">
		<Col size={3}>
			<Heading lighterGray size="M" onClick={handleFilters}>
				{showFilters ? '< HIDE FILTERS' : '> SHOW FILTERS'}
			</Heading>
		</Col>
		<Col size={6}>
			<Input
				centered
				type="text"
				placeholder="Search..."
				onChange={e => handleSearch(e)}
			/>
		</Col>
		<Col right size={3}>SORT BY</Col>
	</Row>
);

export default Controls;