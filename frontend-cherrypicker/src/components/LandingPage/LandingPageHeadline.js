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
        fontSize: '36px',
        textAlign: 'center',
        lineHeight: '2.5rem',
        marginTop: '2rem',
        //   marginLeft: '1.5em',
        background: 'none',
        boxShadow: 'none',
    },

}));

function LandingPageHeadline() {
    const classes = useStyles();

    return(

        <Grid item xs={12}>
            <Paper className={classes.Headline}>
                SCHÖN, <br/>DASS DU NUN BEI UNS BIST!</Paper>
        </Grid>

    )

}

export default LandingPageHeadline;