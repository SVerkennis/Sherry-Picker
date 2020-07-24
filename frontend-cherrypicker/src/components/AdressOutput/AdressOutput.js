import React from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

function AdressOutput({adressOutputName}) {

    return(

        <Grid item xs={12}>
            <List className={adressOutputName}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Paul Hildemann" src="images/paul.png"/>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Paul Hildemann"
                        secondary={
                            <React.Fragment>
                                {' 0208 34 4389 43 '}
                                <br/>
                                {' Kreuzstraße 14 '}
                                <br/>
                                {' Mülheim an der Ruhr '}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </List>
        </Grid>

    )

}

export default AdressOutput;