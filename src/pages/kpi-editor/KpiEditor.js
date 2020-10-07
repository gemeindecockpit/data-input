import React, { Component } from 'react'
import InputFields from './InputFields';
import ReviewScreen from './ReviewScreen';
import Header from '../../utils/Header';
import Workflows from './../../enums/Workflows';
import ApiCalls from "../../utils/communication/ApiCalls";
import {LinearProgress} from "@material-ui/core";

export class KpiEditor extends Component {
    constructor(props) {
        super(props);
        this.state={
            fields: [],
            isLoading: true,
            showReviewScreen: false
        };
    }

    apiCalls = new ApiCalls();

    componentDidMount = () => {
        if(this.props.match.params.workflow === Workflows.EDIT_KPI_VALUES.URL_PARAM) {
            this.fetchDefaultValues(this.props.match.params.orgId)
        } else {
            //this.setState({ fields: getMaxValuesByOrgIdAndDate(this.props.match.params.orgId, new Date(this.props.match.params.date * 1000)), isLoading: false})
        }
    }

    headerTitle = () => {
        return (this.state.title)
    }

    onWorkflowChange = (workflowUrlParam) => {
        this.props.history.push("/" + workflowUrlParam + "/organisations")
    }

    fetchDefaultValues = (id) => {
        this.apiCalls.getOrganisationById(id)
            .then((res) => {
                this.setState({fields: res.data.fields, loading: false, title: res.data.organisation_name});
                this.fetchOrgValues(id, new Date(this.props.match.params.date * 1000))
            })
    }

    fetchOrgValues = (id, date) => {
        const { fields } = this.state;
        const year = date.getFullYear();
        const month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
        const day = (date.getDate() < 10) ? "0" + date.getDate() : date.getDate();
        this.apiCalls.getOrgValuesByIdAndDate(id, year, month, day).then((res) => {
            var resFields = res.data.data;
            var newFields = fields.map(field => {
                field.field_value = "";
                var resFieldIndex = resFields.findIndex(resField => field.field_id === resField.field_id);
                if(resFieldIndex !== -1) {
                    field = resFields[resFieldIndex];
                }
                field.date = year + "-" + month + "-" + day;
                return field;
            })
            this.setState({fields: newFields, isLoading: false, date: date});
        })
    }

    onDataSubmit = () => {
        var requestArray = [];

        this.state.fields.forEach(field => {
            var requestField = {
                "field_id": field.field_id,
                "field_value": field.field_value.toString(),
                "date": field.date
            }
            if(requestField.field_value !== "") {
                requestArray.push(requestField);
            }
        })

        this.apiCalls.postKpisByOrgId(this.props.match.params.orgId, JSON.stringify(requestArray)).then(res => {
            console.log(res);
        }).catch(err => {
            console.error("PostDataError: ", err);
        });
    }

    render() {
        const { fields, showReviewScreen, title, isLoading } = this.state;

        if(isLoading){
            return(
                <React.Fragment>
                    <Header chosenDate={new Date(this.props.match.params.date * 1000)} title={this.state.title}
                            workflow={this.props.match.params.workflow} onWorkflowChange={this.onWorkflowChange}/>
                    <LinearProgress/>
                </React.Fragment>
            )
        }
        
        return (
            <div>
                <Header chosenDate={new Date(this.props.match.params.date * 1000)} title={this.headerTitle()} workflow={this.props.match.params.workflow} onWorkflowChange={this.onWorkflowChange} showReviewScreen={showReviewScreen}/>
                {(!showReviewScreen) ?
                    <InputFields
                        fields={fields}
                        onSubmit={(newFields) => this.setState({ fields: newFields, showReviewScreen: true })}
                        onAbort={() => this.props.history.push("/" + this.props.match.params.workflow + "/organisations/" + this.props.match.params.orgId)}
                    /> 
                    : 
                    <ReviewScreen
                        fields={fields}
                        organisationName={title}
                        onSubmit={ this.onDataSubmit }
                        onAbort={() => this.setState({ showReviewScreen: false })}
                    />
                }
            </div>
        )
    }
}

export default KpiEditor
