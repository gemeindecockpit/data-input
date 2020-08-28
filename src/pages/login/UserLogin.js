import React, {Component} from 'react';
import {withStyles} from '@material-ui/core';

import InputField from '../../utils/input/InputField';
import DoubleActionButton from '../../utils/control/ActionButton';
import Header from '../../utils/Header';

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
                <Header chosenDate={new Date()} title="Login"> </Header>
                <InputField
                    name={"Email"}
                    value={""}
                    classes={classes}
                    onIconClick={this.onInfoEmailClick}
                    handleChange={this.handleEmailChange}
                />
                <InputField
                    name={"Passwort"}
                    value={""}
                    classes={classes}
                    onIconClick={this.onInfoPasswordClick}
                    handleChange={this.handlePasswordChange}
                />
                <div className={classes.centeredDiv}>
                    <ActionButton onClick={ this.onButtonClick } text={ "Einloggen" }/>
                </div>
            </div>
        )
    }
}

const styles = (theme) => ({
    formControl: {
        width: "100%",
        marginTop: "20px",
        marginLeft: "25px",
        marginRight: "25px"
    },
    centeredDiv: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    infoIcon: {
        position: 'absolute',
        align: 'right'
    }
})

export default withStyles(styles)(UserLogin)
