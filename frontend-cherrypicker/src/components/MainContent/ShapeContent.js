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

/*    buttonOne: {
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
    },*/


    loginText: {
        color: myTheme.palette.secondary.contrastText,
        fontFamily: 'Lato-Regular, sans-serif',
        lineHeight: '22px',
        fontSize: '15px',
        textAlign: 'left',
        marginLeft: '7em',
        marginRight: '55px',
        marginTop: '20px',
        marginBottom: '-10px',
        background: 'none',
        boxShadow: 'none',
    },

    loginForm: {
        marginLeft: '6em',
        marginTop: '-5px',
        '& .MuiTextField-root': {
            margin: theme.spacing(0.5),
            width: '17ch',
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
        marginLeft: '7.2em',
        color: myTheme.palette.primary.main,
        backgroundColor: myTheme.palette.primary.light,
        width: '22ch',
    },
    clickButton: {
        textDecoration: 'none',
    },


}));

export default function ShapeContent() {
    const classes = useStyles();


    return (


        <div className={classes.root}>

            <Typography
                component="div"
                text="Hello"
                style={{ backgroundColor: 'none', height: '5vh', marginTop: '5rem', }} />

            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <Paper className={classes.Headline}>GEMEINSAM<br/>HABEN WIR MEHR!</Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.Hashtag}>#TEILEN</Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.SubHeadline}>
                        Werde Teil einer neuen Sharing Community!
                        Teilt euer überschüssiges und selbstangebautest Obst und Gemüse ganz
                        einfach mit Anderen.
                    </Paper>
                </Grid>



                 {/*fruits and vegetables button*/}
 {/*               <Grid item xs={6} container spacing={1}>
                    <Link to="/fruits">
                    <img src="images/obst.png" alt="obst-logo" className={classes.buttonOne}/>
                    </Link>
                </Grid>

                <Grid item xs={6} container spacing={1}>
                    <Link to="/vegetables">
                    <img src="images/gemuese.png" alt="gemuese-logo" className={classes.buttonTwo}/>
                    </Link>
                </Grid>*/}

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
                                id="outlined-required"
                                label="Username"
                                // defaultValue="Username"
                                variant="outlined"
                                placeholder="dein Username"
                                size="small"
                            />

                            <TextField
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
                            senden
                        </Button>
                    </Link>
                </Grid>


            </Grid>
        </div>
    );
}