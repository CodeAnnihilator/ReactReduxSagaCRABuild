import React from 'react';
import {Trans} from 'react-i18next';

import styles from './app.module.scss';

const App = ({
	testData,
	testAction,
}: any) => (
	<div onClick={testAction} className={styles.app}>
		{testData}
		<Trans i18nKey='test' />
	</div>
);

export default App;
