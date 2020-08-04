import React from 'react';
import ContentRouter from './ContentRouter';
import Header from "./Header/Header"
import OrganisationViewer from "./OrganisationViewer";
import ProxyJSON from "./ProxyJSON";
import OverviewScreen from "./OverviewScreen";

let temporaryJSON = ProxyJSON();

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        chosenDate: new Date(),
        currentRecord: null
    }
  }
  onDateChange(date) {
    this.setState({chosenDate: date});
  }

  loadOrganisation = (organisationID) => {
    // console.log("Print from App.js " + organisationID)
    let searchOrganisation = temporaryJSON.organisations.find(rec => rec.id === organisationID);
    this.setState({
        chosenDate: this.state.chosenDate,
        currentRecord: searchOrganisation !== undefined ? searchOrganisation.kennzahlen : null
    })
  };

    render() {return (
        <div>
          <Header chosenDate={this.state.chosenDate} />
          <ContentRouter />
          <OrganisationViewer chosenOrganisation={this.loadOrganisation} organisations={temporaryJSON.organisations}/><br />
          <OverviewScreen recordToShow={ this.state.currentRecord }  onDateChange={ this.onDateChange.bind(this) } /><br />
        </div>
    );
    }

  
} export default App;
