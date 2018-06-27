import React, { PureComponent } from 'react';
import { Swiper } from '../../components';
import { Image } from './components';

// temporary
const mockImages = [
	{
		id: 0,
		url: 'https://pp.userapi.com/c7007/v7007477/37e0e/qbny9kC12nw.jpg',
	},
	{
		id: 1,
		url: 'https://pp.userapi.com/c626121/v626121279/24f1e/4TRbwyimQjU.jpg',
	},
	{
		id: 2,
		url: 'https://pp.userapi.com/c7008/v7008477/6bdb6/aRaLC8otx8E.jpg',
	},
];

export default class Spotlight extends PureComponent {
	render(): React.ReactNode {
		const renderSlides = () =>
			mockImages.map(item => <Image key={item.id} url={item.url} />);

		return <Swiper height={530}>{renderSlides()}</Swiper>;
	}
}
