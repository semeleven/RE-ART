import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import { Icon } from '../../components';

storiesOf('Icon', module)
	.add('account', () => <Icon icon="account" />)
	.add('cart', () => <Icon icon="cart" />)
	.add('hamburger', () => <Icon icon="hamburger" />)
	.add('loading', () => <Icon icon="loading" absolute />)
	.add('logout', () => <Icon icon="logout" />)
	.add('notifications', () => <Icon icon="notifications" />)
	.add('plus', () => <Icon icon="plus" />)
	.add('question', () => <Icon icon="question" />)
	.add('search', () => <Icon icon="search" />);
