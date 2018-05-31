import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import { Helmet } from 'react-helmet';


import Routes from '../universal/Routes.jsx';

export default ({ clientStats }) => (req, res) => {
	const helmet = Helmet.renderStatic();

	const site = req.hostname.split('.')[0];
	const context = { site };

	const { js, styles } = flushChunks(clientStats, {
		chunkNames: flushChunkNames(),
	});

	// let bundles = getBundles(stats, modules);
	const App = () => renderToString(
		<StaticRouter location={req.url} context={context}>
			<Routes />
		</StaticRouter>
	);

	return res.send(`
		<html ${helmet.htmlAttributes.toString()}>
			<head>
				${helmet.title.toString()}
            	${helmet.meta.toString()}
            	${helmet.link.toString()}
				${styles}
			</head>
        	<body ${helmet.bodyAttributes.toString()}>
                <div id='react-root'>
				    <App />
				</div>
				${js}
			</body>
		</html>
  	`);
};
