import React from 'react';
import Datepicker from './Datepicker.js';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';


import {isElement} from 'react-dom/test-utils'

test('Is Datepicker react?', () => {
    const onDateChange = (date) => {

    }
  isElement(<Datepicker onDateChange={onDateChange} />)
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  const onDateChange = (date) => {

  }
  ReactDOM.render(<Datepicker onDateChange={onDateChange} />, div)
})

it('blah', () => {
    const container = render(<Datepicker onDateChange={onDateChange} />);


})
