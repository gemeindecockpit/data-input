import React from "react";
import OrganisationList from "./OrganisationList";
import ProxyJSON from "./ProxyJSON";

const temporaryJson = ProxyJSON()

export default class OrganisationViewer extends React.Component {
    chooseOrganisation = (orgID) => {
        this.props.chosenOrganisation(orgID)
        console.log('print from Viewer' + orgID)
    }

    render() {
        return (
            <OrganisationList chosenOrganisation={this.chooseOrganisation} data={temporaryJson.organisations}/>
        )
    }
}