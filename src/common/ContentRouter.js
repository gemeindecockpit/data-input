import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserLogin from '../communication/UserLogin';
import OrganisationViewer from '../show-information/OrganisationViewer';
import OverviewScreen from '../show-information/OverviewScreen';
import KpiEditor from '../input-data/KpiEditor';

export class ContentRouter extends Component {

    onDateChange = (unixTimestamp) => {
        this.props.onDateChange(unixTimestamp)
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={UserLogin} />
                    <Route path="/organisations/:orgId/:date" component={KpiEditor} />
                    <Route path="/organisations/:orgId" component={OverviewScreen} />
                    <Route path="/organisations" component={OrganisationViewer} />
                    <Route path="/" component={OrganisationViewer} />
                </Switch>
            </Router>
        )
    }
}

export default ContentRouter
