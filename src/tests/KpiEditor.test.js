import React from 'react';
import ReactDOM from 'react-dom';
import {
    isElement,
    act,
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    findRenderedDOMComponentWithTag, findRenderedComponentWithType
} from 'react-dom/test-utils';
import InputBox from '../pages/kpi-editor/InputBox'
import InputFields from '../pages/kpi-editor/InputFields';
import ReviewScreen from '../pages/kpi-editor/ReviewScreen';
import KpiEditor from '../pages/kpi-editor/KpiEditor';
import {getValuesByOrgIdAndDate} from '../utils/communication/ProxyJSON';

let dataFor20200807

beforeAll(() => {
    dataFor20200807 = getValuesByOrgIdAndDate("1", new Date('2020-08-07'))
    console.log(dataFor20200807)
})

afterAll(() => {

})

describe('Testing KpiEditor subcomponents', () => {

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

    it('should render and display data for 2020-08-07', () => {
        act(() => {
            renderIntoDocument(<KpiEditor
                match={ {
                    params: {
                        orgId: "1",
                        date: new Date('2020-08-07').toTimeString()
                    }
                } }
            />)
        })
    });

    it('should contain data for 2020-08-07', () => {

        const component = renderIntoDocument(<KpiEditor
            match={ {
                params: {
                    orgId: "1",
                    date: new Date('2020-08-07').toTimeString()
                }
            } }
        />)
        findRenderedDOMComponentWithTag(component, 'InputFields')

    });

})