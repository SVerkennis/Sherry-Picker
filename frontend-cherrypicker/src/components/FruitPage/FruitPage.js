import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";
import Paper from "@material-ui/core/Paper";
import {Link} from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import FruitButton from "../FruitButtons/Fruitbutton";
import Typography from "@material-ui/core/Typography";


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
        //   marginLeft: '1.5em',
        background: 'none',
        boxShadow: 'none',
    },

/*    SubHeadline: {
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
    },*/

    buttonApfel: {
        marginLeft: "3em",
        backgroundRepeat: 'no-repeat',
        boxShadow: 'none',
    },

    buttonTraube: {
        marginLeft: '-15px',
        background: 'none',
        boxShadow: 'none',
    },

    buttonBirne: {
        marginLeft: "3em",
        marginTop: '-40px',
    },

    buttonKirsche: {
        marginLeft: '-15px',
        background: 'none',
        boxShadow: 'none',
        marginTop: '-40px',
    },

    buttonWassermelone: {
        marginLeft: "3em",
        marginTop: '-40px',
    },

    buttonErdbeere: {
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


export default function FruitPage() {
    const classes = useStyles();

    return (

        // Überschriften
        <div className={classes.root}>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.Headline}>OBST</Paper>
                </Grid>

{/*          // Subhead
               <Grid item xs={12}>
                    <Paper className={classes.SubHeadline}>
                        -is healthy as fuck-
                    </Paper>
                </Grid>*/}
            </Grid>


            {/*NEW buttons*/}
            <div className={classes.root}>
                <Grid container spacing={3}>

                    <FruitButton
                    buttonName={classes.buttonApfel}
                    buttonImage="images/apfel.png" alt="apfel-logo"
                    buttonLink="/apfel"
                    />


                    <FruitButton
                        buttonName={classes.buttonTraube}
                        buttonImage="images/traube.png" alt="traube-logo"
                        buttonLink="/apfel"
                    />


                    <FruitButton
                        buttonName={classes.buttonBirne}
                        buttonImage="images/birne.png" alt="birne-logo"
                        buttonLink="/apfel"
                    />

                    <FruitButton
                        buttonName={classes.buttonKirsche}
                        buttonImage="images/kirsche.png" alt="kirsche-logo"
                        buttonLink="/apfel"
                    />

                    <FruitButton
                        buttonName={classes.buttonWassermelone}
                        buttonImage="images/wassermelone.png" alt="wassermelone-logo"
                        buttonLink="/apfel"
                    />

                    <FruitButton
                        buttonName={classes.buttonErdbeere}
                        buttonImage="images/erdbeere.png" alt="erdbeere-logo"
                        buttonLink="/apfel"
                    />



                    {/*back icon*/}
                    <Grid item xs={12}>
                        <Link to="/landing">
                            <div className={classes.backIcon}>
                                <ArrowBackIosIcon fontSize="large"
                                                  color="primary"
                                />
                            </div>
                        </Link>
                    </Grid>

                    <Typography
                        component="div"
                        style={{ backgroundColor: 'none', height: '5vh', marginTop: '0.2rem', }} />

                </Grid>
            </div>



        </div>

    );
}