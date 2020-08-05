import React from "react";
import OrganisationList from "./OrganisationList";
import { getFullJSON } from "./ProxyJSON";

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
        console.log(temporaryJson.organisations)
    }

    /**
     * callback method to hand the information of the chosen organisation as its ID to the parent class
     * @param orgID
     */
    chooseOrganisation = (orgId) => {
        console.log(this.props)
        this.props.chooseOrganisation(orgId);
        this.props.history.push("/organisations/" + orgId)
    }

    render() {
        return (
            <OrganisationList chosenOrganisation={this.chooseOrganisation} data={this.state.organisations}/>
        );
    }
}