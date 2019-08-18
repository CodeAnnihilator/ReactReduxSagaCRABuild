import {combineReducers} from 'redux';

import testReducer from 'library/common/reducers/testReducer';

export default combineReducers({
	test: testReducer,
});