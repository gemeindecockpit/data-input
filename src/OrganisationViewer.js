import React from "react";
import OrganisationList from "./OrganisationList";

const temporaryJson = [{'name': 'Krankenhaus', 'id': 123}, {'name': 'Feuerwehr', 'id': 124}]

export default class OrganisationViewer extends React.Component {
    chooseOrganisation = (orgID) => {
        this.props.chosenOrganisation(orgID)
        console.log('print from Viewer' + orgID)
    }

    render() {
        return (
            <OrganisationList chosenOrganisation={this.chooseOrganisation} data={temporaryJson}/>
        )
    }
}