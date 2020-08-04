import React from 'react';
import Icon from '@material-ui/core';
import Datepicker from './Datepicker/Datepicker'
import ContentRouter from './ContentRouter';

export default function App() {

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

