import React from 'react'
import ReactDOM from 'react-dom'

import OrganisationViewer from './OrganisationViewer';

import {isElement} from 'react-dom/test-utils'

test('Is OrganisationViewer react element?', () => {
  isElement(<OrganisationViewer/>)
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<OrganisationViewer/>, div)
  })
  