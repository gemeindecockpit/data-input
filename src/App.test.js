import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {isElement} from 'react-dom/test-utils'
import { is } from 'date-fns/locale';
import ReactDOM from 'react-dom'

test('Is App react?', () => {
  isElement(<App/>)
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div)
})
