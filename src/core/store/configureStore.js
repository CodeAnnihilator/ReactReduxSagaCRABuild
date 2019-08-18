import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import coreReducer from '../coreReducer';

export default function configureStore(initialState = {}) {
	return createStore(
		coreReducer,
		composeWithDevTools(applyMiddleware(
			
		))
	);
}