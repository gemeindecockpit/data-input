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
        this.state = {
            chosenDate: new Date()
          };
    }

    onDateChange(date) {
        this.setState({chosenDate: date});
        this.props.onChange(date);
    }

    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    variant="inline"
                    format="dd.MM.yyyy"
                    id="date-picker-inline"
                    label={this.props.label}
                    value={this.state.chosenDate}
                    onChange={this.onDateChange.bind(this)}
                    maxDate={new Date()}
                />

            </MuiPickersUtilsProvider>
        )
    }
}

export default Datepicker;