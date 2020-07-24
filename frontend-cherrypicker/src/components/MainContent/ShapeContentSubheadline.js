import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";

const useStyles = makeStyles((theme) => ({
    SubHeadline: {
        color: myTheme.palette.secondary.contrastText,
        fontFamily: 'Lato-Regular, sans-serif',
        lineHeight: '1.3rem',
        fontSize: '15px',
        marginTop: '-0.5rem',
        textAlign: 'center',
        background: 'none',
        boxShadow: 'none',
    }
}));

function ShapeContentSubheadline() {
    const classes = useStyles();

    return(

        <Grid item xs={12}>
            <Paper className={classes.SubHeadline}>
                Teilt euer wunderbar selbstangebautest <br/> und überschüssiges Obst und Gemüse.
            </Paper>
        </Grid>

    )
}

export default ShapeContentSubheadline;