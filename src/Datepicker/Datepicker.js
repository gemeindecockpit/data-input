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
        this.setState({chosenDate: date});
        this.props.onDateChange(date.getTime() / 1000);
    }

    render() {
        return (
            <div>
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
        MuiInput: {
            root: {
                color: "white",
            },
            underline: {
                "&:before": {
                    borderBottom: "1px solid white",
                },
                "&:after": {
                    borderBottom: "1px solid black"
                }
            }
        },
        MuiFormLabel: {
            root: {
                color: "white",
                "&$focused": {
                    color: "white"
                }
            }
        },
        MuiIconButton: {
            root: {
                color: "white",
            }
        },
        MuiPickersToolbar: {
            toolbar: {
                backgroundImage: "linear-gradient(145deg, #02B497 0%, #006484 60%)"
            },
        },
        MuiPickersCalendarHeader: {
            switchHeader: {
                backgroundColor: "#F3F3F3",
                color: "#006484",
            },
            iconButton: {
                color: "#006484",
                backgroundColor: "transparent"
            }
        },
        MuiPickersDay: {
            day: {
                color: "#006484",
            },
            daySelected: {
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