import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import initFelaProvider from './initFela';
// import theme from '../src/universal/lib/fela/theme'

// import { Button } from '../src/universal/components/';

const FelaProvider = initFelaProvider();

storiesOf('Button', module)
	.addDecorator(FelaProvider)
	.add('with text', () => <h1>TEST</h1>);

{
	/* <Button */
}
{
	/* onClick={action('clicked')} */
}
{
	/* type="transparentDark" */
}
{
	/* theme={theme} */
}
{
	/* > */
}
{
	/* LOGIN */
}
{
	/* </Button> */
}
