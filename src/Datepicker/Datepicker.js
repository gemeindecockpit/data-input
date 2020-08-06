import React from 'react';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import { MuiThemeProvider, createMuiTheme, withStyles, Button } from '@material-ui/core';


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
                <MuiThemeProvider theme={theme}>
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
                    
                </MuiThemeProvider>
            </div>
            
        )
    }
}

const CustomButton = withStyles((theme) => ({
    root: {
        width: "100%",
        marginTop: "40px",
        marginLeft: "25px",
        marginRight: "25px",
        border: '1px solid #ced4da',
        borderRadius: 17,
        borderColor: "#FFFFFF",
        color: "#FFFFFF",
        backgroundColor: "#FFFFFF80",
        '&:hover': {
            borderColor: theme.palette.getContrastText("#00546F"),
            backgroundColor: "#00546F",
        },
    },
}))(Button);

const theme = createMuiTheme({
    overrides: {
        MuiInput: {
            root: {
                color: "white",
            },
            underline: {
                "&:before": {
                    borderBottom: "1px solid white"
                }
            }
        },
        MuiIconButton: {
            root: {
                color: "white"
            }
        },
        MuiPickersToolbar:{
            toolbar: {
                backgroundImage: "linear-gradient(145deg, #02B497 0%, #006484 60%)"
            }
        },
        MuiPickersDay: {
            daySelected: {
                backgroundColor: "#006484"
            }
        }
    }
});

export default Datepicker;