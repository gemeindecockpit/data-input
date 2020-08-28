import React, {Component} from 'react';
import {createMuiTheme, fade, InputBase, MuiThemeProvider, withStyles} from '@material-ui/core';
import DoubleActionButton from '../../utils/control/DoubleActionButton';
import InputField from '../../utils/input/InputField';

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
                                name={ rec.name }
                                value={ rec.value }
                                classes={classes}
                                onIconClick={ this.onIconClick }
                                handleChange={ this.handleChange }
                            />
                        );
                    })}
                    <ActionButtons
                        btn_submit={ {
                            text: "Weiter",
                            onClick: this.onSubmit
                        } }
                        btn_abort={ {
                            text: "Zurück",
                            onClick: this.onAbort
                        } }
                    />
                </MuiThemeProvider>
            </div>
        )
    }
}

export const CustomInputBase = withStyles((theme) => ({
    input: {
        marginTop: '2px',
        borderRadius: 10,
        position: 'relative',
        backgroundColor: "transperant",
        border: '1px solid #ced4da',
        fontSize: 16,
        color: "white",
        width: '100%',
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            boxShadow: `${fade("#000000", 0.25)} 0 0 0 0.2rem`,
            borderColor: "#000000",
            color: "#000000"
        }, 
    },
}))(InputBase);

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
        },
        MuiButtonBase: {
            root: {
                '&:hover': {
                    backgroundColor: '#0069d9',
                    borderColor: '#0062cc',
                    boxShadow: 'none',
                  },
                  '&:active': {
                    boxShadow: 'none',
                    backgroundColor: '#0062cc',
                    borderColor: '#005cbf',
                  },
            }
        }
    }
});

const styles = (theme) => ({
    formControl: {
        width: "100%",
        marginTop: "20px",
        marginLeft: "25px",
        marginRight: "25px"
    },
    centeredDiv: {
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"
    },
    infoIcon: {
        position: 'absolute',
        align: 'right'
    }
})

export default withStyles(styles)(InputFields)
