import React, { Component } from 'react'
import ProfileHeader from '../../utils/header/ProfileHeader';
import { Paper, createMuiTheme, TextField } from '@material-ui/core';
import { withStyles, ThemeProvider } from '@material-ui/styles';
import CustomButton from '../../utils/control/CustomButton';
import ButtonThemes from '../../enums/ButtonThemes';
import PasswordField from '../../utils/input/PasswordField';
import ApiCalls from "../../utils/communication/ApiCalls";

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
            newPassword: "",
            newPasswordSubmit: ""
        };
    }

    apiCalls = new ApiCalls();

    onNewPasswordChange = (event) => {
        this.setState({newPassword: event.target.value});
    }

    onNewPasswordSubmitChange = (event) => {
        this.setState({newPasswordSubmit: event.target.value});
    }

    onButtonClick = () => {
        const { newPassword, newPasswordSubmit } = this.state;
        const userid = this.props.match.params.userid;
        if(newPassword === newPasswordSubmit) {
            this.apiCalls.updatePassword(userid, newPassword).then(res => {
                console.log(res)
            }).catch(err => {
                console.error(err)
            })
        } else {
            console.log("Different passwords")
        }
        
    }

    render() {
        const classes = this.props.classes;
        
        return (
            <div>
                <ThemeProvider theme={muiTheme}>
                    <ProfileHeader chosenDate={new Date()} />
                </ThemeProvider>
                { Title("Password ändern") }
                <div className={classes.centeredDiv}>
                    <PasswordField placeholder="Neues Passwort" handleChange={this.onNewPasswordChange} />
                </div>
                <div className={classes.centeredDiv}>
                    <PasswordField placeholder="Neues Passwort bestätigen" handleChange={this.onNewPasswordSubmitChange} />
                </div>
                <div className={classes.centeredDiv} style={{paddingBottom: "30px"}}>
                    <CustomButton color={ButtonThemes.BLUE.COLOR} colorOnHover={ButtonThemes.BLUE.COLOR_ON_HOVER} text="Bestätigen" onClick={this.onButtonClick} />
                </div>
            </div>
        )
    }
}

const muiTheme = createMuiTheme({
    overrides: {
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
