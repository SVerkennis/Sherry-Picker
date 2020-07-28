import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FruitVegetableButton from "./FruitVegetableButton";
import LandingPageHeadline from "./LandingPageHeadline";
import LandingPageSubHeadline from "./LandingPageSubHeadline";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },

    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
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

                <LandingPageHeadline/>

                <LandingPageSubHeadline/>


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