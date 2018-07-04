import React, { Component } from 'react';
import { TextMask, InputAdapter } from 'react-text-mask-hoc';
import { darken } from 'polished';
import styled from '../../lib/styled';
import { colors, fontSize } from '../../lib/styled/theme';
import { Heading } from '../../components';

// const rule = ({theme, centered}) => ({
// 	color: theme.colors.blue,
// 	fontSize: 18,
// 	fontWeight: 700,
// 	width: '100%',
// 	height: 55,
// 	boxShadow: 'inset 0 0 3px rgba(0, 0, 0, 0.16)',
// 	borderRadius: 3,
// 	borderWidth: 1,
// 	borderStyle: 'solid',
// 	borderColor: theme.colors.lightGray,
// 	backgroundColor: theme.colors.white,
// 	paddingLeft: 20,
// 	paddingRight: 20,
// 	textAlign: centered ? 'center' : 'auto',
// 	verticalAlign: 'middle',
// 	':focus': {
// 		backgroundColor: '#fff',
// 	},
// 	':disabled': {
// 		backgroundColor: darken(0.1, theme.colors.white),
// 	},
// });

type FormEvent = (e: React.FormEvent<HTMLInputElement>) => void;

interface Props {
	type: 'text' | 'email' | 'number' | 'password' | 'search';
	placeholder: string;
	label?: string;
	centered?: boolean;
	big?: boolean;
	mask?: [string];
	inputRef?: (any) => any;
	disabled?: boolean;
	className?: string;
	onChange?: FormEvent;
	onBlur?: FormEvent;
	onFocus?: FormEvent;
}

class Input extends Component<Props> {
	input = null;

	setSelectionRange(selectionStart, selectionEnd, selectionDirection) {
		this.input.setSelectionRange(
			selectionStart,
			selectionEnd,
			selectionDirection
		);
	}

	blur() {
		this.input.blur();
	}

	select() {
		this.input.select();
	}

	focus() {
		this.input.focus();
	}

	_getRef = ref => {
		const { mask, inputRef } = this.props;

		const input = mask == null ? ref : ref.input;
		this.input = input;

		if (typeof inputRef === 'function') {
			inputRef(input);
		}
	};

	render() {
		// avoid passing inputRef and centered props to the DOM
		const {
			mask,
			className,
			inputRef,
			centered,
			label,
			placeholder,
			...rest
		} = this.props;

		const Input = () => {
			if (mask != null) {
				return (
					<TextMask
						className={className}
						componentRef={this._getRef}
						Component={InputAdapter}
						mask={mask}
						{...rest}
					/>
				);
			}

			return (
				<input
					placeholder={placeholder}
					className={className}
					ref={this._getRef}
					{...rest}
				/>
			);
		};

		return (
			<label>
				{label && (
					<Heading bold darkGray size="S">
						{label}
					</Heading>
				)}
				<Input />
			</label>
		);
	}
}

const StyledInput = styled(Input)`
	color: ${colors.darkGray};
	font-size: ${fontSize.M};
	//font-weight: 700;
	width: 100%;
    padding-left: 20px;
 	padding-right: 20px;
 	height: ${props => (props.big ? '55px' : '35px')};
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.16);
 	border-radius: 3px;
 	border: 1px solid ${colors.lighterGray};
 	text-align: ${props => (props.centered ? 'center' : 'auto')};
 	vertical-align: middle;
 	outline: none;
    :focus {
    	background-color: ${colors.white};
    	border: 1px solid ${colors.darkGray};
    }
 	:disabled {
 		background-color: ${darken(0.1, colors.white)};
 	},
`;

export default StyledInput;
