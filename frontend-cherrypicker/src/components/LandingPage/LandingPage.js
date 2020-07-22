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
        fontSize: '24px',
        fontFamily: 'Lato-Black, sans-serif',
        letterSpacing: '1.6pt',
        textAlign: 'center',
        marginTop: '3rem',
        lineHeight: '2rem',
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
        marginLeft: '3.8em',
        marginRight: '55px',
        marginTop: '-10px',
        marginBottom: '-10px',
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
                    <Paper className={classes.Headline}>HERZLICH <br/>WILLKOMMEN!</Paper>
                </Grid>


                <Grid item xs={12}>
                    <Paper className={classes.SubHeadline}>
                        Du bist nun Teil der Sharing Commuity!
                        Wir freuen uns, dass du mit uns teilst und rettest.
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
                    style={{ backgroundColor: 'none', height: '10vh', marginTop: '17.1rem', }} />

            </Grid>
        </div>
    )
}