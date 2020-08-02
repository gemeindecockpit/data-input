import React from 'react';
/*<<<<<<< src/App.js*/
import Header from "./Header"
import OrganisationViewer from "./OrganisationViewer";
import Icon from '@material-ui/core';
import ContentRouter from './ContentRouter';

export default function App() {
    let loadOrganisation = (organisationID) => {
        console.log("Print from App.js " + organisationID)
    };

    return (
        <div>
            <Header/>
            <ContentRouter />
            <OrganisationViewer chosenOrganisation={loadOrganisation}/>
        </div>

    );
}
/*
=======
import Icon from '@material-ui/core';
import logo from './logo.svg';
import ContentRouter from './ContentRouter';

function App() {
  return ( 
    <ContentRouter />
  );
>>>>>>> src/App.js
}
*/