import React from 'react';
import { Row, Col, Input, Heading, Select } from '../../../components';

interface Props {
	handleSearch: (e: React.FormEvent<HTMLInputElement>) => void;
	handleFilters: () => void;
	showFilters: boolean;
}

const options = [
	{ value: 'Newest', label: 'Newest' },
	{ value: 'Lower Price', label: 'Lower Price' },
	{ value: 'Higher Price', label: 'Higher Price' }
];

const Controls: React.SFC<Props> = ({
	handleSearch,
	handleFilters,
	showFilters,
}) => (
	<Row marginTop="50px" marginBottom="50px">
		<Col size={3}>
			<Heading inline lighterGray size="S" onClick={handleFilters}>
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
		<Col right size={3}>
			<Select
				options={options}
				onChange={(e) => console.log(e)}
			/>
		</Col>
	</Row>
);

export default Controls;
