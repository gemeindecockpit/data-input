import React, { Component } from 'react';
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core';
import InputField from '../../utils/input/InputField';
import CustomButton from '../../utils/control/CustomButton';
import ButtonThemes from '../../enums/ButtonThemes';

class InputFields extends Component {
    constructor(props) {
        super(props);
        this.state={
            kpis: props.kpis
        };
    }

    handleChange = (event, kpiName) => {
        var newKpis = this.state.kpis;
        newKpis[this.state.kpis.findIndex(v => v.name === kpiName)] = {name: kpiName, value: event.target.value}
        this.setState({ kpis: newKpis })
    }

    onSubmit = () => {
        this.props.onSubmit(this.state.kpis);
    }

    onAbort = () => {
        this.props.onAbort()   
    }

    onIconClick = (event) => {
    }

    render() {
        const { kpis } = this.state;
        const classes = this.props.classes
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    {kpis.map(rec => {
                        return (
                            <InputField
                                key={rec.name}
                                name={ rec.name }
                                value={ rec.value }
                                onIconClick={ this.onIconClick }
                                handleChange={ this.handleChange }
                            />
                        );
                    })}
                    <div className={classes.centeredDiv}>
                        <CustomButton color={ButtonThemes.BLUE.COLOR} colorOnHover={ButtonThemes.BLUE.COLOR_ON_HOVER} text="Weiter" onClick={this.onSubmit} />
                    </div>
                    <div className={classes.centeredDiv} style={{marginTop: "10px", paddingBottom: "30px"}}>
                        <CustomButton color={ButtonThemes.RED.COLOR} colorOnHover={ButtonThemes.RED.COLOR_ON_HOVER} text="Zurück" onClick={this.onAbort} />
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

const theme = createMuiTheme({
    overrides: {
        MuiFormLabel: {
            root: {
                color: "white",
                fontSize: 20,
                width: '132%',
                "&$focused": {
                    color: "#000000",
                }
            }, 
        }
    }
});

const styles = (theme) => ({
    centeredDiv: {
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        marginTop: "30px"
    }
})

export default withStyles(styles)(InputFields)
