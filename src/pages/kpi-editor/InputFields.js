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
            kpis: [[]],
            page: 1,
            inputFieldsLimit: 1
        };
    }

    componentDidMount = () => {
        this.getInputFields();
    }

    getInputFields = () => {
        const { kpis } = this.props;
        var newKpis = [];
        
        var inputFieldsLimit = parseInt(((window.innerHeight-421)/98).toString().split('.')[0]) + 1;

        if(kpis.length > inputFieldsLimit) {
            var temp = [], counter = 1;
            kpis.forEach((el) => {
                temp.push(el);
                if(counter === inputFieldsLimit){
                    counter = 1;
                    newKpis.push(temp);
                    temp = [];
                } else {
                    counter++; 
                }
            });
            if(temp.length > 0) {
                newKpis.push(temp);
            }
        } else {
            newKpis.push(kpis)
        }
        this.setState({ kpis: newKpis, inputFieldsLimit: inputFieldsLimit });
    }

    showInputFields = () => {
        const { page, kpis } = this.state;
        return kpis[page-1].map(kpi => {
            return (
                <InputField
                    key={ kpi.name }
                    name={ kpi.name }
                    value={ kpi.value }
                    onIconClick={ this.onIconClick }
                    handleChange={ this.handleChange }
                />
            )                    
        });
    }
    
    handlePageChange = (event, value) => {
        this.setState({page: value});
    }

    handleChange = (event, kpiName) => {
        var newKpis = this.state.kpis;        
        newKpis[this.state.page-1][newKpis[this.state.page-1].findIndex(v => v.name === kpiName)] = {name: kpiName, value: event.target.value}
        this.setState({ kpis: newKpis })
    }

    onSubmit = () => {
        var submitKpis = [];
        this.state.kpis.forEach(kpis => {
            kpis.forEach(kpi => {
                submitKpis.push(kpi);
            })
        })
        this.props.onSubmit(submitKpis);
    }

    onAbort = () => {
        this.props.onAbort()   
    }

    onIconClick = (event) => {
    }

    render() {
        const { kpis, page, inputFieldsLimit } = this.state;
        const classes = this.props.classes
        
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <div style={{ height: ((inputFieldsLimit>this.props.kpis.length) ? (this.props.kpis.length*98) + "px" : (inputFieldsLimit*98) + "px") }}>
                        {this.showInputFields()}
                    </div>
                    {kpis.length > 1 ? 
                        <div className={classes.centeredDiv}>
                            <Pagination
                                variant="outlined"
                                count={kpis.length}
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
