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

    constructor(props) {
        super(props);
        this.state = {
            recordToShow: set1
        }
    }

    setRecord = date => {

        console.log(this)

        if (today === date) {

            this.setState({ recordToShow: set1 });

        } else {

            this.setState({ recordToShow: set2 });

        }

    }

    render() {
        return (
            <div>
                <Datepicker onChange={ this.setRecord } label="Datum auswählen:"/>
                <RecordViewer recordToShow={ this.state.recordToShow }/>
            </div>
        );
    }
}

export default OverviewScreen;