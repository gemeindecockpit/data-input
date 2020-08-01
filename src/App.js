import React from 'react';
import Header from "./Header"
import OrganisationViewer from "./OrganisationViewer";

export default function App() {
    let printID = (dataFromChild)=>{
        console.log("Print from App" +dataFromChild)
    };

    return (
        <div>
            <Header/>
            <OrganisationViewer printId={printID}/>
        </div>

    );
}

