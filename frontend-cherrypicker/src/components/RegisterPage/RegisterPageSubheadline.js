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
        marginTop: '0.2rem',
        marginBottom: '1rem',
        background: 'none',
        boxShadow: 'none',
    }

}));

function RegisterPageSubheadline() {
    const classes = useStyles();

    return(
        <Grid item xs={12}>
            <Paper className={classes.SubHeadline}>
                Danach kann es sofort losgehen.
            </Paper>
        </Grid>
)

}

export default RegisterPageSubheadline;