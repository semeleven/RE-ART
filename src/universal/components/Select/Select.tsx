import React from 'react';
import Select from 'react-select';
import { lighten } from 'polished';
import { colors } from '../../lib/styled/theme';

const customStyles = {
	option: (base) => ({
		...base,
		borderRadius: '3px',
		borderBottom: '1px solid white',
		color: colors.white,
		fontWeight: 700,
		fontFamily: 'Lato, sans-serif',
		backgroundColor: colors.darkGray,
		padding: 20,
		outline: 'none',
		cursor: 'pointer',
		transition: '0.2s ease-in-out background-color',
		':hover': {
			backgroundColor: lighten(0.1, colors.darkGray),
		}
	}),
	control: (base) => ({
		...base,
		border: `1px solid ${colors.lighterGray} !important`,
		outline: 'none',
		boxShadow: `0 0 0 1px ${colors.white} !important`,
		':active': {
			boxShadow: `0 0 0 1px ${colors.lighterGray}`,
		},
		':hover': {
			boxShadow: `0 0 0 1px ${colors.lighterGray}`,
		}
	}),
	singleValue: (base, state) => {
		const opacity = state.isDisabled ? 0.5 : 1;
		const transition = 'opacity 300ms';

		return { ...base, opacity, transition };
	}
};

type Option = {
	value: string
	label: string
}

interface Props {
	options: Array<Option>
	styles?: object
	onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const StyledSelect : React.SFC<Props> = ({ options, styles, onChange }) => {
	const styleBag = {
		...customStyles,
		...styles != null && styles,
	};

	return (
		<Select
			onChange={onChange}
			options={options}
			styles={styleBag}
		/>
	);
};

export default StyledSelect;