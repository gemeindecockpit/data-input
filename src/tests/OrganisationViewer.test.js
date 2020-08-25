import React from 'react';
import ReactDOM from 'react-dom';
import {isElement, act} from 'react-dom/test-utils';
import OrganisationList from '../pages/organisations/OrganisationList';
import OverviewScreen from '../pages/datepicker/OverviewScreen';

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

    it('OrganisationList should be react component', () => {
        isElement(<OrganisationList />)
    });

});

describe('Testing OverviewScreen component', () => {

    it('should render', () => {
        act(() => {
            ReactDOM.render(<OverviewScreen
                match={ {
                    params: {
                        orgId: "1"
                    }
                } }
            />, container)
        })
    });

});