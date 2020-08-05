import { render } from '@testing-library/react';
import OrganisatinViewer from './OrganisationViewer';
import {isElement} from 'react-dom/test-utils'
import { is } from 'date-fns/locale';

test('Is OrganisationViewer react element?', () => {
  isElement(<OrganisationViewer/>)
});
