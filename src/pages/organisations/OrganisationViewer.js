import React from "react";
import OrganisationList from "./OrganisationList";
import Header from "../../utils/Header";
import ApiCalls from "../../utils/communication/ApiCalls";
import {LinearProgress} from "@material-ui/core";

export default class OrganisationViewer extends React.Component {
    apiCalls = new ApiCalls("");

    state = {
        loading: true,
        organisation: []
    }

    /**
     * sets the state into a default configuration.
     * @param props
     */
    constructor(props) {
        super(props);
        this.apiCalls.getData().then((res) => {
            (this.setState({organisation: res.data.organisations, loading: false}))
        })
    };

    /**
     * callback method to hand the information of the chosen organisation as its ID to the parent classe
     * @param orgID
     */
    chooseOrganisation = (orgID) => {
        this.props.history.push(window.location.pathname + "/" + orgID)
    }

    onWorkflowChange = (workflowUrlParam) => {
        this.props.history.push("/" + workflowUrlParam + "/organisations")
    }

    render() {
        return (
            <React.Fragment>
                {this.state.loading
                    ? <LinearProgress/>
                    :
                    <div>
                        <Header chosenDate={new Date()} title="Organisationsauswahl" workflow={this.props.match.params.workflow} onWorkflowChange={this.onWorkflowChange}/>
                        <OrganisationList chosenOrganisation={this.chooseOrganisation} data={this.state}/>
                    </div>
                }
            </React.Fragment>
        );
    }
}