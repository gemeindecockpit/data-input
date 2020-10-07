import React from 'react';
import {
    AppBar,
    Grid,
    IconButton,
    makeStyles,
    Menu,
    MenuItem,
    Toolbar,
    Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import GC_logo from '../resources/logo_gemeindecockpit.svg'
import Workflows from './../enums/Workflows';
import Divider from './Divider';
import { useHistory} from 'react-router-dom';
import ApiCalls from '../utils/communication/ApiCalls.js';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    headerText: {
        color: "#006484",
        font: "Roboto",
        fontSize: "25px"
    },
    burgerText: {
        color: "#006484",
        font: "Roboto",
        fontSize: "16px"
    },
    secondHeaderText: {
        color: "#006484",
        font: "Roboto",
        fontSize: "17px",
        display: "flex",
        alignItems: 'center',
        marginLeft: '10px',
        marginRight: 'auto',
        fontWeight: 'bold'
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
        fontSize: "17px",
        display: "flex",
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: '10px'
    },
    appBar: {
        backgroundColor: "#FFFFFF"
    },
    logo: {
        blockSize: '75px'
    }
}));

export default function DenseAppBar(props) {

    const classes = useStyles();

    let history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [workflow, setWorkflow] = React.useState((props.workflow === Workflows.EDIT_KPI_VALUES.URL_PARAM) ? Workflows.EDIT_KPI_VALUES : Workflows.EDIT_COMPARE_VALUES);
    const [showReviewScreen, setShowReviewScreen] = React.useState(props.showReviewScreen);
    if (showReviewScreen != props.showReviewScreen) {
        setShowReviewScreen(props.showReviewScreen);
    }
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLogOut = () => {
        (new ApiCalls("")).logout().then(res => {
        });
        setAnchorEl(null);
        history.push("/login")
    }

    const handleClose = () => {
        setAnchorEl(null);
        history.push("/")
    };

    const handleWorkflowChange = () => {
        alert("In progress... incomplete backend");
        /*
            props.onWorkflowChange(oppositeWorkflow().URL_PARAM)
            setWorkflow(oppositeWorkflow());
            setAnchorEl(null);
         */
    };

    const oppositeWorkflow = () => {
        if (workflow === Workflows.EDIT_KPI_VALUES) {
            return Workflows.EDIT_COMPARE_VALUES;
        }
        if (workflow === Workflows.EDIT_COMPARE_VALUES) {
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
                    <img className={classes.logo} alt="" src={GC_logo}/>
                    <Typography className={classes.headerText} variant="h4">
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

                        <MenuItem className={classes.burgerText} key="Datenhistorie" onClick={handleClose}>
                            Datenhistorie
                        </MenuItem>
                        <MenuItem className={classes.burgerText} key="Organisation wechseln" onClick={routeToOrganisations}>
                            Organisation wechseln
                        </MenuItem>
                        <MenuItem className={classes.burgerText} key="Workflow wechseln" onClick={handleWorkflowChange}>
                            {oppositeWorkflow().DESCRIPTION}
                        </MenuItem>
                        <MenuItem className={classes.burgerText} key="Profil pflegen" onClick={handleClose}>
                            Profil pflegen
                        </MenuItem>
                        <MenuItem className={classes.text} key="Ausloggen" onClick={handleLogOut}>
                            Ausloggen
                        </MenuItem>

                    </Menu>
                </Toolbar>
                <Toolbar className={classes.secondToolbar}>

                    <Grid>
                        <Typography display={"inline"} className={classes.secondHeaderText}
                                   >
                            {(props.title ? props.title : "") + ": "}
                        </Typography>
                    </Grid>

                    <Typography className={classes.dateText}>
                        {
                            (props.chosenDate.toLocaleString('de', {weekday: 'long'})).slice(0, 2)
                            + ", " + ('0' + props.chosenDate.getDate()).slice(-2) + '.'
                            + ('0' + (props.chosenDate.getMonth() + 1)).slice(-2) + '.'
                            + props.chosenDate.getFullYear()
                        }
                    </Typography>
                </Toolbar>
            </AppBar>
            {Divider(showReviewScreen ? workflow.REVIEWSCREEN_DESCRIPTION : workflow.DESCRIPTION)}
        </div>
    );
}