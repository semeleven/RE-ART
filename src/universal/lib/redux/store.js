import { createStore, compose } from 'redux';

import { persistStore } from 'redux-persist';

import reducers from './reducers';

const createNewStore = (preloadedState = null) => {
	// TODO: redux-persist doesn't work if I pass initial state to the store
	// const initialState = preloadedState == null ? {} : preloadedState;

	const store = createStore(
		reducers,
		{},
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
