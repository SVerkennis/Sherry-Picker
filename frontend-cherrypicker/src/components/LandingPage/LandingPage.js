import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";
import Paper from "@material-ui/core/Paper";
import {Link}  from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import FruitVegetableButton from "./FruitVegetableButton";
import FruitButton from "../FruitButtons/Fruitbutton";


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
        fontFamily: 'Raleway, sans-serif',
        letterSpacing: '1pt',
        fontSize: '36px',
        marginLeft: '0.8em',
        lineHeight: '2.5rem',
        marginTop: '2rem',
     //   marginLeft: '1.5em',
        background: 'none',
        boxShadow: 'none',
    },

    SubHeadline: {
        color: myTheme.palette.secondary.contrastText,
        fontFamily: 'Lato-Regular, sans-serif',
        lineHeight: '22px',
        fontSize: '15px',
        textAlign: 'left',
        marginLeft: '2.3em',
        marginRight: '1.5em',
        marginTop: '-0.8rem',
        marginBottom: '-1rem',
        background: 'none',
        boxShadow: 'none',
    },

    Hashtag: {
        background: 'none',
        boxShadow: 'none',
        color: myTheme.palette.primary.main,
        fontSize: '30px',
        fontFamily: 'Lato-Black, sans-serif',
        letterSpacing: '1.6pt',
        marginLeft: '2.3em',
        marginTop: '-10px',
        opacity: '80%',
    },

    buttonOne: {
        marginLeft: "2.8em",
        backgroundRepeat: 'no-repeat',
        boxShadow: 'none',
        maxWidth: '90%',
    },
    buttonTwo: {
        marginRight: "3.5em",
        background: 'none',
        boxShadow: 'none',
        maxWidth: '90%',
    },
    shareCircle: {
        maxWidth: '50%',
        position: 'absolute',
        bottom: '-1.6rem',
        right: '0',
    },


}));


export default function LandingPage() {
    const classes = useStyles();

    return(



        <div className={classes.root}>

                <img src="images/shareCircleGesund.png"
                     alt="share-logo"
                     className={classes.shareCircle}/>


            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <Paper className={classes.Headline}>
                        SCHÖN, <br/>DASS DU NUN BEI UNS BIST!</Paper>
                </Grid>


                <Grid item xs={12}>
                    <Paper className={classes.SubHeadline}>
                        Wir freuen uns sehr, dass du nun Teil der Sharing Community bist!
                        Du kannst nun zwischen Obst und Gemüse auswählen und dich auf die Suche begeben.
                    </Paper>
                </Grid>


                <FruitVegetableButton
                    buttonName={classes.buttonOne}
                    buttonImage="images/obst.png" alt="obst-logo"
                    buttonLink="/fruits"
                />

                <FruitVegetableButton
                    buttonName={classes.buttonTwo}
                    buttonImage="images/gemuese.png" alt="gemuese-logo"
                    buttonLink="/vegetables"
                />


                <Typography
                    component="div"
                    text="Hello"
                    style={{ backgroundColor: 'none', height: '10vh', marginTop: '14.3rem', }} />

            </Grid>
        </div>
    )
}