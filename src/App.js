import React from 'react';
import Datepicker from './Datepicker/Datepicker'
import ContentRouter from './ContentRouter';
import Header from "./Header/Header"
import OrganisationViewer from "./OrganisationViewer";
import Icon from '@material-ui/core';
import ProxyJSON from "./ProxyJSON";

let temporaryJSON = ProxyJSON()

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date()
    }
  }
  onDateChange(date) {
    this.setState({chosenDate: date});
  }

  loadOrganisation = (organisationID) => {
        console.log("Print from App.js " + organisationID)
  };

    render() {return (
        <div>
          <Header chosenDate={this.state.chosenDate}></Header>
            <ContentRouter />
            <Datepicker onChange={this.onDateChange.bind(this)} label="Datum auswählen:"></Datepicker>
            <OrganisationViewer chosenOrganisation={this.loadOrganisation} organisations={temporaryJSON.organisations}/>
        </div>

    );
    }

  
} export default App;
