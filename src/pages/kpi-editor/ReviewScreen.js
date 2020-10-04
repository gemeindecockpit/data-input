import React, { Component } from 'react';
import RecordViewer from '../datepicker/RecordViewer';
import { Paper, Snackbar } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import ButtonThemes from '../../enums/ButtonThemes';
import CustomButton from '../../utils/control/CustomButton';
import MuiAlert from '@material-ui/lab/Alert';

const Divider = (text) => {
    return (
        <div style={{ display: "flex", alignItems: "center", paddingLeft: "30px", paddingRight: "30px", paddingTop: "30px" }}>
            <div style={{ borderBottom: "1px solid #FFFFFF80", width: "50%" }} />
            <span style={{ padding: "0 10px 0 10px", color: "white", whiteSpace: "pre" }}>
                {text}
            </span>
            <div style={{ borderBottom: "1px solid #FFFFFF80", width: "50%" }} />
        </div>
    );
};

class ReviewScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            severity: "success",
            snackbarOpen: false,
            recordToShow: props.kpis
        }
        this.successMessage = "Die Daten wurden erfolgreich übertragen.";
        this.errorMessage = "Die Daten konnten nicht übertragen werden.";
    }

    onAbort = (ev) => {
        this.props.onAbort();
    }

    onSubmit = (ev) => {
        this.setState({snackbarOpen: true});
        this.props.onSubmit();
    }

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
        return (
            <div>
                {Divider(this.props.organisationName)}
                <div className={classes.centeredDiv}>
                    <Paper className={classes.overviewPaper}>
                        <RecordViewer recordToDisplay={this.state.recordToShow} />
                    </Paper>
                </div>
                <div className={classes.centeredDiv}>
                    <CustomButton color={ButtonThemes.BLUE.COLOR} colorOnHover={ButtonThemes.BLUE.COLOR_ON_HOVER} text="Abschicken" onClick={this.onSubmit} />
                </div>
                <div className={classes.centeredDiv} style={{ marginTop: "10px", paddingBottom: "30px" }}>
                    <CustomButton color={ButtonThemes.RED.COLOR} colorOnHover={ButtonThemes.RED.COLOR_ON_HOVER} text="Zurück" onClick={this.onAbort} />
                </div>
                <Snackbar open={this.state.snackbarOpen} autoHideDuration={6000} onClose={this.handleClose}>
                    <MuiAlert onClose={this.handleClose} severity={this.state.severity}>
                        {this.checkSeverity()}
                    </MuiAlert>
                </Snackbar>
            </div>
        );
    }
}

const styles = (theme) => ({
    overviewPaper: {
        width: "100%",
        marginTop: "0px",
        marginLeft: "25px",
        marginRight: "25px",
        maxHeight: "250px",
        overflow: "auto"
    },
    centeredDiv: {
        marginTop: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
    }
})

export default withStyles(styles)(ReviewScreen);