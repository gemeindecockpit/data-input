import React from 'react';
import Icon from '@material-ui/core';
import logo from './logo.svg';
import Datepicker from './Datepicker/Datepicker'
import ContentRouter from './ContentRouter';
import Header from './Header/Header'

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
  render() {
    return (
      <div>
        <Header chosenDate={this.state.chosenDate}></Header>
        <ContentRouter />
        <Datepicker onChange={this.onDateChange.bind(this)} label="Datum auswählen:"></Datepicker>
      </div>
    );
  }
}

export default App;
