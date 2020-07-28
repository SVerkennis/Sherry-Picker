import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";

const useStyles = makeStyles((theme) => ({

    SubHeadline: {
        color: myTheme.palette.secondary.contrastText,
        fontFamily: 'Lato-Regular, sans-serif',
        lineHeight: '22px',
        fontSize: '15px',
        textAlign: 'center',
        marginLeft: '2.3em',
        marginRight: '1.5em',
        marginTop: '-0.8rem',
        marginBottom: '-1rem',
        background: 'none',
        boxShadow: 'none',
        letterSpacing: '0.5pt',
    },

}));

function LandingPageSubHeadline() {
    const classes = useStyles();

    return(

        <Grid item xs={12}>
            <Paper className={classes.SubHeadline}>
                Wir freuen uns, dass du Teil der Sharing Community bist!
                <br/>Du kannst zwischen Obst und Gemüse auswählen.
            </Paper>
        </Grid>

    )

}

export default LandingPageSubHeadline;