import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from 'core/store/configureStore';
import configureI18n from 'core/i18n/configureI18n';

import App from './pages/App';

import 'resources/styles/index.scss';

async function render() {
	await configureI18n();
	ReactDOM.render((
		<Provider store={configureStore()}>
			<App />
		</Provider>
		),
		document.getElementById('root'),
	);
}

render();
