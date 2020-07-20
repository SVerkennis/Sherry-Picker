import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import myTheme from "../../styling/muiTheme";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginLeft: '3em',
        marginTop: '2rem',
    },
    inputText: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "25ch",
        }
    },
    Headline: {
        color: myTheme.palette.primary.contrastText,
        fontSize: '24px',
        fontFamily: 'Lato-Black, sans-serif',
        letterSpacing: '1.6pt',
        textAlign: 'left',
        marginLeft: '1.3em',
        marginTop: '0.1rem',
        background: 'none',
        boxShadow: 'none',
    },
    SubHeadline: {
        color: myTheme.palette.secondary.contrastText,
        fontFamily: 'Lato-Regular, sans-serif',
        lineHeight: '22px',
        fontSize: '15px',
        textAlign: 'left',
        marginLeft: '1.5em',
        marginTop: '0.2rem',
        marginBottom: '10px',
        background: 'none',
        boxShadow: 'none',
    },
}));

export default function RegisterPage() {
    const classes = useStyles();



        return (

                <Container maxWidth="sm">
                    <Typography
                        component="div"
                        text="Hello"
                        style={{ backgroundColor: 'none', height: '5vh', marginTop: '5rem', }} />
                    <div>
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            <form className={classes.inputText} noValidate autoComplete="off">

                                <Grid item xs={12}>
                                    <Paper className={classes.Headline}>TRAG DICH EIN!</Paper>
                                </Grid>

                                <Grid item xs={12}>
                                    <Paper className={classes.SubHeadline}>
                                        Danach kann es sofort los gehen.
                                    </Paper>
                                </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-required"
                                    label="Wunsch Username"
                                    variant="outlined"
                                    type="search"
                                    size="small"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-required"
                                    label="Deine Email Adresse"
                                    type="search"
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-required"
                                    label="Dein Name, Nachname"
                                    variant="outlined"
                                    type="search"
                                    size="small"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-required"
                                    label="Adresse"
                                    variant="outlined"
                                    placeholder="Straße Nr. Plz. Stadt"
                                    type="search"
                                    size="small"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-number"
                                    label="Dein Alter"
                                    type="number"
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>

                            </form>
                        </Grid>
                    </div>
                    </div>

                </Container>


        );

}
