import React, { PureComponent } from 'react';
import { Swiper } from '../../components';
import Slide from './components/Slide';
// import Image from './components/Image';

// temporary
const mockImages = [
	{
		id: 0,
		url: 'https://pp.userapi.com/c7007/v7007477/37e0e/qbny9kC12nw.jpg',
		type: 'painting',
		title: 'Lorem Ipsum',
	},
	{
		id: 1,
		url: 'https://pp.userapi.com/c626121/v626121279/24f1e/4TRbwyimQjU.jpg',
		type: 'painting',
		title: 'Lorem Ipsum',
	},
	{
		id: 2,
		url: 'https://pp.userapi.com/c7008/v7008477/6bdb6/aRaLC8otx8E.jpg',
		type: 'painting',
		title: 'Lorem Ipsum',
	},
];

export default class Spotlight extends PureComponent {
	render(): React.ReactNode {

		return (
			<Swiper height={530}>
				<Slide slides={mockImages} />
				{/*{mockImages.map(item => (*/}
					{/*<Image*/}
						{/*key={item.id}*/}
						{/*url={item.url}*/}
					{/*/>*/}
				{/*))}*/}
			</Swiper>
		);
	}
}
