import {connect} from 'react-redux';

import {RootState} from 'core/store/configureStore';

import {
	testAction,
	testActionWithData,
} from 'library/common/actions/testActions';

import App from './App';

const mapStateToProps = (store: RootState) => ({
	isToggled: store.test.isToggled,
	data: store.test.data,
});

export default connect(mapStateToProps, {
	testAction,
	testActionWithData,
})(App);
