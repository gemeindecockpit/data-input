import React from 'react';
import Datepicker from './Datepicker.js';
import ReactDOM from 'react-dom';
import { render, fireEvent, screen } from '@testing-library/react';


import {isElement} from 'react-dom/test-utils'

test('Is Datepicker react?', () => {
    const onDateChange = (date) => {

    }
  isElement(<Datepicker onDateChange={onDateChange} />)
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  /*onDateChange = (date) => {
      console.log("hallo bitte " + date);
  }*/
  const onDateChange = jest.fn();
  render(<Datepicker onDateChange={onDateChange} />, div)
  fireEvent.click(screen.getByRole('button'));
  fireEvent.click(screen.getAllByText('1', {exact: true})[1].closest('button'));
  screen.debug(screen.getAllByText('1', {exact: true}).pop().closest('button'));
  expect(onDateChange).toHaveBeenCalled();
  expect(1).toBe(1);
  //screen.debug();
})

it('blah', () => {
    //const container = render(<Datepicker onDateChange={onDateChange} />);


})
