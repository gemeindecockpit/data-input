import React from 'react';
import ReactDOM from 'react-dom';
import {act, isElement} from 'react-dom/test-utils';
import OverviewScreen from "../pages/datepicker/OverviewScreen";

let container

beforeAll(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
});

afterAll(() => {
    document.body.removeChild(container)
    container = null
});

describe('Testing OverviewScreen component', () => {

    it('Is react element', () => {
        isElement(<OverviewScreen />)
    })

    it('can render and show record', () => {
        act(() => {
            ReactDOM.render(<OverviewScreen match={ {
                params: {
                    orgId: "1"
                }
            } } />, container)
        })
    })

});


