import React from "react";
import OrganisationList from "./OrganisationList";
import ProxyJSON from "./ProxyJSON";

let temporaryJson = ProxyJSON();

export default class OrganisationViewer extends React.Component {

    constructor(props) {
        super(props);
        this.state={organisations:temporaryJson.organisations};
    }

    componentDidMount() {
        /* RemoteApiCall*/
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.organisations!==this.state.organisations){
    //         this.setState({organsisations:nextProps.organisations})
    //     }
    // }
    static getDerivedStateFromProps(nextProps, prevState){

        return null;
        // if(nextProps.organisations!==prevState.organisations){
        //     return {organisations : nextProps.organisations};
        // }
        // else return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.organisations!==this.state.organisations){
            this.setState({organisations:prevState.organisations})
        }
    }

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