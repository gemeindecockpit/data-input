import {Box, FormControl, IconButton, InputLabel, Popover, Typography} from '@material-ui/core';
import PopupState, {bindPopover, bindTrigger} from 'material-ui-popup-state/index';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import React, {Component} from 'react';
import {CustomInputBase} from '../../pages/kpi-editor/InputFields';

class InputField extends Component {

    render() {
        return (
            <div key={this.props.name} className={this.props.classes.centeredDiv}>
                <FormControl className={this.props.classes.formControl}>
                    <InputLabel shrink htmlFor="input-box">
                        {this.props.name}
                    </InputLabel>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <PopupState variant="popover" popupId="demo-popup-popover">
                            {(popupState) => (
                                <div>
                                    <IconButton onClick={this.props.handleIconClick} aria-label="info"
                                                style={{align: "right", alignItems: "right"}} {...bindTrigger(popupState)}>
                                        <InfoOutlinedIcon className={this.props.classes.infoIcon} fontSize={"small"}
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
                        onChange={event => this.props.handleChange(event, this.props.name)}
                        id="input-box"
                    />
                </FormControl>
            </div>
        );
    }
}



export default InputField;
