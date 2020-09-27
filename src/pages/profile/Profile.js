import React, { Component } from 'react'
import ProfileHeader from '../../utils/header/ProfileHeader';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import LockIcon from '@material-ui/icons/Lock';
import { Paper, List, ListItem, ListItemText, ListItemIcon, Divider, createMuiTheme, ListItemAvatar, Avatar, CircularProgress } from '@material-ui/core';
import { withStyles, ThemeProvider } from '@material-ui/styles';
import axios from 'axios';

const toggleSize = 600;

const baseUrl = "http://litwinow.xyz/";

const Title = ( text ) => {
    return (
        <div style={{ display: "flex", alignItems: "center", paddingLeft: "30px", paddingRight: "30px", paddingTop: "30px" }}>
            <div style={{ borderBottom: "1px solid #FFFFFF80", width: "50%" }} />
                <span style={{padding: "0 10px 0 10px", color: "white", whiteSpace: "pre"}}>
                    {text}
                </span>
            <div style={{ borderBottom: "1px solid #FFFFFF80", width: "50%" }} />
        </div>
    );
};

export class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            userId: null,
            username: "",
            name: "",
            email: "",
            password: "••••••••",
            reqPwReset: false,
            isLoading: true
        };
    }

    getUserInfo = () => {
        return axios.get(baseUrl + "users/me");
    }

    simpleList = (classes) => {
        const { username, name, email, password } = this.state;
        
        return (
            <List disablePadding>
                <ListItem>
                    <ListItemText className={classes.listItemTextKey}>
                        Username
                    </ListItemText>
                    <ListItemText className={classes.listItemTextValue}>
                        {username}
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText className={classes.listItemTextKey}>
                        Name
                    </ListItemText>
                    <ListItemText className={classes.listItemTextValue}>
                        {name}
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText className={classes.listItemTextKey}>
                        E-Mail
                    </ListItemText>
                    <ListItemText className={classes.listItemTextValue}>
                        {email}
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button className={classes.listItem} onClick={this.handlePasswordClick}>
                    <ListItemText className={classes.listItemTextKey}>
                        Passwort
                    </ListItemText>
                    <ListItemText className={classes.listItemTextValue}>
                        {password}
                    </ListItemText>
                    <ListItemIcon className={classes.listIcon}>
                        <ArrowForwardIosIcon />
                    </ListItemIcon>
                </ListItem>
            </List>
        )
    }

    folderList  = (classes) => {
        const { username, name, email, password } = this.state;

        return (
            <List className={classes.root}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <AssignmentIndIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Username" secondary={username} />
                </ListItem>                
                <Divider variant="inset"/>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <AssignmentIndIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Name" secondary={name} />
                </ListItem>                
                <Divider variant="inset"/>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <AlternateEmailIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="E-Mail" secondary={email} />
                </ListItem>
                <Divider variant="inset"/>
                <ListItem button onClick={this.handlePasswordClick}>
                    <ListItemAvatar>
                        <Avatar>
                            <LockIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Passwort" secondary={password} />
                    <ListItemIcon className={classes.listIcon}>
                        <ArrowForwardIosIcon />
                    </ListItemIcon>
                </ListItem>
            </List>
        )
    }

    handlePasswordClick = () => {
        this.props.history.push("/password")
    }

    updateSize = () => {
        this.setState({ width: window.innerWidth })
    }

    componentDidMount = () => {
        this.getUserInfo().then(response => {
            this.setState({ 
                userId: response.id_user, 
                username: response.username, 
                name: response.realname, 
                email: response.email, 
                reqPwReset: (response.req_pw_reset === 1) ? true : false,
                isLoading: false 
            })
        }).catch(error => {
            console.error(error);
        })
    }

    render() {
        const { width, isLoading } = this.state;
        const classes = this.props.classes;

        window.addEventListener('resize', this.updateSize);

        if(isLoading) {
            return (
                <div>
                    <ThemeProvider theme={muiTheme}>
                        <ProfileHeader chosenDate={new Date()}/>
                        { Title("Persönliche Daten") }
                        <div className={classes.centeredDiv} style={{ marginTop: "30vh" }} >
                            <CircularProgress />
                        </div>
                    </ThemeProvider>
                </div>
            )
        }
        
        return (
            <div>
                <ProfileHeader chosenDate={new Date()}/>
                { Title("Persönliche Daten") }
                <ThemeProvider theme={muiTheme}>
                    <div className={classes.centeredDiv}>
                        <Paper className={classes.overviewPaper}>
                            {width > toggleSize ? this.simpleList(classes) : this.folderList(classes)}
                        </Paper>
                    </div>
                </ThemeProvider>
            </div>
        )
    }
}

const muiTheme = createMuiTheme({
    overrides: {
        MuiListItemText: {
            root: {
                flexGrow: "unset"
            }
        },
        MuiListItemIcon: {
            root: {
                minWidth: 0
            }
        },
        MuiCircularProgress: {
            colorPrimary: {
                color: "white"
            }
        }
    }
})

const styles = (theme) => ({
    overviewPaper: {
        width: "100%",
        marginTop: "0px",
        marginLeft: "25px",
        marginRight: "25px",
        overflow: "auto"
    },
    centeredDiv: {
        marginTop: "30px",
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"
    },
    listItem: {
        display: "flex"
    },
    listItemTextKey: {
        width: "200px"
    },
    listItemTextValue: {

    },
    listIcon: {
        marginLeft: "auto",
    }
})

export default withStyles(styles)(Profile);
