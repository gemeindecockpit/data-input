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
        chosenDate: new Date(),
        currentRecord: null
    }
  }

  onDateChange = (unixTimestamp) => {
    this.setState({ chosenDate: new Date(unixTimestamp) })
  }

  render() {
    return (
        <div style={{ backgroundImage: "linear-gradient(145deg, #02B497 0%, #006484 60%)", height: "100vh" }}>
          <Header chosenDate={this.state.chosenDate}></Header>
          <ContentRouter onDateChange={this.onDateChange}/>
        </div>
    );
    }

  
} export default App;
