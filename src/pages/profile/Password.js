import React, { Component } from 'react'
import ProfileHeader from '../../utils/header/ProfileHeader';
import { Paper, createMuiTheme, TextField } from '@material-ui/core';
import { withStyles, ThemeProvider } from '@material-ui/styles';
import CustomButton from '../../utils/control/CustomButton';
import ButtonThemes from '../../enums/ButtonThemes';

const Title = ( text ) => {
    return (
        <div style={{ display: "flex", alignItems: "center", paddingLeft: "30px", paddingRight: "30px", paddingTop: "30px" }}>
            <div style={{ borderBottom: "1px solid #FFFFFF80", width: "50%" }} />
                <span style={{padding: "0 10px 0 10px", color: "white", whiteSpace: "pre"}}>
                    {text}
                </span>
            <div style={{ borderBottom: "1px solid #FFFFFF80", width: "50%" }} />
        </div>
    );
};

export class Password extends Component {

    constructor(props) {
        super(props);
        this.state = {
            oldPassword: "",
            newPassword: "",
            newPasswordSubmit: ""
        };
    }

    onOldPasswordChange = (event) => {
        this.setState({oldPassword: event.target.value});
    }

    onNewPasswordChange = (event) => {
        this.setState({newPassword: event.target.value});
    }

    onNewPasswordSubmitChange = (event) => {
        this.setState({newPasswordSubmit: event.target.value});
    }

    onButtonClick = () => {
        const { oldPassword, newPassword, newPasswordSubmit } = this.state;
        
    }

    render() {
        const classes = this.props.classes;
        
        return (
            <div>
                <ProfileHeader chosenDate={new Date()} />
                { Title("Password ändern") }
                <ThemeProvider theme={muiTheme}>
                    <div className={classes.centeredDiv}>
                        <TextField className={classes.textField} id="altes-passwort" label="Altes Passwort" variant="outlined" onChange={this.onOldPasswordChange} />
                    </div>
                    <div className={classes.centeredDiv}>
                        <TextField className={classes.textField} id="neues-passwort" label="Neues Passwort" variant="outlined" onChange={this.onNewPasswordChange} />
                    </div>
                    <div className={classes.centeredDiv}>
                        <TextField className={classes.textField} id="neues-passwort-bastaetigen" label="Neues Passwort bestätigen" variant="outlined" onChange={this.onNewPasswordSubmitChange} />
                    </div>
                    <div className={classes.centeredDiv} style={{paddingBottom: "30px"}}>
                        <CustomButton color={ButtonThemes.BLUE.COLOR} colorOnHover={ButtonThemes.BLUE.COLOR_ON_HOVER} text="Bestätigen" onClick={this.onButtonClick} />
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
        },
        MuiButton: {
            outlined: {
                border: 0
            }
        }
    }
})

const styles = (theme) => ({
    overviewPaper: {
        width: "100%",
        marginTop: "0px",
        marginLeft: "25px",
        marginRight: "25px",
        overflow: "auto"
    },
    centeredDiv: {
        marginTop: "30px",
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"
    },
    textField: {
        width: "100%",
        marginLeft: "25px",
        marginRight: "25px",
    }
})

export default withStyles(styles)(Password);
