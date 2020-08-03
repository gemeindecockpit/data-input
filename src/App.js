import React from 'react';
import Header from "./Header"
import OrganisationViewer from "./OrganisationViewer";
import RecordViewer from "./RecordViewer";

const record = [
    {
        id: 1,
        name: "Hallo",
        value: "hier"
    },
    {
        id: 2,
        name: "Wert",
        value: 22
    }
]

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

