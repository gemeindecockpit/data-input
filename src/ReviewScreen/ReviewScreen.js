import React, {Component} from 'react';
import RecordViewer from "../RecordViewer";
import {getCurrentKpis} from '../InputFields'
import ActionButton from "../ActionButton/ActionButtons";
import Header from "../Header/Header";
import {Paper} from "@material-ui/core";
import { withStyles } from '@material-ui/styles';

class ReviewScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recordToShow: props.kpis
        }
    }

    onAbort = (ev) => {
        this.props.onAbort();
    }

    onSubmit = (ev) => {
        this.props.onSubmit();
    }

    render() {
        const classes = this.props.classes
        return (
            <div>
                <div className={classes.centeredDiv}>
                    <Paper className={classes.overviewPaper}>
                        <RecordViewer recordToDisplay={ this.state.recordToShow }/>
                    </Paper>
                </div>
                <div>
                    <ActionButton
                        btn_abort={ {
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

export default withStyles(styles)(ReviewScreen);