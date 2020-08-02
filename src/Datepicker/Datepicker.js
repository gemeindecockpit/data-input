import React from 'react';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';


class Datepicker extends React.Component {

    constructor(props) {
        super(props);
        this.now = new Date();
    }

    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    variant="inline"
                    format="dd.MM.yyyy"
                    id="date-picker-inline"
                    label={this.props.label}
                    value={this.now}
                    onChange={this.props.onChange}
                    maxDate={this.now}
                />

            </MuiPickersUtilsProvider>
        )
    }
}

export default Datepicker;