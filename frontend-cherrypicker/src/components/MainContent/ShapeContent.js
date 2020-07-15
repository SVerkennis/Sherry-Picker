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
        fontSize: '28px',
        fontFamily: 'Lato, sans-serif',
        textAlign: 'left',
        marginLeft: '60px',
        marginRight: '55px',
        marginTop: '130px',
        background: 'none',
        boxShadow: 'none',
    },

    SubHeadline: {
        color: myTheme.palette.secondary.contrastText,
        textAlign: 'left',
        marginLeft: '60px',
        marginRight: '55px',
        marginTop: '-10px',
        background: 'none',
        boxShadow: 'none',
    },

    buttonOne: {
        marginLeft: "55px",
        backgroundRepeat: 'no-repeat',
        boxShadow: 'none',
        maxWidth: '90%',
        maxHeight: '90%',
    },

    buttonTwo: {
        marginRight: "55px",
        background: 'none',
        boxShadow: 'none',
        maxWidth: '90%',
        maxHeight: '90%',
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
                    <img src="images/obst.png" className={classes.buttonOne}/>
                </Grid>
                <Grid item xs={6} container spacing={1}>
                    <img src="images/gemuese.png" className={classes.buttonTwo}/>
                </Grid>
            </Grid>
        </div>
    );
}