import React, {Component} from 'react'
import {
    Box,
    Button,
    createMuiTheme,
    fade,
    FormControl,
    IconButton,
    InputBase,
    InputLabel,
    MuiThemeProvider,
    Popover,
    Typography,
    withStyles
} from '@material-ui/core'
import Header from './Header/Header'
import {getOrganisationById, getValuesByOrgIdAndDate} from './ProxyJSON'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ActionButtons from './ActionButton/ActionButtons';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';


let newKpis = [] // TODO

class InputFields extends Component {
    constructor(props) {
        super(props);
        this.state={
            org: getOrganisationById(props.match.params.orgId),
            kpis: getValuesByOrgIdAndDate(props.match.params.orgId, new Date(this.props.match.params.date * 1000)),
        };
    }

    handleChange = (event, kpiName) => {
        var newKpis = this.state.kpis;
        newKpis[this.state.kpis.findIndex(v => v.name === kpiName)] = {name: kpiName, value: event.target.value}
        this.setState({ kpis: newKpis })
    }

    onContinueClick = () => {
        console.log(this.state.kpis)
        console.log(this.state.kpis)
        this.props.history.push(this.props.history.location.pathname + "/confirmation")    
    }

    onCancelClick = () => {
        this.props.history.push("/organisations")    
    }

    onIconClick = (event) => {
    }

    render() {
        const { kpis } = this.state;
        const classes = this.props.classes
        return (
            <div>
                <Header chosenDate={new Date(this.props.match.params.date * 1000)} title={getOrganisationById(this.props.match.params.orgId).name} />
                <MuiThemeProvider theme={theme}>
                    {kpis.map(v => {
                        return <div key={v.name} className={classes.centeredDiv}>
                            <FormControl className={classes.formControl}>
                                <InputLabel shrink htmlFor="input-box">
                                    {v.name}
                                </InputLabel>
                                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                    <PopupState variant="popover" popupId="demo-popup-popover">
                                        {(popupState) => (
                                            <div>
                                                <IconButton onClick={this.onIconClick} aria-label="info" style={{align: "right", alignItems: "right"}} {...bindTrigger(popupState)}>
                                                    <InfoOutlinedIcon className={classes.infoIcon} fontSize={"small"} style={{color: "#ffffff"}} />
                                                </IconButton>
                                                <Popover
                                                    {...bindPopover(popupState)}
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'center',
                                                    }}
                                                    transformOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'center',
                                                    }}
                                                >
                                                    <Box p={2}>
                                                        <Typography>
                                                            {v.name}
                                                        </Typography>
                                                    </Box>
                                                </Popover>
                                            </div>
                                        )}
                                    </PopupState>
                                </div>
                                <CustomInputBase defaultValue={v.value} onChange={event => this.handleChange(event, v.name)} id="input-box"/>
                            </FormControl>
                        </div>
                    })}
                    <ActionButtons
                        btn_submit={ {
                            text: "Weiter",
                            onClick: this.onContinueClick
                        } }
                        btn_cancel={ {
                            text: "Abbrechen",
                            onClick: this.onCancelClick
                        } }
                    />
                </MuiThemeProvider>
            </div>
        )
    }
}

const CustomInputBase = withStyles((theme) => ({
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

function getCurrentKpis() { // TODO
    return newKpis;
}

export { getCurrentKpis } // TODO
export default withStyles(styles)(InputFields)