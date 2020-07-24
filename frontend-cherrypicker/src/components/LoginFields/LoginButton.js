import React from "react";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

function LoginButton({loginButtonLink, loginButtonName}) {

    return(
        <Grid item xs={12}>
            <Link to="/landing" className={loginButtonLink}>
                <Button
                    variant="contained"
                    color= "tertiary"
                    size="medium"
                    className={loginButtonName}
                >
                    login
                </Button>
            </Link>
        </Grid>
    )

}

export default LoginButton;