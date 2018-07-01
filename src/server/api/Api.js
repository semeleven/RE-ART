import axios from 'axios';
import bunyan from 'bunyan';

const logger = bunyan.createLogger({ name: 'RE-ART' });

export default class Api {
	/**
	 * @param baseURL {string}
	 * @param token {string}
	 */

	constructor(baseURL, token) {
		this.headers = {};

		this.baseURL = baseURL;
		this.token = token;

		this.instance = axios.create({
			baseURL,
			timeout: 10000,
		});
	}

	/**
	 * Запрос.
	 *
	 * @param opts {object}
	 * @param opts.method {string}
	 * @param opts.uri {string}
	 * @param opts.headers {object}
	 * @param opts.params {object}
	 * @param opts.body {object}
	 * @return {Promise}
	 */
	request(opts) {
		let options;
		if (opts) {
			options = {
				url: opts.uri,
				headers: {
					...this.headers,
					...opts.headers,
				},
				params: opts.params,
				data: opts.body,
				form: opts.form,
				method: opts.method || 'get',
			};
		} else {
			options = {
				url: `${this.baseURL}/`,
				method: 'get',
			};
		}
		logger.info(this.baseURL, options, 'requestLog');

		return this.instance({
			...options,
		})
			.then(response => {
				logger.info(response.data, 'responseLog');
				return response.data;
			})
			.catch(error => {
				logger.warn(error.request, error.message, 'requestErrorLog');
				if (/timeout/i.test(error.message)) {
					console.error(error.message, 'timeout!');
				}

				throw Error(JSON.stringify(error.response.data));
			});
	}
}
