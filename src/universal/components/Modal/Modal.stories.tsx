import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { Modal } from '../../components';

const noop = () => {};

storiesOf('Modal', module).add('modal', () => (
	<Modal showModal toggleModal={noop} handleReset={noop}>
		MODAL
	</Modal>
));
