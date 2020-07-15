import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import {Link}  from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },

    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },

    Headline: {
        color: myTheme.palette.primary.contrastText,
        fontSize: '30px',
        fontFamily: 'Lato-Black, sans-serif',
        letterSpacing: '1.6pt',
        textAlign: 'left',
        marginLeft: '145px',
        marginTop: '130px',
        background: 'none',
        boxShadow: 'none',
    },

    SubHeadline: {
        color: myTheme.palette.secondary.contrastText,
        fontFamily: 'Lato-Regular, sans-serif',
        lineHeight: '22px',
        fontSize: '15px',
        textAlign: 'left',
        marginLeft: '64px',
        marginRight: '55px',
        marginTop: '-10px',
        marginBottom: '-10px',
        background: 'none',
        boxShadow: 'none',
    },

    buttonOne: {
        marginLeft: "55px",
        backgroundRepeat: 'no-repeat',
        boxShadow: 'none',
        maxWidth: '80%',
        maxHeight: '80%',
    },

    buttonTwo: {
        marginRight: "50px",
        background: 'none',
        boxShadow: 'none',
        maxWidth: '80%',
        maxHeight: '80%',
    },


}));

export default function FruitPage() {
    const classes = useStyles();

    return (


        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.Headline}>OBST</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.SubHeadline}>
                        -is healthy as fuck-
                    </Paper>
                </Grid>

                {/*fruits and vegetables button*/}
                <Grid item xs={6} container spacing={1}>
                    <Link to="/apfel">
                        <img src="images/apfel.png" className={classes.buttonOne}/>
                    </Link>
                </Grid>

                <Grid item xs={6} container spacing={1}>
                    <Link to="https://google.de">
                        <img src="images/moehre.png" className={classes.buttonTwo}/>
                    </Link>
                </Grid>
            </Grid>

        </div>
    );
}