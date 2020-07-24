import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

function LoginField({loginFieldName, textFieldName}) {

    return(

        <Grid item xs={12}>
            <form className={loginFieldName} noValidate autoComplete="off">
                <div>
                    <TextField
                        className={textFieldName}
                        error
                        id="outlined-required"
                        label="Username"
                        variant="outlined"
                        placeholder="dein Username"
                        size="small"
                    />

                    <TextField
                        className={textFieldName}
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