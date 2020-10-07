import React, { Component } from 'react';
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core';
import InputField from '../../utils/input/InputField';
import CustomButton from '../../utils/control/CustomButton';
import ButtonThemes from '../../enums/ButtonThemes';
import { Pagination } from '@material-ui/lab';

class InputFields extends Component {
    constructor(props) {
        super(props);
        this.state={
            pagedFields: [[]],
            page: 1,
            inputFieldsLimit: 1
        };
    }

    componentDidMount = () => {
        this.getInputFields();
    }

    getInputFields = () => {
        const { fields } = this.props;
        var pagedFields = [];
        var inputFieldsLimit = parseInt(((window.innerHeight-421)/98).toString().split('.')[0]) + 1;

        if(fields.length > inputFieldsLimit) {
            var fieldPage = [], counter = 1;
            fields.forEach((field) => {
                fieldPage.push(field);
                if(counter === inputFieldsLimit){
                    counter = 1;
                    pagedFields.push(fieldPage);
                    fieldPage = [];
                } else {
                    counter++; 
                }
            });
            if(fieldPage.length > 0) {
                pagedFields.push(fieldPage);
            }
        } else {
            pagedFields.push(fields)
        }
        this.setState({ pagedFields: pagedFields, inputFieldsLimit: inputFieldsLimit });
    }

    showInputFields = () => {
        const { page, pagedFields } = this.state;
        return pagedFields[page-1].map(field => {
            return (
                <InputField
                    key={ field.field_id }
                    field={ field }
                    onIconClick={ this.onIconClick }
                    handleChange={ this.handleChange }
                />
            )                    
        });
    }
    
    handlePageChange = (event, value) => {
        this.setState({page: value});
    }

    handleChange = (event, field_id) => {
        var pagedFields = this.state.pagedFields;
        pagedFields[this.state.page-1].forEach(field => {
            if(field.field_id === field_id) {
                field.field_value = event.target.value;
            }
        });

        this.setState({ pagedFields: pagedFields })
    }

    onSubmit = () => {
        var fields = [];
        this.state.pagedFields.forEach(pagedField => {
            pagedField.forEach(field => {
                fields.push(field);
            })
        })
        this.props.onSubmit(fields);
    }

    onAbort = () => {
        this.props.onAbort()   
    }

    onIconClick = (event) => {
    }

    render() {
        const { pagedFields, page, inputFieldsLimit } = this.state;
        const classes = this.props.classes
        
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <div style={{ height: ((inputFieldsLimit>this.props.fields.length) ? (this.props.fields.length*98) + "px" : (inputFieldsLimit*98) + "px") }}>
                        {this.showInputFields()}
                    </div>
                    {pagedFields.length > 1 ?
                        <div className={classes.centeredDiv}>
                            <Pagination
                                variant="outlined"
                                count={pagedFields.length}
                                page={page}
                                onChange={this.handlePageChange}
                            />
                        </div>                        
                        :
                        <div></div>
                    }
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
        },
        MuiPaginationItem: {
            root: {
                color: "white"
            },
            page: {
                "&.Mui-selected": {
                    backgroundColor: "#00546F",
                },
            },
            outlined: {
                border: "1px solid white"
            }
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
