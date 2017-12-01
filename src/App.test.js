/** @format */
import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

test('renders without crashing', () => {
  shallow(<App />);
});
