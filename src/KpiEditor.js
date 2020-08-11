import React, { Component } from 'react'
import InputFields from './InputFields';
import ReviewScreen from './ReviewScreen/ReviewScreen';
import Header from './Header/Header'
import {getOrganisationById, getValuesByOrgIdAndDate} from './ProxyJSON'

export class KpiEditor extends Component {
    constructor(props) {
        super(props);
        this.state={
            org: getOrganisationById(props.match.params.orgId),
            kpis: getValuesByOrgIdAndDate(props.match.params.orgId, new Date(this.props.match.params.date * 1000)),
            showReviewScreen: false
        };
    }

    headerTitle = () => {
        return (this.state.showReviewScreen ? "Daten bestätigen" : this.state.org.name)
    }

    render() {
        const { kpis, showReviewScreen, org } = this.state;
        return (
            <div>
                <Header chosenDate={new Date(this.props.match.params.date * 1000)} title={this.headerTitle()} />
                {(!showReviewScreen) ?
                    <InputFields 
                        kpis={kpis} 
                        onSubmit={(newKpis) => this.setState({ kpis: newKpis, showReviewScreen: true })}
                        onAbort={() => this.props.history.push("/organisations/" + this.props.match.params.orgId)}
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
