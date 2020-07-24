import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";

const useStyles = makeStyles((theme) => ({

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

}));

function LoginField() {
    const classes = useStyles();

    return(

        <Grid item xs={12}>
            <form className={classes.loginForm} noValidate autoComplete="off">
                <div>
                    <TextField
                        className={classes.backgroundField}
                        error
                        id="outlined-required"
                        label="Username"
                        variant="outlined"
                        placeholder="dein Username"
                        size="small"
                    />

                    <TextField
                        className={classes.backgroundField}
                        error
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

    )

}

export default LoginField;