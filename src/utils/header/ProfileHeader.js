import React from 'react';
import GC_logo from '../../resources/logo_gemeindecockpit.svg'
import Workflows from '../../enums/Workflows';
import { useHistory } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { AppBar, Grid, IconButton, makeStyles, Menu, MenuItem, Toolbar, Typography, Button, createMuiTheme, ThemeProvider } from '@material-ui/core';

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
        marginRight: 'auto'
    },
    menuButton: {
        marginLeft: 'auto',
        color: "#006484",
    },
    secondToolbar: {
        backgroundColor: "#F3F3F3",
    },
    dateText: {
        color: "#006484",
        font: "Roboto",
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

export default function ProfileHeader(props) {
    const classes = useStyles();

    let history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleEditKpiValues = () => {
        history.push("/" + Workflows.EDIT_KPI_VALUES.URL_PARAM + "/organisations");
        setAnchorEl(null);
    };

    const handleEditCompareValues = () => {
        history.push("/" + Workflows.EDIT_COMPARE_VALUES.URL_PARAM + "/organisations");
        setAnchorEl(null);
    };

    const handleGoBack = () => {
        history.goBack();
        setAnchorEl(null);
    }

    return (
        <div className={classes.root}>
            <ThemeProvider theme={muiTheme}>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar variant="dense">
                        <img className={classes.logo} alt="" src={GC_logo}/>
                        <Typography className={classes.headerText} variant="h4">
                            Gemeinde Cockpit
                        </Typography>
                        <IconButton edge="start" className={classes.menuButton} aria-label="menu" onClick={handleClick}>
                            <MenuIcon/>
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
                            <MenuItem className={classes.burgerText} key="KPI-Werte bearbeiten" onClick={handleEditKpiValues}>
                                {Workflows.EDIT_KPI_VALUES.DESCRIPTION}
                            </MenuItem>
                            <MenuItem className={classes.burgerText} key="Vergleichswerte bearbeiten" onClick={handleEditCompareValues}>
                                {Workflows.EDIT_COMPARE_VALUES.DESCRIPTION}
                            </MenuItem>
                            <MenuItem className={classes.burgerText} key="Ausloggen" onClick={handleClose}>
                                Ausloggen
                            </MenuItem>
                        </Menu>
                    </Toolbar>
                    <Toolbar className={classes.secondToolbar}>
                        <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={handleGoBack}>
                            Zurück
                        </Button>
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
            </ThemeProvider>
        </div>
    );
}

const muiTheme = createMuiTheme({
    overrides: {
        MuiButton: {
            outlined: {
                border: 0
            }
        }
    }
})