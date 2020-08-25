import React from 'react';
import ReactDOM from 'react-dom';
import {act, isElement} from 'react-dom/test-utils';
import OverviewScreen from "../pages/datepicker/OverviewScreen";
import Datepicker from "../pages/datepicker/Datepicker";
import RecordViewer from "../pages/datepicker/RecordViewer";

let container

beforeAll(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
});

afterAll(() => {
    document.body.removeChild(container)
    container = null
});

describe('Testing OverviewScreen subcomponents', () => {

    it('Datepicker should be react element', () => {
        isElement(<Datepicker />)
    });

    it('RecordViewer should be react element', () => {
        isElement(<RecordViewer />)
    });

});

describe('Testing OverviewScreen component', () => {

    it('should be react element', () => {
        isElement(<OverviewScreen />)
    });

    it('can render and show record', () => {
        act(() => {
            ReactDOM.render(<OverviewScreen match={{
                params: {
                    orgId: "1"
                }
            }}/>, container)
        });
    });

});