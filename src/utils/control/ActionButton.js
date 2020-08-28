import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/styles';

let CustomButton

class ActionButton extends Component {

    constructor(props) {
        super(props);
        CustomButton = (this.props.hasOwnProperty('theme') && this.props.theme === "red" ?
            redTheme : defaultTheme);
    }

    render() {
        const classes = this.props.classes
        return (<div>
            <div className={classes.centeredDiv}>
                <CustomButton
                    size="large"
                    onClick={ this.props.onClick }
                    style={ this.props.hasOwnProperty('style') ? this.props.style : ({}) }
                >
                    { this.props.text }
                </CustomButton>
            </div>
        </div>);
    }
}

const defaultTheme = withStyles((theme) => ({
    root: {
        width: "100%",
        marginTop: "10px",
        marginLeft: "25px",
        marginRight: "25px",
        fontWeight: "bold",
        textTransform: "none",
        border: '1px solid #ced4da',
        borderRadius: 17,
        borderColor: "#FFFFFF",
        color: "#FFFFFF",
        backgroundColor: "#FFFFFF80",
        '&:hover': {
            borderColor: "white",
            backgroundColor: "#00546F",
        },
    },
}))(Button);

const redTheme = withStyles((theme) => ({
    root: {
        width: "100%",
        marginTop: "20px",
        marginLeft: "25px",
        marginRight: "25px",
        fontWeight: "bold",
        textTransform: "none",
        border: '1px solid #ced4da',
        borderRadius: 17,
        borderColor: "#FFFFFF",
        color: "#FFFFFF",
        backgroundColor: "#FF5B5B",
        '&:hover': {
            borderColor: "white",
            backgroundColor: "#B31515",
        },
    },
}))(Button);

const styles = (theme) => ({
    centeredDiv: {
        marginTop: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default withStyles(styles)(ActionButton);