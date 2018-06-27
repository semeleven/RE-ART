import React from 'react';
import Slider from 'react-id-swiper';
import { Row, Col } from '../../components';

interface Props {
	slidesPerView?: number
	height: number
	spaceBetween?: number
}

const Swiper: React.SFC<Props> = ({ children, slidesPerView, height, spaceBetween }) => {
	const SliderParams = {
		containerClass: 'swiper',
		spaceBetween,
		slidesPerView,
		height,
	};

	return (
		<Row>
			<Col size={12}>
				<Slider {...SliderParams}>
					{children}
				</Slider>
			</Col>
		</Row>
	);
};

Swiper.defaultProps = {
	spaceBetween: 50,
	slidesPerView: 1,
};

export default Swiper;