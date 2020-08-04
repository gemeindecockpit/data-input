import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {isElement} from 'react-dom/test-utils'
import { is } from 'date-fns/locale';

test('Is App react?', () => {
  isElement(<App/>)
});
