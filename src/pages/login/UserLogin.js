import React, {Component} from 'react';
import {
    withStyles,
    TextField,
    createMuiTheme,
    IconButton,
    InputAdornment,
    ThemeProvider,
    Typography,
    OutlinedInput
} from '@material-ui/core';
import gcLogo from '../../resources/logo_gemeindecockpit_white.svg';
import CustomButton from '../../utils/control/CustomButton';
import ButtonThemes from '../../enums/ButtonThemes';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import WirVsViursImg from '../../resources/WirVsVirus.png';
import ApiCalls from '../../utils/communication/ApiCalls.js';

export class UserLogin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            showPassword: false,
            borderColor: "white"
        };
    }

    apiCalls = new ApiCalls("");

    onButtonClick = () => {
        this.props.history.push("/organisations");
        this.apiCalls.login(this.state.username, this.state.password).then(
            (response) => {
                alert(response)
                if(response && response.data === ("HTTP/1.0 200 Login Successfull")) {
                    console.log(response)
                    this.props.history.push("/organisations");
                }else{
                    console.log("Error: Request failed with status code 500")
                    this.props.history.push("/login");
                    this.setState({borderColor: "red"});
                }
            }
        ).catch((error) => {console.log(error)});
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

    render() {
        const classes = this.props.classes
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
