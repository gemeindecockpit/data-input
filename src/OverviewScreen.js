import React, {Component} from 'react';
import Datepicker from "./Datepicker/Datepicker";
import RecordViewer from "./RecordViewer";

const set1 = [
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
const set2 = [
    {
        id: 1,
        name: "Hallo",
        value: "hier"
    },
    {
        id: 2,
        name: "2. satz daten",
        value: 22
    }
]

const today = new Date();

class OverviewScreen extends Component {

    render() {
        return (
            <div>
                <Datepicker onChange={ this.setRecord } label="Datum auswählen:"/>
                <RecordViewer recordToShow={ this.props.recordToShow }/>
            </div>
        );
    }
}

export default OverviewScreen;