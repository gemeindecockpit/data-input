import React, {Component} from 'react';
import RecordViewer from "../RecordViewer";
import {getCurrentKpis} from '../InputFields'
import ActionButton from "../ActionButton/ActionButtons";
import Header from "../Header/Header";
import {Paper} from "@material-ui/core";

class ReviewScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recordToShow: getCurrentKpis()
        }
    }

    onAbort = (ev) => {
        this.props.history.push(this.props.history.location.pathname.replace(/\/confirmation/, ""));
    }

    onSubmit = (ev) => {
        alert("GOGOGOOO"); // TODO replace me
    }

    render() {
        return (
            <div>
                <Header chosenDate={ new Date(this.props.match.params.date * 1000) } title={ "Neue Daten bestätigen" } />

                <div>
                    <Paper>
                        <RecordViewer recordToDisplay={ this.state.recordToShow }/>
                    </Paper>
                </div>
                <div>
                    <ActionButton
                        btn_cancel={ {
                            text: "Zurück",
                            onClick: this.onAbort
                        } }
                        btn_submit={ {
                            text: "Abschicken",
                            onClick: this.onSubmit
                        } }
                    />
                </div>
            </div>
        );
    }
}

export default ReviewScreen;