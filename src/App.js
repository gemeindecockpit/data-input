import React from 'react';
import Datepicker from './Datepicker/Datepicker'
import ContentRouter from './ContentRouter';
import Header from "./Header/Header"
import OrganisationViewer from "./OrganisationViewer";
import Icon from '@material-ui/core';
import { getFullJSON } from "./ProxyJSON";

let temporaryJSON = getFullJSON()

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
        <div style={{ backgroundImage: "linear-gradient(145deg, #02B497 0%, #006484 60%)", height: "100vh" }}>
          <Header chosenDate={this.state.chosenDate}></Header>
          <ContentRouter />
        </div>

    );
    }

  
} export default App;
