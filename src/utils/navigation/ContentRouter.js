import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import IdleTimer from "react-idle-timer";
import UserLogin from '../../pages/login/UserLogin';
import OrganisationViewer from '../../pages/organisations/OrganisationViewer';
import OverviewScreen from '../../pages/datepicker/OverviewScreen';
import KpiEditor from '../../pages/kpi-editor/KpiEditor';
import Workflows from './../../enums/Workflows';
import Profile from '../../pages/profile/Profile';
import Password from '../../pages/profile/Password';
import ApiCalls from "../communication/ApiCalls";

export class ContentRouter extends Component {

    apiCalls = new ApiCalls();

    onDateChange = (unixTimestamp) => {
        this.props.onDateChange(unixTimestamp)
    }

    onIdle = () => {
        window.location.href = '/logout';
        this.apiCalls.logout();
    }

    render() {
        return (
            <Router>
                <IdleTimer
                    onIdle={this.onIdle}
                    timeout={600000}/>
                <Switch>
                    <Route path="/login" component={UserLogin} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/password/:userid" component={Password} />
                    <Route path="/:workflow/organisations/:orgId/:date" component={KpiEditor} />
                    <Route path="/:workflow/organisations/:orgId" component={OverviewScreen} />
                    <Route path="/:workflow/organisations" component={OrganisationViewer} />
                    <Route path="/organisations" >
                        <Redirect to={"/" + Workflows.EDIT_KPI_VALUES.URL_PARAM + "/organisations"}/>
                    </Route>
                    <Route path="/" >
                        <Redirect to={"/login"}/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default ContentRouter
