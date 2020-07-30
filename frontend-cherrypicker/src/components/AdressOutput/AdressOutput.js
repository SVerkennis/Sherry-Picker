import React from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";

const useStyles = makeStyles((theme) => ({

    profileStyle: {
        color: myTheme.palette.secondary.main,
        fontFamily: 'Lato-Regular, sans-serif',
        marginTop: '-4rem',
        marginLeft: '3em',
    },

}));

function AddressOutput() {
    const classes = useStyles();

    return(

        <Grid item xs={12}>
            <List className={classes.profileStyle}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Tamai Hildemann" src="images/tamai.png"/>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Tamai Hildemann"
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

export default AddressOutput;