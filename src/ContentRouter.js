import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import UserLogin from './UserLogin';
import Datepicker from './Datepicker/Datepicker';
import OrganisationViewer from './OrganisationViewer';
import InputFields from './InputFields';

export class ContentRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={UserLogin} />                    
                    <Route path="/organisations/:orgId/:date" component={InputFields} />
                    <Route path="/organisations/:orgId" component={Datepicker} />
                    <Route path="/organisations" component={OrganisationViewer} />
                    <Route path="/" component={OrganisationViewer} />
                </Switch>
            </Router>
        )
    }
}

export default ContentRouter
