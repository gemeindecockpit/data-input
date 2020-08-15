import React from 'react'
import ReactDOM from 'react-dom'
import {
    isElement,
    act
} from 'react-dom/test-utils'


import ActionButtons from "./ActionButtons";
import ActionButton from "./ActionButtons";

let container;
let clicked


beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

test('Is ActionButtons react element?', () => {
    isElement(<ActionButtons/>)
});

it('renders without crashing', () => {

    act(() => {
        ReactDOM.render(<ActionButtons
            btn_abort={{
                text: "Zurück",
                onClick: () => {
                    clicked = "Zurück"
            }
        }} btn_submit={{
                text: "Abschicken",
                onClick: () => {
                    clicked = "Abschicken"
                }
                                       }}/>, container);
    });
    const buttonAbort = container.querySelector('button');
    buttonAbort.dispatchEvent(new MouseEvent('click'));
})

