import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { InputLabel, InputBase, fade, withStyles, FormControl, MuiThemeProvider, createMuiTheme, Button } from '@material-ui/core'
import { getOrganisationById, getValuesByOrgIdAndDate } from './ProxyJSON'

class InputFields extends Component {
    constructor(props) {
        super(props);
        this.state={
            org: getOrganisationById(props.match.params.orgId),
            preKpis: getValuesByOrgIdAndDate(props.match.params.orgId, new Date(Number(this.props.match.params.date))),
            newKpis: []
        };
    }

    componentDidMount = () => {
        var kpis = []
        this.state.preKpis.forEach(kpi => { kpis[kpi.name]= kpi.value })
        this.setState({ newKpis: kpis })
    }

    handleChange = (event, kpi) => {
        var kpis = this.state.newKpis;
        kpis[kpi] = event.target.value;
        this.setState({ newKpis: kpis })
    }

    onButtonClick = (event) => {
        console.log(this.state.newKpis)
    }

    render() {
        const { preKpis } = this.state;
        const classes = this.props.classes
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    {preKpis.map(v => {
                        return <div key={v.id} className={classes.centeredDiv}>
                            <FormControl className={classes.formControl}>
                                <InputLabel shrink htmlFor="input-box">
                                    {v.name}
                                </InputLabel>
                                <CustomInputBase defaultValue={v.value} onChange={event => this.handleChange(event, v.name)} id="input-box"/>
                            </FormControl>
                        </div>
                    })}
                    <div className={classes.centeredDiv}>
                        <CustomButton variant="contained" color="inherit" size="large" onClick={this.onButtonClick}>
                            Absenden
                        </CustomButton>
                    </div>

                </MuiThemeProvider>
            </div>
        )
    }
}

const CustomButton = withStyles((theme) => ({
    root: {
        width: "100%",
        marginTop: "40px",
        marginLeft: "25px",
        marginRight: "25px",
        border: '1px solid #ced4da',
        borderRadius: 17,
        borderColor: "#FFFFFF",
        color: "#FFFFFF",
        backgroundColor: "#FFFFFF80",
        '&:hover': {
            borderColor: theme.palette.getContrastText("#00546F"),
            backgroundColor: "#00546F",
        },
    },
}))(Button);

const CustomInputBase = withStyles((theme) => ({
    input: {
        marginTop: theme.spacing(3),
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
    }
})

export default withStyles(styles)(InputFields)