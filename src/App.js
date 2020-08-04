import React from 'react';
import Datepicker from './Datepicker/Datepicker'
import ContentRouter from './ContentRouter';
import Header from "./Header"
import OrganisationViewer from "./OrganisationViewer";
import Icon from '@material-ui/core';
import ProxyJSON from "./ProxyJSON";

let temporaryJSON = ProxyJSON()
export default function App() {

  function onDateChange(date) {
    console.log(date);
  }
    let loadOrganisation = (organisationID) => {
        console.log("Print from App.js " + organisationID)
    };

    return (
        <div>
            <Header/>
            <ContentRouter />
            
            <OrganisationViewer chosenOrganisation={loadOrganisation} organisations={temporaryJSON.organisations}/>
        </div>

    );
}

