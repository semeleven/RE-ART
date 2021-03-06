import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

// this is *.js file, because redux-persist's storage is not properly typed
// TODO: submit the issue
import storage from 'redux-persist/lib/storage/session';

import UserReducer from './User/UserReducer';
import LayoutReducer from './Layout/LayoutReducer';

const persistConfig = {
	key: 'root',
	storage,
	debug: true,
	// whitelist: ['userReducer', 'cart'], // only userData reducer will be persisted
};

const persistedUserReducer = persistReducer(persistConfig, UserReducer);

export default combineReducers({
	userReducer: persistedUserReducer,
	layout: LayoutReducer,
});
