import React from 'react';

import styles from './app.module.scss';

const App = ({
	testData,
	testAction,
}: any) => (
	<div onClick={testAction} className={styles.app}>
		{testData}
	</div>
);

export default App;
