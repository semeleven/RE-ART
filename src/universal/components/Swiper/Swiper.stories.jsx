import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { Swiper, Image } from '../../components';

storiesOf('Swiper', module).add('Swiper', () => (
	<Swiper>
		<Image
			width="300px"
			height="300px"
			hideLink
			imageSrc="https://cdn-images-1.medium.com/max/1319/1*LLQbi3xIoG7BehaeVBSMvA.jpeg"
		/>
	</Swiper>
));
