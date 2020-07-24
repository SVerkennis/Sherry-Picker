import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../../styling/muiTheme";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    sendButton: {
        marginTop: '1.3rem',
        color: myTheme.palette.primary.main,
        backgroundColor: myTheme.palette.primary.light,
        width: '31.5ch',
    }
}));

function SendButton() {
    const classes = useStyles();

    return(
        <Grid item xs={12}>
            <Link to="/landing">
            <Button
                variant="contained"
                color= "tertiary"
                className={classes.sendButton}
            >
                senden
            </Button>
            </Link>
        </Grid>
    )

}

export default SendButton;