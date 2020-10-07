import React, { Component } from 'react';
import RecordViewer from '../datepicker/RecordViewer';
import { withStyles } from '@material-ui/styles';
import ButtonThemes from '../../enums/ButtonThemes';
import CustomButton from '../../utils/control/CustomButton';
import { Paper } from '@material-ui/core';

class ReviewScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recordToShow: props.fields
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
                        <RecordViewer recordToDisplay={this.state.recordToShow} />
                    </Paper>
                </div>
                <div className={classes.centeredDiv}>
                    <CustomButton color={ButtonThemes.BLUE.COLOR} colorOnHover={ButtonThemes.BLUE.COLOR_ON_HOVER} text="Abschicken" onClick={this.onSubmit} />
                </div>
                <div className={classes.centeredDiv} style={{ marginTop: "10px", paddingBottom: "30px" }}>
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