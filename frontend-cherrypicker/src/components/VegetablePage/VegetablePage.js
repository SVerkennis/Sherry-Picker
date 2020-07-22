import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";
import Paper from "@material-ui/core/Paper";
import {Link}  from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import VegetableButton from "../VegetableButtons/VegetableButton";


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
        letterSpacing: '1.6pt',
        textAlign: 'center',
        marginTop: '3rem',
        lineHeight: '2rem',
        background: 'none',
        boxShadow: 'none',
    },

    SubHeadline: {
        color: myTheme.palette.secondary.contrastText,
        fontFamily: 'Lato-Regular, sans-serif',
        lineHeight: '22px',
        fontSize: '15px',
        textAlign: 'left',
        marginLeft: '80px',
        marginRight: '55px',
        marginTop: '-10px',
        marginBottom: '-10px',
        background: 'none',
        boxShadow: 'none',
    },

    buttonMoehre: {
        marginLeft: "3em",
        backgroundRepeat: 'no-repeat',
        boxShadow: 'none',
    },

    buttonTomate: {
        marginLeft: '-15px',
        background: 'none',
        boxShadow: 'none',
    },

    buttonBrokkoli: {
        marginLeft: "3em",
        marginTop: '-40px',
    },

    buttonGurke: {
        marginLeft: '-15px',
        background: 'none',
        boxShadow: 'none',
        marginTop: '-40px',
    },

    buttonPaprika: {
        marginLeft: "3em",
        marginTop: '-40px',
    },

    buttonZwiebel: {
        marginLeft: '-15px',
        background: 'none',
        boxShadow: 'none',
        marginTop: '-40px',
    },

    backIcon: {
        marginTop: '-2.5em',
        marginLeft: '10em',
        opacity: '80%',
    },

}));


export default function VetetablePage() {
    const classes = useStyles();

    return (


        <div className={classes.root}>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.Headline}>Gemüse</Paper>
                </Grid>
            </Grid>

            {/*NEW buttons*/}
            <div className={classes.root}>
                <Grid container spacing={3}>

                    <VegetableButton
                        buttonName={classes.buttonMoehre}
                        buttonImage="images/moehre.png" alt="moehre-logo"
                        buttonLink="/apfel"
                    />

                    <VegetableButton
                        buttonName={classes.buttonTomate}
                        buttonImage="images/tomate.png" alt="tomate-logo"
                        buttonLink="/apfel"
                    />

                    <VegetableButton
                        buttonName={classes.buttonBrokkoli}
                        buttonImage="images/brokkoli.png" alt="brokkoli-logo"
                        buttonLink="/apfel"
                    />

                    <VegetableButton
                        buttonName={classes.buttonGurke}
                        buttonImage="images/gurke.png" alt="gurke-logo"
                        buttonLink="/apfel"
                    />

                    <VegetableButton
                        buttonName={classes.buttonPaprika}
                        buttonImage="images/paprika.png" alt="paprika-logo"
                        buttonLink="/apfel"
                    />

                    <VegetableButton
                        buttonName={classes.buttonZwiebel}
                        buttonImage="images/zwiebel.png" alt="zwiebel-logo"
                        buttonLink="/apfel"
                    />


                    {/*back icon*/}
                    <Grid item xs={12}>
                        <Link to="/">
                            <div className={classes.backIcon}>
                                <ArrowBackIosIcon fontSize="large"
                                                  color="primary"
                                />
                            </div>
                        </Link>
                    </Grid>


                </Grid>
            </div>


        </div>
    );
}