import React from 'react';
import Header from "./Header"
import OrganisationViewer from "./OrganisationViewer";
import RecordViewer from "./RecordViewer";

const record = {
    name: "Record one",
    value: 2,
    firstName: "James",
    lastName: "Bond",
    age: 15,
    "version": "0.1.0",
    "private": true,
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
}

export default function App() {
    let printID = (dataFromChild)=>{
        console.log("Print from App" +dataFromChild)
    };

    return (
        <div>
            <Header/>
            <RecordViewer recordToShow={record}/>
        </div>

    );
}

