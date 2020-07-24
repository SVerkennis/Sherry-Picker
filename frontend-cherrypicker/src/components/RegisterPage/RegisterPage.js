import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import myTheme from "../../styling/muiTheme";
// import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import SendButton from "./SendButton";
import EmptyTextField from "./TextFields";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginLeft: '1.5em',
        marginTop: '2rem',
    },
    inputText: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "25ch",
            backgroundColor: myTheme.palette.primary.dark,
        }
    },
    Headline: {
        color: myTheme.palette.primary.contrastText,
        fontFamily: 'Raleway, sans-serif',
        letterSpacing: '1pt',
        fontSize: '35px',
        //marginRight: '1em',
        textAlign: 'center',
        marginTop: '1rem',
        background: 'none',
        boxShadow: 'none',
    },
    SubHeadline: {
        color: myTheme.palette.secondary.contrastText,
        fontFamily: 'Lato-Regular, sans-serif',
        lineHeight: '22px',
        fontSize: '15px',
        textAlign: 'center',
        marginTop: '0.2rem',
        marginBottom: '1rem',
        background: 'none',
        boxShadow: 'none',
    },
    sendButton: {
        // margin: theme.spacing(1),
        marginTop: '1.3rem',
        //marginLeft: '0.3em',
        color: myTheme.palette.primary.main,
        backgroundColor: myTheme.palette.primary.light,
        width: '31.5ch',
    },
    shareCircle: {
        maxWidth: '50%',
        position: 'absolute',
        bottom: '-1.6rem',
        right: '0',
    },

}));

export default function RegisterPage() {
    const classes = useStyles();


    return (

        <Container maxWidth="sm">

            <img src="images/shareCircleEcofriendly.png"
                 alt="share-logo"
                 className={classes.shareCircle}/>

            <div>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <form className={classes.inputText} noValidate autoComplete="off">

                            <Grid item xs={12}>
                                <Paper className={classes.Headline}>TRAG DICH EIN!</Paper>
                            </Grid>

                            <Grid item xs={12}>
                                <Paper className={classes.SubHeadline}>
                                    Danach kann es sofort losgehen.
                                </Paper>
                            </Grid>

                            <EmptyTextField
                                TextFieldLabel={<TextField
                                    error
                                    id="outlined-required"
                                    label="Wunsch Username"
                                    variant="outlined"
                                    type="search"
                                    size="small"
                                />
                                }
                            />

                            <EmptyTextField
                                TextFieldLabel={<TextField
                                    error
                                    id="outlined-required"
                                    label="Deine Email Adresse"
                                    variant="outlined"
                                    type="search"
                                    size="small"
                                />
                                }
                            />

                            <EmptyTextField
                                TextFieldLabel={<TextField
                                    error
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="outlined"
                                    size="small"
                                />
                                }
                            />

                            <EmptyTextField
                                TextFieldLabel={<TextField
                                    error
                                    id="outlined-required"
                                    label="Dein Name & Nachname"
                                    variant="outlined"
                                    type="search"
                                    size="small"
                                />
                                }
                            />

                            <EmptyTextField
                                TextFieldLabel={<TextField
                                    error
                                    id="outlined-required"
                                    label="Adresse"
                                    variant="outlined"
                                    placeholder="Straße Nr. Plz. Stadt"
                                    type="search"
                                    size="small"
                                />
                                }
                            />

                        </form>
                    </Grid>


                    <SendButton
                        SendButtonName={classes.sendButton}
                    />


                    <Typography
                        component="div"
                        style={{backgroundColor: 'none', height: '2vh', marginTop: '4.7rem',}}/>

                </div>
            </div>

        </Container>


    );

}
