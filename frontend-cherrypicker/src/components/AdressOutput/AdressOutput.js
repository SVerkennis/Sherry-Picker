import React from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

function AdressOutput({adressOutputName,adressOutputAvatar, adressOutputText}) {

    return(

        <Grid item xs={12}>
            <List className={adressOutputName}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    {adressOutputAvatar}
                    </ListItemAvatar>
                    {adressOutputText}
                </ListItem>
            </List>
        </Grid>

    )

}

export default AdressOutput;