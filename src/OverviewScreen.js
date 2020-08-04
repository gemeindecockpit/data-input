import React, {Component} from 'react';
import Datepicker from "./Datepicker/Datepicker";
import RecordViewer from "./RecordViewer";
import ActionButton from "./ActionButton/ActionButton";

/**
 * Wrapper component for Datepicker that sets the date for chosen organization to show the correct record
 * if it's available and buttons for further actions like update or insert the record.
 */
class OverviewScreen extends Component {

    onCancel() {
        console.log("CANCEL")
    }

    onSubmit() {
        console.log("SUBMIT")
    }

    render() {
        return (
            <div>
                <Datepicker onDateChange={ this.props.onDateChange } label="Datum auswählen:"/>
                <RecordViewer recordToShow={ this.props.recordToShow }/>
                <ActionButton
                    btn_left={ {
                        onClick: this.onCancel,
                        text: "Cancel"
                    } }
                    btn_right={ {
                        onClick: this.onSubmit,
                        text: "Submit"
                    } }
                />
            </div>
        );
    }

}

export default OverviewScreen;