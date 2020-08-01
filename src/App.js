import React from 'react';
import Header from "./Header"
import OrganisationViewer from "./OrganisationViewer";
import RecordViewer from "./RecordViewer";

const record = {
    name: "Record one",
    value: 2
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

