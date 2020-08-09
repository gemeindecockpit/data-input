import React from 'react';
import Header from './Header.js';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';


import { isElement } from 'react-dom/test-utils'

test('Is Header react?', () => {
    isElement(<Header chosenDate={new Date()} />)
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header chosenDate={new Date()} />, div)
})

