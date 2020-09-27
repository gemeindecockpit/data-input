import React from "react";
import OrganisationList from "./OrganisationList";
import Header from "../../utils/header/Header";
import { getFullJSON } from "../../utils/communication/ProxyJSON";
import Workflows from "../../enums/Workflows";

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

    render() {
        return (
            <div>
                <Header chosenDate={new Date()} title="Organisationsauswahl" workflow={(this.props.match.params.workflow === Workflows.EDIT_KPI_VALUES.URL_PARAM) ? Workflows.EDIT_KPI_VALUES : Workflows.EDIT_COMPARE_VALUES}/>
                <OrganisationList chosenOrganisation={this.chooseOrganisation} data={this.state.organisations}/>
            </div>
            
        );
    }
}