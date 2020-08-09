import React, {Component} from 'react';
import Datepicker from "./Datepicker/Datepicker";
import RecordViewer from "./RecordViewer";
import { getValuesByOrgIdAndDate, getOrganisationById } from './ProxyJSON'
import Header from "./Header/Header";
import { Paper, withStyles, Button, Typography } from '@material-ui/core';

/**
 * Wrapper component for Datepicker that sets the date for chosen organization to show the correct record
 * if it's available and buttons for further actions like update or insert the record.
 */
class OverviewScreen extends Component {

    constructor(props) {
        super(props);
        this.state={
            org: getValuesByOrgIdAndDate(props.match.params.orgId, new Date()),
            date: new Date()
        };
    }

    onDateChange = (unixTimestamp) => {
        this.setState({ date:  new Date(unixTimestamp * 1000)})
        //this.props.history.push("/organisations/" + this.props.match.params.orgId + "/" + unixTimestamp)
    }

    onContinueClick = () => {
        this.props.history.push("/organisations/" + this.props.match.params.orgId + "/" + (this.state.date.getTime() / 1000))
    }

    onCancelClick = () => {
        this.props.history.push("/organisations")
    }

    render() {
        const classes = this.props.classes
        const { date } = this.state
        return (
            <div>
                <Header chosenDate={date} title={getOrganisationById(this.props.match.params.orgId).name}></Header>
                <div className={classes.centeredDiv}>
                    <Datepicker onDateChange={this.onDateChange} label="Datum auswählen:"/>
                </div>
                <div className={classes.centeredDiv}>
                    <Paper className={classes.overviewPaper}>
                        <RecordViewer recordToShow={ getValuesByOrgIdAndDate(this.props.match.params.orgId, date) }/>
                    </Paper>
                </div>
                <div className={classes.centeredDiv}>
                    <CustomButton variant="contained" color="inherit" size="large" onClick={this.onContinueClick}> 
                        Weiter
                    </CustomButton>
                </div>
                <div className={classes.centeredDiv} style={{ marginTop: "-10px", paddingBottom: "40px" }}>
                    <CancelButton variant="contained" color="inherit" size="large" onClick={this.onCancelClick}> 
                        Abbrechen 
                    </CancelButton>
                </div>
            </div>
        );
    }

}

const CustomButton = withStyles((theme) => ({
    root: {
        width: "100%",
        marginTop: "10px",
        marginLeft: "25px",
        marginRight: "25px",
        fontWeight: "bold",
        textTransform: "none",
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

const CancelButton = withStyles((theme) => ({
    root: {
        width: "100%",
        marginTop: "20px",
        marginLeft: "25px",
        marginRight: "25px",
        fontWeight: "bold",
        textTransform: "none",
        border: '1px solid #ced4da',
        borderRadius: 17,
        borderColor: "#FFFFFF",
        color: "#FFFFFF",
        backgroundColor: "#FF5B5B",
        '&:hover': {
            borderColor: theme.palette.getContrastText("#00546F"),
            backgroundColor: "#B31515",
        },
    },
}))(Button);

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
        marginTop: "40px",
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"
    }
})

export default withStyles(styles)(OverviewScreen);