import React, {Component} from 'react';
import Datepicker from "./Datepicker/Datepicker";
import RecordViewer from "./RecordViewer";

/**
 * Wrapper component for Datepicker that sets the date for chosen organization to show the correct record
 * if it's available and buttons for further actions like update or insert the record.
 */
class OverviewScreen extends Component {

    render() {
        return (
            <div>
                <Datepicker onDateChange={ this.props.onDateChange } label="Datum auswählen:"/>
                <RecordViewer recordToShow={ this.props.recordToShow }/>
            </div>
        );
    }

}

export default OverviewScreen;