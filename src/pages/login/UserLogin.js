import React, {Component} from 'react';
import {
    withStyles,
    TextField,
    createMuiTheme,
    IconButton,
    InputAdornment,
    ThemeProvider,
    Typography,
    OutlinedInput, LinearProgress
} from '@material-ui/core';
import gcLogo from '../../resources/logo_gemeindecockpit_white.svg';
import CustomButton from '../../utils/control/CustomButton';
import ButtonThemes from '../../enums/ButtonThemes';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import WirVsViursImg from '../../resources/WirVsVirus.png';
import ApiCalls from '../../utils/communication/ApiCalls.js';
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';

export class UserLogin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            username: "",
            password: "",
            showPassword: false,
            borderColor: "white",
            severity: "error",
            snackbarOpen: false,
            errorMessage: ""
        };
        this.errorMessage401 = "Der Nutzername oder das Kennwort ist falsch.";
        this.errorMessage500 = "Das Backend konnte nicht erreicht werden.";
        this.errorMessageBackendDown = "Das Backend konnte nicht erreicht werden.";
    }

    apiCalls = new ApiCalls();

    componentDidMount() {
        this.apiCalls.logout().then(
            (response) => {
            }
        ).catch((err) => {
            console.error(err);
        })
    }

    onButtonClick = () => {
        this.setState({loading: true});
        this.apiCalls.login(this.state.username, this.state.password).then(
            (response) => {
                if(response.status === 200) {
                    //this.setState({severity: "success", snackbarOpen: true});
                    this.props.history.push("/organisations");
                }
                else{
                    console.error("Error: Request failed with status code 500")
                    this.props.history.push("/login");
                    this.setState({loading: false, borderColor: "red"});
                }
            }
        ).catch((error) => {
            this.setState({loading: false});
            if (error.response) {
                if (error.response.status === 401) {
                    this.setState({severity: "error", snackbarOpen: true, errorMessage: this.errorMessage401});
                } else if (error.response.status === 500) {
                    this.setState({severity: "error", snackbarOpen: true, errorMessage: this.errorMessage500});
                }
            } else {
                this.setState({severity: "error", snackbarOpen: true, errorMessage: this.errorMessageBackendDown});
            }
            
            console.error(error)
            
        });
            
            
    }

    handleUsernameChange = (event) => {
        this.setState({username: event.target.value})
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    handleClickShowPassword = () => {
        this.setState({showPassword: !this.state.showPassword});
    };

    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({snackbarOpen: false});
    };

    checkSeverity = () => {
        if (this.state.severity === "success") {
            return this.successMessage;
        } else { return this.errorMessage; }
    }

    render() {
        const classes = this.props.classes
        const {loading} = this.state
        if(loading){
            return(
                <React.Fragment>
                    <div className={classes.headerDiv}>
                        <img alt="" src={WirVsViursImg} className={classes.headerImg}/>
                    </div>
                    <LinearProgress/>
                </React.Fragment>
            )
        }
        return (
            <div>
                <ThemeProvider theme={muiTheme}>
                    <div className={classes.headerDiv}>
                        <img alt="" src={WirVsViursImg} className={classes.headerImg}/>
                    </div>
                    <div className={classes.centeredDiv}>
                        <img alt="" src={gcLogo} className={classes.gcLogo}/>
                    </div>
                    <div className={classes.centeredDiv} style={{marginTop: "10px"}}>
                        <Typography variant="h4">
                            Gemeinde Cockpit
                        </Typography>
                    </div>
                    <form autoComplete="off">
                        <div className={classes.centeredDiv}>
                            <TextField
                                className={classes.textField}
                                id="benutzer-name"
                                placeholder="BENUTZER:INNENNAME"
                                variant="outlined"
                                onChange={this.handleUsernameChange}/>
                        </div>
                        <div className={classes.centeredDiv}>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                className={classes.textField}
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.password}
                                placeholder="PASSWORT"
                                onChange={this.handlePasswordChange}
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
                    <div className={classes.centeredDiv} style={{paddingBottom: "30px"}}>
                        <CustomButton color={ButtonThemes.BLUE.COLOR} colorOnHover={ButtonThemes.BLUE.COLOR_ON_HOVER}
                                      text="Anmelden" onClick={this.onButtonClick}/>
                    </div>
                </ThemeProvider>
                <Snackbar open={this.state.snackbarOpen} autoHideDuration={6000} onClose={this.handleClose}>
                    <MuiAlert onClose={this.handleClose} severity={this.state.severity}>
                        {this.state.errorMessage}
                    </MuiAlert>
                </Snackbar>
            </div>
        )
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
    headerDiv: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        height: "85px"
    },
    headerImg: {
        maxHeight: "61px",
        maxWidth: "280px"
    },
    centeredDiv: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px"
    },
    gcLogo: {
        height: "87px",
        width: "87px"
    },
    textField: {
        width: "100%",
        marginLeft: "25px",
        marginRight: "25px"
    }
})

export default withStyles(styles)(UserLogin)
