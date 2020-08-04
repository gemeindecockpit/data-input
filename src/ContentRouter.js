import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import UserLogin from './UserLogin';
import InputFields from './InputFields';

export class ContentRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={UserLogin} />
                    <Route path="/organisation/:id" component={InputFields} />
                    <Route path="/" component={UserLogin} />
                </Switch>
            </Router>
        )
    }
}

export default ContentRouter
