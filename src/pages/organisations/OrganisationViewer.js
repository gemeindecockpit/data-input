import React from "react";
import OrganisationList from "./OrganisationList";
import Header from "../../utils/Header";
import { getFullJSON } from "../../utils/communication/ProxyJSON";
import Divider from '../../utils/Divider';

const temporaryJson = getFullJSON();

export default class OrganisationViewer extends React.Component {
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

    render() {
        return (
            <div>
                <Header chosenDate={new Date()} title="Organisationsauswahl" workflow={this.props.match.params.workflow} onWorkflowChange={this.onWorkflowChange}/>
                <OrganisationList chosenOrganisation={this.chooseOrganisation} data={this.state.organisations}/>
            </div>
            
        );
    }
}