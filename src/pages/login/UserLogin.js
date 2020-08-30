import React, {Component} from 'react';
import {withStyles, TextField, createMuiTheme, ThemeProvider, Typography} from '@material-ui/core';
import gcLogo from '../../resources/logo_gemeindecockpit_white.svg';
import CustomButton from '../../utils/control/CustomButton';
import ButtonThemes from '../../enums/ButtonThemes';
import WirVsViursImg from '../../resources/WirVsVirus.png';

export class UserLogin extends Component {

    constructor(props) {
        super(props);
        this.state={
            email: "",
            password: ""
        };
    }

    onButtonClick = (event) => {
        this.props.history.push("/organisations")
    }

    onInfoEmailClick = (event) => {

    }

    onInfoPasswordClick = (event) => {

    }

    handleEmailChange = (event) => {

    }

    handlePasswordChange = (event) => {

    }

    render() {
        const classes = this.props.classes
        return (
            <div>
                <ThemeProvider theme={muiTheme}>
                    <div className={classes.headerDiv}>
                        <img alt="" src={WirVsViursImg} className={classes.headerImg} />
                    </div>
                    <div className={classes.centeredDiv}>
                        <img alt="" src={gcLogo} className={classes.gcLogo} />
                    </div>
                    <div className={classes.centeredDiv} style={{marginTop: "10px"}}>
                        <Typography variant="h4">
                            Gemeinde Cockpit
                        </Typography>
                    </div>
                    <div className={classes.centeredDiv}>
                        <TextField className={classes.textField} id="benutzer-name" label="Benutzer:innenname" variant="outlined" />
                    </div>
                    <div className={classes.centeredDiv}>
                        <TextField className={classes.textField} id="passwort" label="Passwort" variant="outlined" />
                    </div>
                    <div className={classes.centeredDiv} style={{paddingBottom: "30px"}}>
                        <CustomButton color={ButtonThemes.BLUE.COLOR} colorOnHover={ButtonThemes.BLUE.COLOR_ON_HOVER} text="Anmelden" onClick={this.onButtonClick} />
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
                    borderColor: "black"
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black"
                },
                borderRadius: 12,
                height: "55px"
            }
        }
    }
})

const styles = (theme) => ({
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
    gcLogo: {
        height: "87px",
        width: "87px"
    },
    textField: {
        width: "100%",
        marginLeft: "25px",
        marginRight: "25px",
    }
})

export default withStyles(styles)(UserLogin)
