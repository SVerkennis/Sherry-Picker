import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";

const useStyles = makeStyles((theme) => ({

    loginText: {
        color: myTheme.palette.secondary.contrastText,
        fontFamily: 'Lato-Regular, sans-serif',
        lineHeight: '1.4rem',
        fontSize: '15px',
        textAlign: 'center',
        marginTop: '0.4rem',
        marginBottom: '-0.5rem',
        background: 'none',
        boxShadow: 'none',
    },
    registerClick: {
        color: myTheme.palette.primary.light,
        fontFamily: 'Lato-Regular, sans-serif',
        textDecoration: 'none',
    },
}));

function ShapeContentLoginText() {
    const classes = useStyles();

    return(
        <Grid item xs={12}>
            <Paper className={classes.loginText}>
                Logg dich jetzt ein.
                <br/>
                Oder registrier dich
                <Link to="/register" className={classes.registerClick}>
                    <nbsp/> <b>hier!</b>
                </Link>
            </Paper>
        </Grid>
    )
}

export default ShapeContentLoginText;