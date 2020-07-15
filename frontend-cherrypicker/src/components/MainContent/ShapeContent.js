import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import myTheme from "../../styling/muiTheme";
import Paper from "@material-ui/core/Paper";


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
        fontSize: '24px',
        fontFamily: 'Lato-Black, sans-serif',
        letterSpacing: '1.6pt',
        textAlign: 'left',
        marginLeft: '58px',

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
        marginLeft: '58px',
        marginRight: '55px',
        marginTop: '-18px',
        marginBottom: '-15px',
        background: 'none',
        boxShadow: 'none',
    },

    buttonOne: {
        marginLeft: "50px",
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

    registerText: {
        marginLeft: '58px',
        marginRight: '80px',
        background: 'none',
        boxShadow: 'none',
        color: myTheme.palette.secondary.contrastText,
        fontFamily: 'Lato-Regular, sans-serif',
        lineHeight: '22px',
        fontSize: '15px',
    },

    registerButton: {
        background: 'none',
        boxShadow: 'none',
    },

    login: {
        background: 'none',
        boxShadow: 'none',
    }

}));

export default function ShapeContent() {
    const classes = useStyles();

    return (


        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.Headline}>GEMEINSAM<br/>HABEN WIR MEHR!</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.SubHeadline}>
                        Teilt euer überschüssiges, selbstangebautest Obst und Gemüse ganz
                        einfach mit euren Nachbarn oder zukünftign Freunden.
                    </Paper>
                </Grid>

                 {/*fruits and vegetables button*/}
                <Grid item xs={6} container spacing={1}>
                    <a href="https://google.de">
                    <img src="images/obst.png" className={classes.buttonOne}/>
                    </a>
                </Grid>
                <Grid item xs={6} container spacing={1}>
                    <a href="https://google.de">
                    <img src="images/gemuese.png" className={classes.buttonTwo}/>
                    </a>
                </Grid>
            </Grid>

            {/*registertext and button and login*/}
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.registerText}>Werde Teil der Community <br/>& registriert euch hier!</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.registerButton}>button</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.login}>login</Paper>
                </Grid>
            </Grid>


        </div>
    );
}