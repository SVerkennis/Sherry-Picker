import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";
import Paper from "@material-ui/core/Paper";
// import Button from '@material-ui/core/Button';
import {Link}  from "react-router-dom";
import TextField from '@material-ui/core/TextField';
// import MenuIcon from "@material-ui/icons/Menu";
// import {Menu, MenuItem} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import LoginField from "../LoginFields/LoginFields";
import LoginButton from "../LoginFields/LoginButton";



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
        letterSpacing: '4pt',
        fontSize: '36px',
        marginLeft: '1em',
        lineHeight: '2.5rem',
        marginTop: '2rem',
        // fontFamily: 'Lato-Black, sans-serif',
       // letterSpacing: '1.6pt',
        //fontSize: '24px',
       // marginTop: '3rem',
        //marginLeft: '1.5em',
        background: 'none',
        boxShadow: 'none',
    },

    SubHeadline: {
        color: myTheme.palette.secondary.contrastText,
        fontFamily: 'Lato-Regular, sans-serif',
        lineHeight: '1.3rem',
        fontSize: '15px',
        textAlign: 'left',
        marginTop: '-0.5rem',
        marginLeft: '2.4em',
        background: 'none',
        boxShadow: 'none',
    },
    loginText: {
        color: myTheme.palette.secondary.contrastText,
        fontFamily: 'Lato-Regular, sans-serif',
        lineHeight: '1.4rem',
        fontSize: '15px',
        textAlign: 'left',
        marginLeft: '5em',
        marginTop: '0.4rem',
        marginBottom: '-0.5rem',
        background: 'none',
        boxShadow: 'none',
    },

    loginForm: {
        marginLeft: '4.3em',
        marginTop: '-0.4rem',
        '& .MuiTextField-root': {
            margin: theme.spacing(0.5),
            width: '17ch',
            backgroundColor: myTheme.palette.primary.dark,
        },

    backgroundField: {
        backgroundColor: myTheme.palette.secondary.main,

    },

    },
    registerClick: {
        color: myTheme.palette.secondary.contrastText,
        fontFamily: 'Lato-Regular, sans-serif',
        textDecoration: 'none',
    },
    sendButton: {
        // margin: theme.spacing(1),
        marginTop: '-1rem',
        marginLeft: '5.2em',
        color: myTheme.palette.primary.main,
        backgroundColor: myTheme.palette.primary.light,
        width: '22ch',
    },
    clickButton: {
        textDecoration: 'none',
    },
    shareCircle: {
        maxWidth: '50%',
        position: 'absolute',
        bottom: '-1.6rem',
        right: '0',
    },

}));

export default function ShapeContent() {
    const classes = useStyles();


    return (


        <div className={classes.root}>


                <img src="images/shareCircle.png"
                     alt="share-logo"
                     className={classes.shareCircle}/>


            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <Paper className={classes.Headline}>
                        GEMEINSAM <br/> HABEN WIR MEHR!
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.SubHeadline}>
                        Teilt euer wunderbar selbstangebautest <br/> und überschüssiges Obst und Gemüse.
                    </Paper>
                </Grid>

            </Grid>

            {/*login!!*/}
            <Grid container spacing={3}>

                {/*login text*/}
                <Grid item xs={12}>
                    <Paper className={classes.loginText}>
                        Log dich jetzt ein.
                        <br/>
                        Oder registrier dich
                        <Link to="/register" className={classes.registerClick}>
                          <nbsp/> <b>hier!</b>
                        </Link>

                    </Paper>
                </Grid>


                <LoginField
                    loginFieldName={classes.loginForm}
                    textFieldName={classes.backgroundField}
                />


                <LoginButton
                    loginButtonLink={classes.clickButton}
                    loginButtonName={classes.sendButton}
                />


                <Typography
                    component="div"
                    text="Hello"
                    style={{ backgroundColor: 'none', height: '10vh', marginTop: '5.5rem', }} />

            </Grid>
        </div>
    );
}