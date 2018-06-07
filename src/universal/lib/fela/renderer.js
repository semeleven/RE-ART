import { createRenderer } from 'fela';
import { renderToMarkup } from 'fela-dom';

const initializeRenderer = () => {
	const renderer = createRenderer();

	renderer.renderStatic(
		{
			margin: 0,
			padding: 0,
		},
		'html, body'
	);

	const files = [
		'../client/fonts/GothamMedium.ttf',
	];

	renderer.renderFont('Gotham', files, { fontWeight: 700 });

	const styleMarkup = renderToMarkup(renderer);

	return {
		renderer,
		styleMarkup,
	};
};

export default initializeRenderer;