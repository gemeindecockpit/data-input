import React from 'react';
import Icon from '@material-ui/core';
import Datepicker from './Datepicker/Datepicker'
import ContentRouter from './ContentRouter';
import OverviewScreen from "./OverviewScreen";

const record = [
    {
        id: 1,
        name: "Hallo",
        value: "hier"
    },
    {
        id: 2,
        name: "Wert",
        value: 22
    }
]

export default function App() {

  function onDateChange(date) {
    console.log(date);
  }

  return (
    <div>
      <ContentRouter />
      <OverviewScreen />
    </div>
  );
}

