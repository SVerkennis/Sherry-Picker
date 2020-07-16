import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";
import Paper from "@material-ui/core/Paper";
import {Link} from "react-router-dom";

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
        textAlign: 'left',
        marginLeft: '145px',
        marginTop: '120px',
        background: 'none',
        boxShadow: 'none',
    },

    SubHeadline: {
        color: myTheme.palette.secondary.contrastText,
        fontFamily: 'Lato-Regular, sans-serif',
        lineHeight: '22px',
        fontSize: '15px',
        textAlign: 'left',
        marginLeft: '64px',
        marginRight: '55px',
        marginTop: '-10px',
        marginBottom: '-10px',
        background: 'none',
        boxShadow: 'none',
    },

    buttonApfel: {
        marginLeft: "65px",
        backgroundRepeat: 'no-repeat',
        boxShadow: 'none',
        maxWidth: '80%',
        maxHeight: '80%',
    },

    buttonTraube: {
        marginLeft: '-15px',
        background: 'none',
        boxShadow: 'none',
        maxWidth: '80%',
        maxHeight: '80%',
    },

    buttonBirne: {
        marginLeft: '65px',
        marginTop: '-40px',
    },

    buttonKirsche: {
        marginLeft: '-15px',
        background: 'none',
        boxShadow: 'none',
        marginTop: '-40px',
    },

    buttonWassermelone: {
        marginLeft: '65px',
        marginTop: '-40px',
    },

    buttonErdbeere: {
        marginLeft: '-15px',
        background: 'none',
        boxShadow: 'none',
        marginTop: '-40px',
    }

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
                <Grid item xs={12}>
                    <Paper className={classes.SubHeadline}>
                        -is healthy as fuck-
                    </Paper>
                </Grid>
            </Grid>


            {/*NEW buttons*/}
            <div className={classes.root}>
                <Grid container spacing={3}>

                    {/*apfel button*/}
                    <Grid item xs={6}>
                        <Link to="/">
                            <img src="images/apfel.png" alt="apfel-logo" className={classes.buttonApfel}/>
                        </Link>
                    </Grid>

                    {/*traube button*/}
                    <Grid item xs={6}>
                        <Link to="/">
                            <img src="images/traube.png" alt="traube-logo" className={classes.buttonTraube}/>
                        </Link>
                    </Grid>

                    {/*birne button*/}
                    <Grid item xs={6}>
                        <Link to="/">
                            <img src="images/birne.png" alt="birne-logo" className={classes.buttonBirne}/>
                        </Link>
                    </Grid>

                    {/*kirsche button*/}
                    <Grid item xs={6}>
                        <Link to="/">
                            <img src="images/kirsche.png" alt="kirsche-logo" className={classes.buttonKirsche}/>
                        </Link>
                    </Grid>

                    {/*wassermelone button*/}
                    <Grid item xs={6}>
                        <Link to="/">
                            <img src="images/wassermelone.png" alt="traube-logo" className={classes.buttonWassermelone}/>
                        </Link>
                    </Grid>

                    {/*erdbeere button*/}
                    <Grid item xs={6}>
                        <Link to="/">
                            <img src="images/erdbeere.png" alt="erdbeere-logo" className={classes.buttonErdbeere}/>
                        </Link>
                    </Grid>

                </Grid>
            </div>


        </div>

    );
}