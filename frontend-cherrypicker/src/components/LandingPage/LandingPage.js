import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";
import Paper from "@material-ui/core/Paper";
import {Link}  from "react-router-dom";
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
        fontSize: '24px',
        fontFamily: 'Lato-Black, sans-serif',
        letterSpacing: '1.6pt',
        textAlign: 'left',
        marginLeft: '2.8em',
        marginTop: '10px',
        background: 'none',
        boxShadow: 'none',
    },

    SubHeadline: {
        color: myTheme.palette.secondary.contrastText,
        fontFamily: 'Lato-Regular, sans-serif',
        lineHeight: '22px',
        fontSize: '15px',
        textAlign: 'left',
        marginLeft: '4.5em',
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
        marginLeft: "3.5em",
        backgroundRepeat: 'no-repeat',
        boxShadow: 'none',
        maxWidth: '80%',
    },

    buttonTwo: {
        marginRight: "3.5em",
        background: 'none',
        boxShadow: 'none',
        maxWidth: '80%',
    },

    shareCircle: {
        width: '50%',
        marginLeft: '12em',
        marginTop: '2.5rem',
    }

}));


export default function LandingPage() {
    const classes = useStyles();

    return(



        <div className={classes.root}>

            <Typography
                component="div"
                text="Hello"
                style={{ backgroundColor: 'none', height: '5vh', marginTop: '5rem', }} />

            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <Paper className={classes.Headline}>WILLKOMMEN!</Paper>
                </Grid>

{/*                <Grid item xs={12}>
                    <Paper className={classes.Hashtag}>#GESUND</Paper>
                </Grid>*/}

                <Grid item xs={12}>
                    <Paper className={classes.SubHeadline}>
                        Du bist nun Teil der Sharing Commuity!
                        Wir freuen uns, dass du mit uns teilst und rettest.
                    </Paper>
                </Grid>


                {/*fruits and vegetables button*/}
                <Grid item xs={6} container spacing={1}>
                    <Link to="/fruits">
                        <img src="images/obst.png" alt="obst-logo" className={classes.buttonOne}/>
                    </Link>
                </Grid>

                <Grid item xs={6} container spacing={1}>
                    <Link to="/vegetables">
                        <img src="images/gemuese.png" alt="gemuese-logo" className={classes.buttonTwo}/>
                    </Link>
                </Grid>


                <Grid item xs={12} container>
                    <Link to="/fruits">
                        <img src="images/shareCircleGesund.png" alt="share-logo" className={classes.shareCircle}/>
                    </Link>
                </Grid>

            </Grid>


        </div>
    )
}