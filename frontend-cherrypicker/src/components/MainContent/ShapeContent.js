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
        fontSize: '30px',
        fontFamily: 'Lato-Black, sans-serif',
        letterSpacing: '1.8pt',
        textAlign: 'left',
        marginLeft: '58px',
        marginRight: '55px',
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
        marginTop: '-14px',
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


}));

export default function ShapeContent() {
    const classes = useStyles();

    return (


        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.Headline}>GEMEINSAM HABEN WIR MEHR!</Paper>
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
        </div>
    );
}