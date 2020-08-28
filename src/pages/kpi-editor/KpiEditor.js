import React, { Component } from 'react'
import InputFields from './InputFields';
import ReviewScreen from './ReviewScreen';
import Header from '../../utils/Header';
import {getOrganisationById, getValuesByOrgIdAndDate, getMaxValuesByOrgIdAndDate} from '../../utils/communication/ProxyJSON';
import Workflows from './../../enums/Workflows';

export class KpiEditor extends Component {
    constructor(props) {
        super(props);
        this.state={
            org: getOrganisationById(props.match.params.orgId),
            kpis: [],
            isLoading: true,
            showReviewScreen: false
        };
    }

    componentDidMount = () => {
        if(this.props.match.params.workflow === Workflows.EDIT_KPI_VALUES.URL_PARAM) {
            this.setState({ kpis: getValuesByOrgIdAndDate(this.props.match.params.orgId, new Date(this.props.match.params.date * 1000)), isLoading: false})
        } else {
            this.setState({ kpis: getMaxValuesByOrgIdAndDate(this.props.match.params.orgId, new Date(this.props.match.params.date * 1000)), isLoading: false})
        }
    }

    headerTitle = () => {
        return (this.state.showReviewScreen ? "Daten bestätigen" : this.state.org.name)
    }

    onWorkflowChange = (workflowUrlParam) => {
        this.props.history.push("/" + workflowUrlParam + "/organisations")
    }

    render() {
        const { kpis, showReviewScreen, org, isLoading } = this.state;
        
        if(isLoading) {
            return <div></div>
        }
        
        return (
            <div>
                <Header chosenDate={new Date(this.props.match.params.date * 1000)} title={this.headerTitle()} workflow={this.props.match.params.workflow} onWorkflowChange={this.onWorkflowChange}/>
                {(!showReviewScreen) ?
                    <InputFields 
                        kpis={kpis} 
                        onSubmit={(newKpis) => this.setState({ kpis: newKpis, showReviewScreen: true })}
                        onAbort={() => this.props.history.push("/" + this.props.match.params.workflow + "/organisations/" + this.props.match.params.orgId)}
                    /> 
                    : 
                    <ReviewScreen 
                        kpis={kpis}
                        organisationName={org.name}
                        onSubmit={() => alert(kpis.map(kpi => { return JSON.stringify(kpi, null, 2) }))}
                        onAbort={() => this.setState({ showReviewScreen: false })}
                    />
                }
            </div>
        )
    }
}

export default KpiEditor
