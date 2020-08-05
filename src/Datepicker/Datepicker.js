import React from 'react';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/styles";
import 'date-fns';


class Datepicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chosenDate: new Date()
        };
    }

    onDateChange(date) {
        this.setState({ chosenDate: date });
        this.props.onDateChange(date.getTime());
        this.props.history.push("/organisations/" + this.props.match.params.orgId + "/" + date.getTime())
    }

    render() {
        const { classes } = this.props;
        return (
            <div style={{ height: "60vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <ThemeProvider theme={muiTheme}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            variant="inline"
                            format="dd.MM.yyyy"
                            id="date-picker-inline"
                            label={this.props.label}
                            value={this.state.chosenDate}
                            onChange={this.onDateChange.bind(this)}
                            maxDate={new Date()}
                        //InputProps={{ className: classes.input }}
                        />
                    </MuiPickersUtilsProvider>
                </ThemeProvider>
            </div>

        )
    }


}
const muiTheme = createMuiTheme({
    overrides: {
        MuiPickersToolbar: {
            toolbar: {
                color: "#81CBBF",
                backgroundColor: "#81CBBF",
            },
        },
        MuiPickersCalendarHeader: {
            switchHeader: {
                backgroundColor: "#F3F3F3",
                color: "#006484",
            },
        },
        MuiPickersDay: {
            day: {
                color: "#006484",
            },
            daySelected: {
                color: "#006484",
                backgroundColor: "#81CBBF",
            },
            dayDisabled: {
                color: "#9B9B9B",
            },
            current: {
                color: "#FF0000",
            },
        },
        MuiPickersModal: {
            dialogAction: {
                color: "#00FF00",
            },
        },
    }

});

/* const styles = theme => ({
    input: {
        color: "black"
    },
    overrides: {
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: "#FFFFFF",
            },
        }
    }
}); */

export default Datepicker;