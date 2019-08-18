import {connect} from 'react-redux';

import {testAction} from 'library/common/actions/testActions';

import App from './App';

const mapStateToProps = () => ({
	testData: 'asd',
});

export default connect(mapStateToProps, {
	testAction,
})(App);
