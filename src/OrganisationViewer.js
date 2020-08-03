import React from "react";
import OrganisationList from "./OrganisationList";
import ProxyJSON from "./ProxyJSON";

let temporaryJson = ProxyJSON();

export default class OrganisationViewer extends React.Component {
    /**
     * sets the state into a default configuration.
     * @param props
     */
    constructor(props) {
        super(props);
        this.state={organisations:temporaryJson.organisations};
    }

    /**
     * should later trigger the APICall, if not done before.
     * Later this method is not needed for APICalls as the UserAuthentication will return the Data needed to show all
     * relevant organisations
     */
    componentDidMount() {
        /* RemoteApiCall*/
    }

    /**
     * New lifecycle method replacing the old componentWillReceiveProps.
     * checks whether the new props are different from the previous state and returns the arguments with which
     * to update the stat.
     * @param nextProps
     * @param prevState
     * @returns {null|{organisations: {name: string, kennzahlen: [{name: string, "value-format": string, id: string, value: string}, {name: string, "value-format": string, id: string, value: string}, {name: string, "value-format": string, id: string, value: string}, {name: string, "value-format": string, id: string, value: string}], id: string}}}
     */
    static getDerivedStateFromProps(nextProps, prevState){

         if(nextProps.organisations!==prevState.organisations){
             return {organisations : nextProps.organisations};
         }
         else return null;
    }

    /**
     * sets the state of the component according to the return of getDerivedStateFromProps method
     * @param prevProps
     * @param prevState
     * @param snapshot
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.organisations!==this.state.organisations){
            this.setState({organisations:prevState.organisations})
        }
    }

    /**
     * callback method to hand the information of the chosen organisation as its ID to the parent classe
     * @param orgID
     */
    chooseOrganisation = (orgID) => {
        this.props.chosenOrganisation(orgID);
        console.log('print from Viewer' + orgID);
    }

    render() {
        return (
            <OrganisationList chosenOrganisation={this.chooseOrganisation} data={this.state.organisations}/>
        );
    }
}