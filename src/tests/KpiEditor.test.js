import React from 'react';
import ReactDOM from 'react-dom';
import {isElement, act} from 'react-dom/test-utils';
import InputBox from '../pages/kpi-editor'
import InputFields from '../pages/kpi-editor/InputFields';
import ReviewScreen from '../pages/kpi-editor/ReviewScreen';
import KpiEditor from '../pages/kpi-editor/KpiEditor';

let container

beforeAll(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterAll(() => {
    document.body.removeChild(container)
    container = null
})

describe('Testing KpiEditor subcomponents', () => {

    it('InputBox should be react element', () => {
        isElement(<InputBox />)
    });

    it('InputFields should be react element', () => {
        isElement(<InputFields />)
    });

    it('ReviewScreen should be react element', () => {
        isElement(<ReviewScreen />)
    });

});

describe('Testing KpiEditor component', () => {

    it('should be react element', () => {
        isElement(<KpiEditor />)
    });

    it('should render', () => {
        act(() => {
            ReactDOM.render(<KpiEditor />, container)
        })
    });

})