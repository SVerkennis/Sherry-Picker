import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";
import Paper from "@material-ui/core/Paper";
import {Link}  from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

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

                    {/*möhre button*/}
                    <Grid item xs={6}>
                        <Link to="/">
                            <img src="images/moehre.png" alt="moehre-logo" className={classes.buttonMoehre}/>
                        </Link>
                    </Grid>

                    {/*tomate button*/}
                    <Grid item xs={6}>
                        <Link to="/">
                            <img src="images/tomate.png" alt="tomate-logo" className={classes.buttonTomate}/>
                        </Link>
                    </Grid>

                    {/*brokkoli button*/}
                    <Grid item xs={6}>
                        <Link to="/">
                            <img src="images/brokkoli.png" alt="brokkoli-logo" className={classes.buttonBrokkoli}/>
                        </Link>
                    </Grid>

                    {/*gurke button*/}
                    <Grid item xs={6}>
                        <Link to="/">
                            <img src="images/gurke.png" alt="gurke-logo" className={classes.buttonGurke}/>
                        </Link>
                    </Grid>

                    {/*paprika button*/}
                    <Grid item xs={6}>
                        <Link to="/">
                            <img src="images/paprika.png" alt="paprika-logo" className={classes.buttonPaprika}/>
                        </Link>
                    </Grid>

                    {/*zwiebel button*/}
                    <Grid item xs={6}>
                        <Link to="/">
                            <img src="images/zwiebel.png" alt="zwiebel-logo" className={classes.buttonZwiebel}/>
                        </Link>
                    </Grid>

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