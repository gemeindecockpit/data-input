import React, {Component} from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';







const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function PasswordReminder(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState({
        open:true,
        vertical: 'top',
        horizontal: 'center'
    });


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false)
    };

    function onClick() {
        props.redirectProfilePage()
    }



    return props.pwResetRequired ? (
        <div className={classes.root}>
            <Snackbar
                open={open.open}
                onClose={handleClose}
                anchorOrigin={{ vertical:'top', horizontal:'center' }}
            >
                <MuiAlert onClose={handleClose} severity="warning">
                    Bitte wechseln Sie ihr Passwort.
                    <Button onClick={onClick}>Passwort wechseln</Button>

                </MuiAlert>
            </Snackbar>
        </div>
    ): null;
}
