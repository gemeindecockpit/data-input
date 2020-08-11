import React, {Component} from 'react';
import RecordViewer from "../datepicker/RecordViewer";
import ActionButton from "../../utils/ActionButtons";
import {Paper} from "@material-ui/core";
import { withStyles } from '@material-ui/styles';

const Divider = ( text ) => {
    return (
        <div style={{ display: "flex", alignItems: "center", paddingLeft: "30px", paddingRight: "30px", paddingTop: "30px" }}>
            <div style={{ borderBottom: "1px solid #FFFFFF80", width: "50%" }} />
                <span style={{padding: "0 10px 0 10px", color: "white", whiteSpace: "pre"}}>
                    {text}
                </span>
            <div style={{ borderBottom: "1px solid #FFFFFF80", width: "50%" }} />
        </div>
    );
  };

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
                {Divider(this.props.organisationName)}
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
        marginTop: "30px",
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
    }
})

export default withStyles(styles)(ReviewScreen);