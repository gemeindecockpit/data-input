import React, {Component} from 'react';
import Datepicker from "./Datepicker/Datepicker";
import RecordViewer from "./RecordViewer";
import {getOrganisationById, getValuesByOrgIdAndDate} from './ProxyJSON'
import Header from "./Header/Header";
import {Button, Paper, withStyles} from '@material-ui/core';
import ActionButtons from "./ActionButton/ActionButtons";

/**
 * Wrapper component for Datepicker that sets the date for chosen organization to show the correct record
 * if it's available and buttons for further actions like update or insert the record.
 */
class OverviewScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            org: getValuesByOrgIdAndDate(props.match.params.orgId, new Date()),
            date: new Date()
        };
    }

    onDateChange = (unixTimestamp) => {
        this.setState({date: new Date(unixTimestamp * 1000)})
    }

    onSubmit = () => {
        var unixTimestamp = (this.state.date.getTime() / 1000).toString().split('.')[0];  //to remove useless digits after comma
        this.props.history.push("/organisations/" + this.props.match.params.orgId + "/" + unixTimestamp)
    }

    onAbort = () => {
        this.props.history.push("/organisations")
    }

    render() {
        const classes = this.props.classes
        const {date} = this.state
        return (
            <div>
                <Header chosenDate={date} title={getOrganisationById(this.props.match.params.orgId).name}/>
                <div className={classes.centeredDiv}>
                    <Datepicker onDateChange={this.onDateChange} label="Datum auswählen:"/>
                </div>
                <div className={classes.centeredDiv}>
                    <Paper className={classes.overviewPaper}>
                        <RecordViewer recordToDisplay={getValuesByOrgIdAndDate(this.props.match.params.orgId, date)}/>
                    </Paper>
                </div>
                <ActionButtons
                    btn_submit={ {
                        text: "Weiter",
                        onClick: this.onSubmit
                    } }
                    btn_abort={ {
                        text: "Zurück",
                        onClick: this.onAbort
                    } }
                />
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
        marginTop: "40px",
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"
    }
})

export default withStyles(styles)(OverviewScreen);