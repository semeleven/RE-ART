import styled, { css } from '../../../lib/styled';

interface Props {
	marginTop?: string;
	marginBottom?: string;
}

const StyledRow = styled.div`
	${(props: Props) =>
		css`
			width: 100%;
			max-width: 1200px;
			margin-left: auto;
			margin-right: auto;
			margin-top: ${props.marginTop && props.marginTop};
			margin-bottom: ${props.marginBottom && props.marginBottom};
			display: flex;
			flex-wrap: wrap;
			align-items: center;
		`};
`;

export default StyledRow;
