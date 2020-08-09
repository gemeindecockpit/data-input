import React from 'react';
import ReactDOM from 'react-dom'

import App from './App';

import {isElement} from 'react-dom/test-utils'

test('Is App react?', () => {
  isElement(<App/>)
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div)
})
