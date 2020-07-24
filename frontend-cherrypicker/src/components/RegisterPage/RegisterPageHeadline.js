import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";

const useStyles = makeStyles((theme) => ({

    Headline: {
        color: myTheme.palette.primary.contrastText,
        fontFamily: 'Raleway, sans-serif',
        letterSpacing: '1pt',
        fontSize: '35px',
        textAlign: 'center',
        marginTop: '1rem',
        background: 'none',
        boxShadow: 'none',
    }

}));

function RegisterPageHeadline() {
    const classes = useStyles();

    return(
        <Grid item xs={12}>
            <Paper className={classes.Headline}>TRAG DICH EIN!</Paper>
        </Grid>
    )
}

export default RegisterPageHeadline;