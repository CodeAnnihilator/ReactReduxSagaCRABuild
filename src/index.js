import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from 'core/store/configureStore';

import App from './pages/App';

import * as serviceWorker from './serviceWorker';

import './index.css';

ReactDOM.render(
	<Provider store={configureStore()}>
		<App />
	</Provider>,
	document.getElementById('root'));

serviceWorker.unregister();
