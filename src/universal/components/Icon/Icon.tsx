import React from 'react';
import styled from '../../lib/styled';

import Hamburger from './icons/Hamburger';
import SearchIcon from './icons/SearchIcon';

const icons = {
	hamburger: Hamburger,
	search: SearchIcon,
};

const IconWrapper = styled.div`
	width: 32px;
	height: 32px;
	cursor: pointer;
`;

const Icon = ({ icon }) => <IconWrapper>{icons[icon]()}</IconWrapper>;

export default Icon;
