import {Box, FormControl, IconButton, InputLabel, Popover, Typography, InputBase, fade, TextField, OutlinedInput, InputAdornment, createMuiTheme} from '@material-ui/core';
import React, {Component} from 'react';
import { ThemeProvider, withStyles } from '@material-ui/styles';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

class PasswordField extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showPassword: false,
            borderColor: "white"
        };
    }

    handleClickShowPassword = () => {
        this.setState({showPassword: !this.state.showPassword});
    };

    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    render() {
        const classes = this.props.classes;
        const { placeholder } = this.props;
        return (
            <div className={classes.centeredDiv}>
                <ThemeProvider theme={muiTheme}>
                    <form autoComplete="off">
                        <div >
                            <OutlinedInput
                                id="outlined-adornment-password"
                                className={classes.textField}
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.password}
                                placeholder={placeholder}
                                onChange={this.props.handleChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={this.handleClickShowPassword}
                                            onMouseDown={this.handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {this.state.showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </div>
                    </form>
                </ThemeProvider>
            </div>
        );
    }
}

const muiTheme = createMuiTheme({
    overrides: {
        MuiTypography: {
            root: {
                color: "white"
            }
        },
        MuiFormLabel: {
            root: {
                color: "white",
                "&$focused": {
                    color: "white",
                },
            }
        },
        MuiOutlinedInput: {
            notchedOutline: {
                borderColor: "white",
            },
            root: {
                "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white"
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white"
                },
                borderRadius: 12,
                height: "55px"
            }
        }
    }
})

const styles = () => ({
    centeredDiv: {
        width: "100%",
        marginLeft: "25px",
        marginRight: "25px"
    },
    textField: {
        width: "100%"
    }
})

export default withStyles(styles)(PasswordField);
