import React, {Component} from 'react';
import Datepicker from "./Datepicker";
import RecordViewer from "./RecordViewer";
import {getOrganisationById, getValuesByOrgIdAndDate, getMaxValuesByOrgIdAndDate} from '../../utils/communication/ProxyJSON'
import Header from "../../utils/Header";
import {Paper, withStyles} from '@material-ui/core';
import Workflows from './../../enums/Workflows';
import CustomButton from '../../utils/control/CustomButton';
import ButtonThemes from '../../enums/ButtonThemes';

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


    isValidDate(date) {
        return date instanceof Date && !isNaN(date);
    }

    onSubmit = () => {
        if (this.isValidDate(this.state.date)) {
            var unixTimestamp = (this.state.date.getTime() / 1000).toString().split('.')[0];  //to remove useless digits after comma
            this.props.history.push(window.location.pathname + "/" + unixTimestamp)
        }
    }

    onAbort = () => {
        this.props.history.push("/" + this.props.match.params.workflow + "/organisations")
    }

    onWorkflowChange = (workflowUrlParam) => {
        this.props.history.push("/" + workflowUrlParam + "/organisations")
    }

    kpis = () => {
        if(this.props.match.params.workflow === Workflows.EDIT_KPI_VALUES.URL_PARAM) {
            return getValuesByOrgIdAndDate(this.props.match.params.orgId, this.state.date)
        } else {
            return getMaxValuesByOrgIdAndDate(this.props.match.params.orgId, this.state.date)
        }
    }

    render() {
        const classes = this.props.classes
        const {date} = this.state
        return (
            <div>
                <Header chosenDate={date} title={getOrganisationById(this.props.match.params.orgId).name} workflow={this.props.match.params.workflow} onWorkflowChange={this.onWorkflowChange}/>
                <div className={classes.centeredDiv}>
                    <Datepicker onDateChange={this.onDateChange} label="Datum auswählen:"/>
                </div>
                <div className={classes.centeredDiv}>
                    <Paper className={classes.overviewPaper}>
                        <RecordViewer recordToDisplay={this.kpis()}/>
                    </Paper>
                </div>
                <div className={classes.centeredDiv}>
                    <CustomButton color={ButtonThemes.BLUE.COLOR} colorOnHover={ButtonThemes.BLUE.COLOR_ON_HOVER} text="Weiter" onClick={this.onSubmit} />
                </div>
                <div className={classes.centeredDiv} style={{marginTop: "10px", paddingBottom: "30px"}}>
                    <CustomButton color={ButtonThemes.RED.COLOR} colorOnHover={ButtonThemes.RED.COLOR_ON_HOVER} text="Zurück" onClick={this.onAbort} />
                </div>
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
