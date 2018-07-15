import React from 'react';
import styled from '@Styled';

interface Props {
	children: React.ReactNode;
}

const DropdownContainer = styled.div`
	position: relative;
`;

const DropdownList = styled.div`
	min-width: 170px;
	background-color: #ffffff;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 0, 0, 0.1);
	position: absolute;
	top: 100%;
	right: 0;
	z-index: 1;
	padding: 5px 20px;
`;

const Dropdown: React.SFC<Props> = ({ children }) => (
	<DropdownContainer>
		<DropdownList>{children}</DropdownList>
	</DropdownContainer>
);

export default Dropdown;
