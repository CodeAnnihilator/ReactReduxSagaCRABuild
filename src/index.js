import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from 'core/store/configureStore';

import App from './pages/App';

import * as serviceWorker from './serviceWorker';

import 'resources/styles/index.scss';

ReactDOM.render(
	<Provider store={configureStore()}>
		<App />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
