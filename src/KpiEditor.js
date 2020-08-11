import React, { Component } from 'react'
import InputFields from './InputFields';
import ReviewScreen from './ReviewScreen/ReviewScreen';
import Header from './Header/Header'
import {getOrganisationById, getValuesByOrgIdAndDate} from './ProxyJSON'

export class KpiEditor extends Component {
    constructor(props) {
        super(props);
        this.state={
            kpis: getValuesByOrgIdAndDate(props.match.params.orgId, new Date(this.props.match.params.date * 1000)),
            showReviewScreen: false
        };
    }

    render() {
        const { kpis, showReviewScreen } = this.state;
        const classes = this.props.classes
        return (
            <div>
                <Header chosenDate={new Date(this.props.match.params.date * 1000)} title={getOrganisationById(this.props.match.params.orgId).name} />
                {(!showReviewScreen) ?
                    <InputFields 
                        kpis={kpis} 
                        onSubmit={(newKpis) => this.setState({ kpis: newKpis, showReviewScreen: true })}
                        onAbort={() => this.props.history.push("/organisations/" + this.props.match.params.orgId)}
                    /> 
                    : 
                    <ReviewScreen 
                        kpis={kpis}
                        onSubmit={() => alert(kpis.map(kpi => { return JSON.stringify(kpi, null, 2) }))}
                        onAbort={() => this.setState({ showReviewScreen: false })}
                    />
                }
            </div>
        )
    }
}

export default KpiEditor
