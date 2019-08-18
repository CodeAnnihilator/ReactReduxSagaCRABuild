import React from 'react';
import {Trans} from 'react-i18next';

import HeaderFrame from './Frames/HeaderFrame/';

import styles from './app.module.scss';

interface IApp {
	isToggled: boolean;
	data: string;
	testAction: () => void;
	testActionWithData: (data: string) => void;
}

const App: React.FC<IApp> = ({
	isToggled,
	data,
	testAction,
	testActionWithData,
}: IApp) => (
	<div className={styles.app}>
		<HeaderFrame />
		<br />
		<div onClick={() => testAction()}>
			{data}{isToggled ? '+' : '-'}
		</div>
		<br />
		<div onClick={() => testActionWithData('new data')}>
			<Trans i18nKey='test' />
		</div>
	</div>
);

export default App;
