import React from 'react'
import ReactDOM from 'react-dom'
import {
    isElement,
    act
} from 'react-dom/test-utils'

import DenseAppBar from './Header';

import Header from "./Header";

let container;

beforeEach(()=>{
    container=document.createElement('div');
    document.body.appendChild(container);
});

afterEach(()=>{
    document.body.removeChild(container);
    container=null;
});

test('Is Header react element?', () => {
    isElement(<DenseAppBar/>)
});

it('renders without crashing', () => {

    act(() => {
        ReactDOM.render(<Header chosenDate={new Date()} title="Organisationsauswahl"></Header>, container);
    });

})
