import React from 'react'
import ReactDOM from 'react-dom'
import {
    isElement,
    act
} from 'react-dom/test-utils'

import ContentRouter from './ContentRouter';


let container;

beforeEach(()=>{
    container=document.createElement('div');
    document.body.appendChild(container);
});

afterEach(()=>{
    document.body.removeChild(container);
    container=null;
});

test('Is ContenRouter react element?', () => {
    isElement(<ContentRouter/>)
});

it('renders ContentRouter without crashing', () => {

    act(() => {
        ReactDOM.render(<ContentRouter/>, container);
    });

})
