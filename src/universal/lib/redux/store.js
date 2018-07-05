import { createStore, compose } from 'redux';

import { persistStore } from 'redux-persist';

import reducers from './reducers/index';

const createNewStore = (preloadedState = null) => {
	const initialState = preloadedState == null ? {} : preloadedState;

	const store = createStore(
		reducers,
		{
			user: initialState,
		},
		compose(
			!process.env.SERVER &&
			typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
				? window.__REDUX_DEVTOOLS_EXTENSION__()
				: f => f
		)
	);

	const persistor = persistStore(store);

	return { store, persistor };
};

export default createNewStore;
