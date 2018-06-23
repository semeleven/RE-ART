import { createStore, combineReducers, compose } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import userReducer from './reducers/userReducer';

const persistConfig = {
	key: 'primary',
	storage,
	whitelist: ['user'], // only userData reducer will be persisted
};

// const hasState = !!(!SERVER && window.__STATE__);

const createNewStore = (preloadedState = null) => {
	const initialState = preloadedState == null ? {} : preloadedState;

	const persistedReducer = persistReducer(persistConfig, userReducer);

	const store = createStore(
		combineReducers({
			user: persistedReducer,
		}),
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
