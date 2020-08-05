import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import UserLogin from './UserLogin';
import Datepicker from './Datepicker/Datepicker';
import OrganisationViewer from './OrganisationViewer';
import InputFields from './InputFields';

export class ContentRouter extends Component {

    onDateChange = (unixTimestamp) => {
        this.props.onDateChange(unixTimestamp)
    }

    chooseOrganisation = (orgId) => {
        console.log(this.props.chooseOrganisation)
        this.props.chooseOrganisation(orgId)
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={UserLogin} />                    
                    <Route path="/organisations/:orgId/:date" component={InputFields} />
                    <Route path="/organisations/:orgId" component={(props) => <Datepicker {...props} onDateChange={this.onDateChange}/>} />
                    <Route path="/organisations" component={(props) => <OrganisationViewer {...props} chooseOrganisation={this.chooseOrganisation}/>} />
                    <Route path="/" component={OrganisationViewer} />
                </Switch>
            </Router>
        )
    }
}

export default ContentRouter
