import React, { Component } from 'react';
import { TextMask, InputAdapter } from 'react-text-mask-hoc';
import styled from '../../lib/styled';

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
interface Props {
	type: 'text' | 'email' | 'number' | 'password' | 'search';
	centered?: boolean;
	mask?: [string];
	inputRef?: (any) => any;
	disabled?: boolean;
	className?: string;
}

class Input extends Component<Props> {
	input = null;

	// static defaultProps = {
	// 	type: 'text',
	// 	centered: false,
	// 	mask: null,
	// 	inputRef: null,
	// 	disabled: false,
	// };

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
		const { mask, className, centered, inputRef, ...rest } = this.props;

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

		return <input className={className} ref={this._getRef} {...rest} />;
	}
}

const StyledInput = styled(Input)`
	color: black;
	font-size: 18;
	font-weight: 700;
	width: 100%;
`;

export default StyledInput;
