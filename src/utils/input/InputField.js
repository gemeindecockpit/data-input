import {Box, FormControl, IconButton, InputLabel, Popover, Typography, InputBase, fade} from '@material-ui/core';
import PopupState, {bindPopover, bindTrigger} from 'material-ui-popup-state/index';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import React, {Component} from 'react';
import { withStyles } from '@material-ui/styles';

class InputField extends Component {

    render() {
        const classes = this.props.classes;
        return (
            <div key={this.props.name} className={classes.centeredDiv}>
                <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="input-box">
                        {this.props.name}
                    </InputLabel>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <PopupState variant="popover" popupId="demo-popup-popover">
                            {(popupState) => (
                                <div>
                                    <IconButton aria-label="info"
                                                style={{align: "right", alignItems: "right"}} {...bindTrigger(popupState)}>
                                        <InfoOutlinedIcon className={classes.infoIcon} fontSize={"small"}
                                                          style={{color: "#ffffff"}}/>
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
                                                {this.props.name}
                                            </Typography>
                                        </Box>
                                    </Popover>
                                </div>
                            )}
                        </PopupState>
                    </div>
                        <CustomInputBase
                            defaultValue={this.props.value}
                            className={classes.input}
                            onChange={event => this.props.handleChange(event, this.props.name)}
                            id="input-box"
                        />
                </FormControl>
            </div>
        );
    }
}

const CustomInputBase = withStyles((theme) => ({
    input: {
        autocomplete: 'off',
        marginTop: '2px',
        borderRadius: 10,
        position: 'relative',
        backgroundColor: "transperant",
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '0px 12px',
        color: "white",
        width: '100%',
        height: "50px",
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            boxShadow: `${fade("#000000", 0.25)} 0 0 0 0.2rem`,
            borderColor: "#000000",
            color: "#000000"
        }, 
    },
}))(InputBase);

const styles = () => ({
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

export default withStyles(styles)(InputField);
