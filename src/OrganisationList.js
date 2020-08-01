import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

let key = 1

export default class OrganisationList extends React.Component {
    newListItem = (rec) => {
        return <ListItem button component="a" key={rec.id} onClick={(ev) => this.organizationSelected(ev, rec.id)}>
            <ListItemText>{rec.name}</ListItemText>
        </ListItem>
    }

    organizationSelected(ev, id) {
        console.log(ev)
        console.log(id)
        this.props.printID(id)
    }

    render() {
        console.log(this.props.data)
        let list = this.props.data.map(rec => this.newListItem(rec))
        return (< div>
            {list}
        </div>)


    }

}