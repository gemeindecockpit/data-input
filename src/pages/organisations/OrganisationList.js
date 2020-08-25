import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Divider, List } from "@material-ui/core";

export default class OrganisationList extends React.Component {
    newListItem = (rec) => {
        return (
            <div key={rec.id}>
                <ListItem button component="a" onClick={(ev) => this.organizationSelected(ev, rec.id)}>
                    <ListItemText style={{ color: "white", marginLeft: "10px" }}>{rec.name}</ListItemText>
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