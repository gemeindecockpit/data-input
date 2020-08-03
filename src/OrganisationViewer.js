import React from "react";
import OrganisationList from "./OrganisationList";

const temporaryJson = [{'name':'Krankenhaus', 'id':123}, {'name': 'Feuerwehr', 'id':124}]

export default class OrganisationViewer extends React.Component {
 printID =(value)=>{
     this.props.printId(value)
     console.log('print from Viewer' + value)
 }
    render() {
        return (
            <OrganisationList printID= {this.printID} data={ temporaryJson } />
        )
    }
}