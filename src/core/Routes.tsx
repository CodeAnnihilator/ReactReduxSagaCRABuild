import React from 'react';
import {Route, Switch} from 'react-router-dom';

import App from 'pages/App';

const Routes = () => (
	<Switch>
		<Route exact path='/' component={App} />
		<Route path='/test' render={() => <div>test route</div>} />
	</Switch>
);

export default Routes;
