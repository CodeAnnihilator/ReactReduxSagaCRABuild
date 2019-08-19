import React from 'react';
import renderer from 'react-test-renderer';
import HeaderFrame from '..';

describe('App', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(HeaderFrame())
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
