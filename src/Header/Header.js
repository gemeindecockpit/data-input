import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import gclogo from '../gc.png'
import { isWithinInterval } from 'date-fns';
import MenuItem from '@material-ui/core/MenuItem';
import Datepicker from '../Datepicker/Datepicker';


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
    }
}));

export default function DenseAppBar(props) {



    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="#FFFFFF">
                <Toolbar variant="dense">
                    <img src={gclogo} />
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
                                maxHeight: 48 * 4.5,
                                width: '20ch',
                            },
                        }}
                    >

                        <MenuItem className={classes.text} key="Datenhistorie" onClick={handleClose}>
                            Datenhistorie
                        </MenuItem>
                        <MenuItem className={classes.text} key="Organisation wechseln" onClick={handleClose}>
                            Organisation wechseln
                        </MenuItem>
                        <MenuItem className={classes.text} key="Workflow wechseln" onClick={handleClose}>
                            Workflow wechseln
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
                <Typography className={classes.text}>
                        Organisation
                    </Typography>
                    <Typography className={classes.dateText} >{props.chosenDate.toDateString()}</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}