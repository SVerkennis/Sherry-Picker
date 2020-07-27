import React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    appBar: {
        marginRight: '5em',
        marginTop: '16.5rem',
        maxWidth: '15em',
        maxHeight: '1.7rem',
        borderRadius: '14px',
    },

    inlineText: {
        fontSize: '14px',
        paddingBottom: '1.6rem',
    },


}));
// search bar auf apfel/möhre page

function SearchBar() {
    const classes = useStyles();

    return(
        <Grid item xs={12}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <div>
                        <InputBase
                            className={classes.inlineText}
                            placeholder="Wo willst du suchen?"
                            inputProps={{ "aria-label": "search" }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </Grid>
    )

}

export default SearchBar;