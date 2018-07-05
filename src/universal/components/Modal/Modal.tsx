import React, { Component } from 'react';
import enhanceWithClickOutside from 'react-click-outside';
import styled from '../../lib/styled';

interface ModalContainerProps {
	showModal: boolean
}

interface ModalProps {
	closeModal: () => void
}

const ModalContainer = styled.div`
	display: ${(props: ModalContainerProps) => props.showModal ? 'flex' : 'none'};
	position: ${(props: ModalContainerProps) => props.showModal && 'fixed' };
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	justify-content: center;
	align-items: center;
	background: rgba(0,0,0,0.3);
	z-index: 10;
	height: 100vh;
	opacity: ${(props: ModalContainerProps) => props.showModal ? '1' : '0'};
	transition: 150ms opacity ease-in-out;
`;

const ModalWrapper = styled.div`
    padding: 20px;
    background: #fff;
    border-radius: 2px;
    display: inline-block;
    min-height: 300px;
    margin: 1rem;
    position: relative;
    min-width: 300px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    justify-self: center;
`;

@enhanceWithClickOutside
export default class Modal extends Component<ModalProps & ModalContainerProps> {
	handleClickOutside() {
		this.props.closeModal();
	}

	render() {
		const { children, showModal } = this.props;

		return (
			<ModalContainer showModal={showModal}>
				<ModalWrapper>
					{children}
				</ModalWrapper>
			</ModalContainer>
		);
	}
}
