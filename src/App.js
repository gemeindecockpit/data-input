import React from 'react';
import Header from "./Header"
import OrganisationViewer from "./OrganisationViewer";

export default function App() {
    let loadOrganisation = (organisationID) => {
        console.log("Print from App.js " + organisationID)
    };

    return (
        <div>
            <Header/>
            <OrganisationViewer chosenOrganisation={loadOrganisation}/>
        </div>

    );
}

