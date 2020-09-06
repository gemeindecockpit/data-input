import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SvgIcon from "@material-ui/core/SvgIcon";
import { Divider, List, } from "@material-ui/core";

export default class OrganisationList extends React.Component {
    newListItem = (rec) => {
        return (
            <div key={rec.id}>
                <ListItem button component="a" onClick={(ev) => this.organizationSelected(ev, rec.id)}>
                    <ListItemText style={{ color: "white", marginLeft: "10px" }}>{rec.name}</ListItemText>
                    <SvgIcon alt="" style={{color: "white", marginRight: "10px"}}>
                        <path d="M 21.00,19.00
                               C 21.00,19.00 21.00,5.00 21.00,5.00
                                 21.00,3.90 20.10,3.00 19.00,3.00
                                 19.00,3.00 5.00,3.00 5.00,3.00
                                 3.90,3.00 3.00,2.10 3.00,5.00
                                 3.00,5.00 3.00,19.00 3.00,19.00
                                 3.00,21.00 5.00,21.00 5.00,21.00
                                 5.00,21.00 19.00,21.00 19.00,21.00
                                 20.10,21.00 21.00,20.10 21.00,19.00 Z
                               M 8.50,13.50
                               C 8.50,13.50 11.00,16.51 11.00,16.51
                                 11.00,16.51 14.50,12.00 14.50,12.00
                                 14.50,12.00 19.00,18.00 19.00,18.00
                                 19.00,18.00 5.00,18.00 5.00,18.00
                                 5.00,18.00 8.50,13.50 8.50,13.50 Z" />
                    </SvgIcon>
                </ListItem>
                <Divider variant="middle" style={{ backgroundColor: "white" }}/>
            </div>
            
        )
    }

    organizationSelected(ev, id) {
        this.props.chosenOrganisation(id)
    }

    render() {
        let listItems = this.props.data.map(rec => this.newListItem(rec));
        return (
            <div>
                <List>
                    {listItems}
                </List>
            </div>
        );
    }
}