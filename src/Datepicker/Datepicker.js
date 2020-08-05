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
        this.props.onDateChange(date.getTime());
        this.props.history.push("/organisations/" + this.props.match.params.orgId + "/" + date.getTime())
    }

    render() {
        return (
            <div style={{height: "60vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
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
            </div>
            
        )
    }
}

export default Datepicker;