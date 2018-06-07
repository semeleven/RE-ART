import { createRenderer } from 'fela';
import { renderToMarkup } from 'fela-dom';

import unit from 'fela-plugin-unit';
import fallbackValue from 'fela-plugin-fallback-value';
import lvha from 'fela-plugin-lvha';
import prefixer from 'fela-plugin-prefixer';

const initializeRenderer = () => {
	const config = {
		plugins: [
			unit(),
			fallbackValue(),
			lvha(),
			prefixer(),
		],
	};

	const renderer = createRenderer(config);

	renderer.renderStatic(
		{
			margin: 0,
			padding: 0,
		},
		'html, body'
	);

	const files = ['../client/fonts/GothamMedium.ttf'];

	renderer.renderFont('Gotham', files);

	const styleMarkup = renderToMarkup(renderer);

	return {
		renderer,
		styleMarkup,
	};
};

export default initializeRenderer;
