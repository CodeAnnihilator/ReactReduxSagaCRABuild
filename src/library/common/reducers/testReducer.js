import * as types from '../types/testTypes';

const initialState = {
	someData: 'test data'
}

export default (state = initialState, action) => {
	switch (action.type) {
	 case types.TEST_ACTION:
		return {
			someData: state.someData + '|'
		}
	 default:
		return state
	}
}