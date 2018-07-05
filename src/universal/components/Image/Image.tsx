import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from '../../lib/styled';
import { media } from '../../lib/styled/theme';

interface StyledImageProps {
	imageSrc: string;
	height?: string;
	width?: string;
	margin?: boolean;
}

interface ImageProps extends StyledImageProps {
	id?: string | number;
	hideLink?: boolean; // hide Link if it ain't list of products
}

const StyledImage = styled.div`
	${(props: StyledImageProps) => {
		const handleSize = (param): string => param || '100%';
		return css`
			overflow: hidden;
			height: ${handleSize(props.height)};
			width: ${handleSize(props.width)};
			background-image: url(${props.imageSrc});
			background-size: cover;
			background-position: center;
			margin-bottom: ${props.margin && '20px'};
			${media.tablet`
				height: ${props.height && '270px'}
			`};
			${media.mobile`
				height: ${props.height && '220px'}
			`};
			${media.small`
				height: ${props.height && '220px'}
			`};
		`;
	}};
`;

const Image: React.SFC<ImageProps> = ({
	// height,
	// width,
	// imageSrc,
	id,
	hideLink,
	children,
	...rest
}) => {
	const renderStyledImage = () => (
		<StyledImage {...rest}>
			{children}
		</StyledImage>
	);

	if (hideLink) {
		return renderStyledImage();
	}

	return (
		<Link to={`/product/${id}/`}>
			{renderStyledImage()}
		</Link>
	);
};

export default Image;
