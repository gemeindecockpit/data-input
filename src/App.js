import React from 'react';
import ContentRouter from './ContentRouter';
import Header from "./Header/Header"
import OrganisationViewer from "./OrganisationViewer";
import OverviewScreen from "./OverviewScreen";
import Icon from '@material-ui/core';
import { getFullJSON } from "./ProxyJSON";

const temporaryJSON = getFullJSON()

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        orgId: null,
        chosenDate: new Date(),
        currentRecord: null
    }
  }

  onDateChange = (unixTimestamp) => {
    this.setState({ chosenDate: new Date(unixTimestamp) })
  }

  chooseOrganisation = (id) => {
      this.setState({orgId: id})
  }

  render() {
    return (
        <div style={{ backgroundImage: "linear-gradient(145deg, #02B497 0%, #006484 60%)", height: "100vh" }}>
          <Header chosenDate={this.state.chosenDate} chooseOrganisation={this.state.orgId}></Header>
          <ContentRouter onDateChange={this.onDateChange} chooseOrganisation={this.chooseOrganisation}/>
        </div>
    );
    }

  
} export default App;
