import React from "react";
import OrganisationList from "./OrganisationList";
import Header from "../../utils/Header";
import ApiCalls from "../../utils/communication/ApiCalls";
import {LinearProgress} from "@material-ui/core";
import PasswordReminder from "../user-management/PasswordChangeRequiredPopUp";

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
        this.state={
            organisations: temporaryJson.organisations
        };
    }

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

    redirectProfilePage = () => {
        this.props.history.push("login");
    }
/** user properties from API call should be used here */
    render() {
        return (
            <React.Fragment>
                <Header chosenDate={new Date()} title="Organisationsauswahl" workflow={this.props.match.params.workflow} onWorkflowChange={this.onWorkflowChange}/>
                {this.state.loading
                    ? <LinearProgress/>
                    :
                    <div>
                        <OrganisationList chosenOrganisation={this.chooseOrganisation} data={this.state}/>
                        <PasswordReminder pwResetRequired = {true} redirectProfilePage={this.redirectProfilePage}/>

                    </div>
                }
            </React.Fragment>
        );
    }
}