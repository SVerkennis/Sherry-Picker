import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import myTheme from "../../styling/muiTheme";


const useStyles = makeStyles((theme) => ({
    fruitButton: {
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url("images/obst.png")',
        marginLeft: '50px',
        marginTop: '-150px',
    },

    Headline: {
        color: myTheme.palette.primary.contrastText,
        fontSize: '34px',
        fontFamily: 'Lato, sans-serif',
        textAlign: 'left',
        marginLeft: '60px',
    },

    SubHeadline: {
        color: myTheme.palette.secondary.contrastText,
        textAlign: 'left',
        marginLeft: '60px',
    },

    textBlock: {
    }

}));

export default function ShapeContent() {
    const classes = useStyles();

    return (

<>
           <h1 align="center" className={classes.Headline}>GEMEINSAM HABEN WIR MEHR!</h1>
           <p className={classes.SubHeadline}>Teilt euer überschüssiges, selbstangebautest Obst und Gemüse ganz einfach mit euren Nachbarn oder zukünftign Freunden.</p>

            <Grid
            container
            className={classes.fruitButton}
            />


</>

    )
}