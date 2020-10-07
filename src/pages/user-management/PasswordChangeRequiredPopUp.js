import React, {Component} from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';





function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

function CustomizedSnackbars(props) {
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

        setOpen(false);
    };

    function onClick() {
        props.redirectProfilePage()
    }

    return (
        <div className={classes.root}>

            <Snackbar
                open={open}
                onClose={handleClose}
                anchorOrigin={{ vertical:'top', horizontal:'center' }}
            >
                <Alert severity="warning" onClose={handleClose}>Bitte wechseln Sie ihr Passwort.
                    <Button onClick={onClick}>Passwort wechseln</Button>
                </Alert>
            </Snackbar>

        </div>
    );
}

export default class PasswordReminder extends Component
{
    redirectProfilePage = () =>
    {
        this.props.redirectProfilePage();
    }

    render()
    {
        return(
            this.props.pwResetRequired ?
                <CustomizedSnackbars redirectProfilePage={this.redirectProfilePage}/>
                : null
        );
    }
}