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
        fontSize: '24px',
        fontFamily: 'Lato-Black, sans-serif',
        letterSpacing: '1.6pt',
        textAlign: 'left',
        marginLeft: '64px',
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

    registerText: {
        marginLeft: '64px',
        marginRight: '80px',
        marginTop: '20px',
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
        marginLeft: '64px',
        color: myTheme.palette.secondary.contrastText,
        fontFamily: 'Lato-Bolditalic, sans-serif',
        marginTop: '-12px',
    },

    login: {
        background: 'none',
        boxShadow: 'none',
        fontSize: '18px',
        marginLeft: '35px',
        opacity: '70%',
        marginTop: '-5px',
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
                    <Link to="/fruits">
                    <img src="images/obst.png" className={classes.buttonOne}/>
                    </Link>
                </Grid>

                <Grid item xs={6} container spacing={1}>
                    <Link to="https://google.de">
                    <img src="images/gemuese.png" className={classes.buttonTwo}/>
                    </Link>
                </Grid>
            </Grid>

            {/*registertext and button and login*/}
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.registerText}>Werde Teil der Community <br/>& registriert euch hier!</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.registerButton}>
                        {/*registerButton*/}
                        <Button variant="contained" color="primary" disableElevation>
                            registrieren
                        </Button>
                    </Paper>
                </Grid>

                {/*login option*/}
                <Grid item xs={6}>
                    <Paper className={classes.login}>or login</Paper>
                </Grid>
            </Grid>


        </div>
    );
}