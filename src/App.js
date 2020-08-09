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
        
    }
  }

  render() {
    return (
        <div style={{ backgroundImage: "linear-gradient(145deg, #02B497 0%, #006484 60%)", minHeight: "100vh" }}>
          <ContentRouter />
        </div>
    );
    }

  
} export default App;
