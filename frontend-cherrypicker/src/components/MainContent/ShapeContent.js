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
        //textAlign: 'center',
        marginTop: '3rem',
        marginLeft: '1.5em',
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
        marginTop: '1rem',
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
        },

    backgroundField: {
        backgroundColor: 'white',
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
        width: '50%',
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
                        Teilt euer überschüssiges und selbstangebautest Obst und Gemüse <br/>
                        ganz einfach mit Anderen.
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

                {/*login textfields!!*/}
                <Grid item xs={12}>
                    <form className={classes.loginForm} noValidate autoComplete="off">
                        <div>
                            <TextField
                                className={classes.backgroundField}
                                id="outlined-required"
                                label="Username"
                                // defaultValue="Username"
                                variant="outlined"
                                placeholder="dein Username"
                                size="small"
                            />

                            <TextField
                                className={classes.backgroundField}
                                id="outlined-password-input"
                                label="Passwort"
                                autoComplete="current-password"
                                variant="outlined"
                                type="password"
                                placeholder="dein Passwort"
                                size="small"
                            />
                        </div>
                    </form>
                </Grid>

                {/*send login!!*/}
                <Grid item xs={12}>
                    <Link to="/landing" className={classes.clickButton}>
                        <Button
                            variant="contained"
                            color= "tertiary"
                            size="medium"
                            className={classes.sendButton}
                        >
                            login
                        </Button>
                    </Link>
                </Grid>



            </Grid>
        </div>
    );
}