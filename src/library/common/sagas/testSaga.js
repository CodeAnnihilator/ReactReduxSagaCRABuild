import {takeLatest} from 'redux-saga/effects';

import * as types from '../types/testTypes';

function* testActionSaga() {
	yield true;
	console.log('here');
}

export default function* watchTest() {
	yield takeLatest(types.TEST_ACTION, testActionSaga)
}