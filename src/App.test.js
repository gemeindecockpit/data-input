import React from 'react';
import ReactDOM from 'react-dom'

import App from './App';

import { render } from '@testing-library/react';
import {isElement} from 'react-dom/test-utils'
import { is } from 'date-fns/locale';

test('Is App react?', () => {
  isElement(<App/>)
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div)
})
