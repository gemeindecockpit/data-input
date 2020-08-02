import React from 'react';
import Icon from '@material-ui/core';
import logo from './logo.svg';
import Datepicker from './Datepicker/Datepicker'

function App() {

  function onDateChange(date) {
    console.log(date);
  }

  return (
    <Datepicker onChange={onDateChange} label="Datum auswählen:"></Datepicker>
  );
}

export default App;
