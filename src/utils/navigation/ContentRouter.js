import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import UserLogin from '../../pages/login/UserLogin';
import OrganisationViewer from '../../pages/organisations/OrganisationViewer';
import OverviewScreen from '../../pages/datepicker/OverviewScreen';
import KpiEditor from '../../pages/kpi-editor/KpiEditor';
import Workflows from './../../enums/Workflows';

export class ContentRouter extends Component {

    onDateChange = (unixTimestamp) => {
        this.props.onDateChange(unixTimestamp)
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={UserLogin} />
                    <Route path="/:workflow/organisations/:orgId/:date" component={KpiEditor} />
                    <Route path="/:workflow/organisations/:orgId" component={OverviewScreen} />
                    <Route path="/:workflow/organisations" component={OrganisationViewer} />
                    <Route path="/" >
                        <Redirect to={"/" + Workflows.EDIT_KPI_VALUES.URL_PARAM + "/organisations"}/>
                    </Route>
                    <Route path="/" component={UserLogin} />

                </Switch>
            </Router>
        )
    }
}

export default ContentRouter
