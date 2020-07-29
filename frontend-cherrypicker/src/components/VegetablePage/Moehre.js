import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import myTheme from "../../styling/muiTheme";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SvgIcon from "@material-ui/core/SvgIcon";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import DoubleBackArrow from "../backArrows/doubleBackArrow";
import HomeButton from "../homeButtons/HomeButton";
import AdressOutput from "../AdressOutput/AdressOutput";
import SearchBar from "../SearchBar/SearchBar";


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

    infoText: {
        color: myTheme.palette.secondary.contrastText,
        fontFamily: 'Lato-Regular, sans-serif',
        lineHeight: '22px',
        fontSize: '15px',
        marginLeft: '3em',
        marginRight: '3em',
        marginTop: '-0.8rem',
        marginBottom: '-10px',
        background: 'none',
        boxShadow: 'none',
    },

    // just the search bar
    grow: {
        flexGrow: 1,
    },

    mapsImage: {
        marginLeft: '0.9em',
        background: 'none',
        boxShadow: 'none',
        marginTop: '-0.6rem',
    },

    // NEW MUI component
    profil: {
        color: myTheme.palette.secondary.contrastText,
        background: 'none',
        boxShadow: 'none',
        marginTop: '-4rem',
        marginLeft: '3em',
    },

    profilTamai: {
        color: myTheme.palette.secondary.contrastText,
        background: 'none',
        boxShadow: 'none',
        marginTop: '-1rem',
        marginLeft: '3em',
    },


}));

export default function Apfel() {
    const classes = useStyles();

    return(

        // Headline und infoText
        <div className={classes.root}>

            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <Paper className={classes.Headline}>MÖHRE</Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.infoText}>
                        Suche dir Anbieter in deiner Nähe <br/> & rette ein paar Möhren.
                    </Paper>
                </Grid>

                <SearchBar/>

                {/*Maps Ausschnitt*/}
                <Grid item xs={12}>
                    <Paper className={classes.mapsImage}>
                        <img src="images/mapsImage.png" alt="mapsImage-logo"/>
                    </Paper>
                </Grid>


                <AdressOutput
                    adressOutputName={classes.profil}
                />

                <DoubleBackArrow
                    doubleArrowLink="/vegetables"
                />

                <HomeButton
                    homeButtonLink="/landing"
                />

                <Typography
                    component="div"
                    text="Hello"
                    style={{ backgroundColor: 'none', height: '5vh', marginTop: '1.1rem', }}
                />

            </Grid>
        </div>
    );
}