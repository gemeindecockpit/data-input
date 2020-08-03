import React from 'react';
import Icon from '@material-ui/core';
import logo from './logo.svg';
import Datepicker from './Datepicker/Datepicker'
import ContentRouter from './ContentRouter';

function App() {

  function onDateChange(date) {
    console.log(date);
  }

  return (
    <div>
      <ContentRouter />
      <Datepicker onChange={onDateChange} label="Datum auswählen:"></Datepicker>
    </div>
  );
}

