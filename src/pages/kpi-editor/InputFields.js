import React, { Component } from 'react';
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core';
import InputField from '../../utils/input/InputField';
import CustomButton from '../../utils/control/CustomButton';
import ButtonThemes from '../../enums/ButtonThemes';

class InputFields extends Component {
    constructor(props) {
        super(props);
        this.state={
            fields: props.fields
        };
    }

    handleChange = (event, field_id) => {
        var newFields = this.state.fields.map(field => {
            if(field.field_id === field_id) {
                field.field_value = event.target.value;
            }
            return field;
        });
        this.setState({ fields: newFields })
    }

    onSubmit = () => {
        this.props.onSubmit(this.state.fields);
    }

    onAbort = () => {
        this.props.onAbort()   
    }

    onIconClick = (event) => {
    }

    render() {
        const { fields } = this.state;
        console.log(fields)
        const classes = this.props.classes
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    {fields.map(rec => {
                        return (
                            <InputField
                                key={rec.field_id}
                                field={ rec }
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
