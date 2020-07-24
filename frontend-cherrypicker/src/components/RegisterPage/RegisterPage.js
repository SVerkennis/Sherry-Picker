import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import myTheme from "../../styling/muiTheme";
import SendButton from "./RegisterSubPages/SendButton";
import EmptyTextField from "./RegisterSubPages/TextFields";
import RegisterPageHeadline from "./RegisterSubPages/RegisterPageHeadline";
import RegisterPageSubheadline from "./RegisterSubPages/RegisterPageSubheadline";
import RegisterPageDecoElement from "./RegisterSubPages/RegisterPageDecoElement";


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

}));

export default function RegisterPage() {
    const classes = useStyles();


    return (

        <Container maxWidth="sm">

            <RegisterPageDecoElement/>

            <div>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <form className={classes.inputText} noValidate autoComplete="off">

                            <RegisterPageHeadline/>

                            <RegisterPageSubheadline/>


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

                    <SendButton/>

                    <Typography
                        component="div"
                        style={{backgroundColor: 'none', height: '2vh', marginTop: '4.7rem',}}/>

                </div>
            </div>

        </Container>


    );

}
