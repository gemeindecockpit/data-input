import React from 'react';
import ReactDOM from 'react-dom';
import {act, isElement} from 'react-dom/test-utils';
import OverviewScreen from "../pages/datepicker/OverviewScreen";
import {getOrganisationById, getValuesByOrgIdAndDate} from '../utils/communication/ProxyJSON'

let container,
    data_20200807

beforeAll(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    data_20200807 = getValuesByOrgIdAndDate("1", new Date("2020-08-07"))
});

afterAll(() => {
    document.body.removeChild(container)
    container = null
    data_20200807 = null
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
            } }/>, container)
        })
    })

    it('displays correct data for date', () => {
        console.log(container.querySelector('Datepicker'))
    })

});


