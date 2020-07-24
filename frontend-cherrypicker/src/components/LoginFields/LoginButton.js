import React from "react";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";

const useStyles = makeStyles((theme) => ({

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
    }

}));

function LoginButton() {
    const classes = useStyles();

    return(
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
    )

}

export default LoginButton;