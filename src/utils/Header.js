import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import gclogo from '../resources/gc.png'
import MenuItem from '@material-ui/core/MenuItem';
import Workflows from './../enums/Workflows';
import { useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    text: {
        color: "#006484",
        font: "Roboto",
      },
    menuButton: {
        marginLeft: 'auto',
        color: "#006484",
    },
    secondToolbar: {
        backgroundColor: "#F3F3F3",
    },
    dateText: {
        font: "Roboto",
        color: "#006484",
        marginLeft: 'auto',
    },
    appBar: {
        backgroundColor:"#FFFFFF"
    }
}));

export default function DenseAppBar(props) {

    const classes = useStyles();

    let history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [workflow, setWorkflow] = React.useState((props.workflow === Workflows.EDIT_KPI_VALUES.URL_PARAM) ? Workflows.EDIT_KPI_VALUES : Workflows.EDIT_COMPARE_VALUES)
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        history.push("/")
    };

    const handleWorkflowChange = () => {
        props.onWorkflowChange(oppositeWorkflow().URL_PARAM)
        setWorkflow(oppositeWorkflow());
        setAnchorEl(null);
    };

    const oppositeWorkflow = () => {
        if(workflow === Workflows.EDIT_KPI_VALUES) {
            return Workflows.EDIT_COMPARE_VALUES;
        }
        if(workflow === Workflows.EDIT_COMPARE_VALUES) {
            return Workflows.EDIT_KPI_VALUES;
        }
    }

    const routeToOrganisations = () => {
        setAnchorEl(null);
        history.push('/organisations');
    }


    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar variant="dense">
                    <img alt="" src={gclogo} />
                    <Typography className={classes.text} variant="h4">
                        Gemeinde Cockpit
                    </Typography>
                    <IconButton edge="start" className={classes.menuButton} aria-label="menu" onClick={handleClick}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: "500px",
                                maxWidth: '100vw',
                            },
                        }}
                    >

                        <MenuItem className={classes.text} key="Datenhistorie" onClick={handleClose}>
                            Datenhistorie
                        </MenuItem>
                        <MenuItem className={classes.text} key="Organisation wechseln" onClick={routeToOrganisations}>
                            Organisation wechseln
                        </MenuItem>
                        <MenuItem className={classes.text} key="Workflow wechseln" onClick={handleWorkflowChange}>
                            {oppositeWorkflow().DESCRIPTION}
                        </MenuItem>
                        <MenuItem className={classes.text} key="Profil pflegen" onClick={handleClose}>
                            Profil pflegen
                        </MenuItem>
                        <MenuItem className={classes.text} key="Ausloggen" onClick={handleClose}>
                            Ausloggen
                        </MenuItem>
                    </Menu>
                </Toolbar>
                <Toolbar className={classes.secondToolbar}>
                    <Typography className={classes.text} style={{color: workflow.URL_PARAM === Workflows.EDIT_KPI_VALUES.URL_PARAM ? "#00546F" : "#FF5B5B"}}>
                        {(props.title ? props.title : "") + ": " + workflow.DESCRIPTION}
                    </Typography>
                    <Typography className={classes.dateText} >{props.chosenDate.toDateString()}</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}