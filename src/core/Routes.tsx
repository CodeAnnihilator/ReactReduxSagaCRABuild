import React from 'react';
import {Route, Switch} from 'react-router-dom';

import App from 'pages/App';

const Routes = () => (
	<Switch>
		<Route path='/' component={App} />
	</Switch>
);

export default Routes;
