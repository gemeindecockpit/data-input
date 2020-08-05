import React from 'react'
import ReactDOM from 'react-dom'

import OrganisationViewer from './OrganisationViewer';
import ProxyJSON from './ProxyJSON'

import {isElement} from 'react-dom/test-utils'
import { render } from '@testing-library/react';
import { is } from 'date-fns/locale';

test('Is OrganisationViewer react element?', () => {
  isElement(<OrganisationViewer/>)
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<OrganisationViewer/>, div)
  })
  