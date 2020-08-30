import React from 'react';
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: (props) => ({
        width: "100%",
        height: "55px",
        marginTop: "10px",
        marginLeft: "25px",
        marginRight: "25px",
        fontWeight: "bold",
        textTransform: "none",
        border: '1px solid #ced4da',
        borderRadius: 22,
        borderColor: "#FFFFFF",
        color: "#FFFFFF",
        backgroundColor: props.color,
        '&:hover': {
            borderColor: "white",
            backgroundColor: props.colorOnHover,
        },
    })
}));

export default function CustomButton(props) {
    const classes = useStyles(props);
    return (
        <Button className={classes.root} size="large" onClick={ props.onClick }>
            { props.text }
        </Button>
    );
}

CustomButton.propTypes = {
    color: PropTypes.string.isRequired,
    colorOnHover: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};