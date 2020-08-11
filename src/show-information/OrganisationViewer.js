import React from "react";
import OrganisationList from "./OrganisationList";
import Header from "../common/Header/Header";
import { getFullJSON } from "../communication/ProxyJSON";

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
        this.props.history.push("/organisations/" + orgID)
    }

    render() {
        return (
            <div>
                <Header chosenDate={new Date()} title="Organisationsauswahl"></Header>
                <OrganisationList chosenOrganisation={this.chooseOrganisation} data={this.state.organisations}/>
            </div>
            
        );
    }
}