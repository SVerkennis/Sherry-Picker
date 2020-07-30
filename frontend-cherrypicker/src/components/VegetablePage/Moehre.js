import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import myTheme from "../../styling/muiTheme";
import Typography from "@material-ui/core/Typography";
import DoubleBackArrow from "../backArrows/doubleBackArrow";
import HomeButton from "../homeButtons/HomeButton";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import AddressOutput from "../AdressOutput/AdressOutput";


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
        letterSpacing: '2pt',
        fontSize: '36px',
        textAlign: 'center',
        marginTop: '2rem',
        background: 'none',
        boxShadow: 'none',
    },

}));

export default function Apfel() {
    const classes = useStyles();

    return(

        <div className={classes.root}>

            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <Paper className={classes.Headline}>MÖHRE</Paper>
                </Grid>

                <Grid item xs={12}>
                    <GoogleMaps/>
                </Grid>


                <AddressOutput/>

                <DoubleBackArrow
                    doubleArrowLink="/vegetables"
                />

                <HomeButton
                    homeButtonLink="/landing"
                />

                <Typography
                    component="div"
                    text="Hello"
                    style={{ backgroundColor: 'none', height: '5vh', marginTop: '0.4rem', }}
                />

            </Grid>
        </div>
    );
}