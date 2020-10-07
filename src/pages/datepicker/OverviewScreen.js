import React, {Component} from 'react';
import Datepicker from "./Datepicker";
import RecordViewer from "./RecordViewer";
import Header from "../../utils/Header";
import {LinearProgress, Paper, withStyles} from '@material-ui/core';
import Workflows from './../../enums/Workflows';
import CustomButton from '../../utils/control/CustomButton';
import ButtonThemes from '../../enums/ButtonThemes';
import ApiCalls from "../../utils/communication/ApiCalls";

/**
 * Wrapper component for Datepicker that sets the date for chosen organization to show the correct record
 * if it's available and buttons for further actions like update or insert the record.
 */

class OverviewScreen extends Component {

    apiCalls = new ApiCalls();

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            org: "",
            fields: [],
            title: "",
            date: new Date()
        };
    }

    componentDidMount() {
        this.fetchDefaultValues(this.props.match.params.orgId);
        this.state.fields.forEach((f) => {
            this.fetchMaxValue(this.props.match.params.orgId, f.name)
        })
    }

    onDateChange = (unixTimestamp) => {
        var date = new Date(unixTimestamp * 1000)
        this.setState({date: date})
        this.fetchOrgValues(this.props.match.params.orgId, date)
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

    fetchOrgValues = (id, date) => {
        const { fields } = this.state;
        this.apiCalls.getOrgValuesByIdAndDate(
            id,
            date.getFullYear(),
            (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1),
            date.getDate() < 10 ? "0" + date.getDate() : date.getDate())
            .then((res) => {
                var resFields = res.data.data;
                var newFields = fields.map(field => {
                    field.field_value = "";
                    var resFieldIndex = resFields.findIndex(resField => field.field_id === resField.field_id);
                    if(resFieldIndex !== -1) {
                        field = resFields[resFieldIndex];
                    }
                    return field;
                })
                this.setState({fields: newFields, loading: false, date: date});
        }).catch((err) => {
            console.error(err);
        })
    }

    fetchDefaultValues = (id) => {
        this.apiCalls.getOrganisationById(id)
            .then((res) => {
                this.setState({fields: res.data.fields, loading: false, title: res.data.organisation_name});
                this.fetchOrgValues(id, new Date())
            }).catch((err) => {
            console.error(err);
        })
    }

    render() {
        const classes = this.props.classes
        const maxDate = this.props.match.params.workflow === Workflows.EDIT_KPI_VALUES.URL_PARAM ? new Date() : undefined;
        const {date, loading} = this.state
        if(loading){
            return(
                <React.Fragment>
                    <Header chosenDate={date} title={this.state.title}
                            workflow={this.props.match.params.workflow} onWorkflowChange={this.onWorkflowChange}/>
                    <LinearProgress/>
                </React.Fragment>
            )
        }
        return (
            <div>
                <Header chosenDate={date} title={this.state.title} workflow={this.props.match.params.workflow} onWorkflowChange={this.onWorkflowChange}/>
                <div className={classes.centeredDiv}>
                    <Datepicker onDateChange={this.onDateChange} label="Datum auswählen:" maxDate={maxDate} />
                </div>
                <div className={classes.centeredDiv}>
                    <Paper className={classes.overviewPaper}>
                        <RecordViewer recordToDisplay={this.state.fields}/>
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
