import React from "react";
import {makeStyles, fade} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import myTheme from "../../styling/muiTheme";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";


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
        fontSize: '30px',
        fontFamily: 'Lato-Black, sans-serif',
        letterSpacing: '1.6pt',
        textAlign: 'left',
        marginLeft: '110px',
        marginTop: '120px',
        background: 'none',
        boxShadow: 'none',
    },

    infoText: {
        color: myTheme.palette.secondary.contrastText,
        fontFamily: 'Lato-Regular, sans-serif',
        lineHeight: '22px',
        fontSize: '15px',
        textAlign: 'left',
        marginLeft: '80px',
        marginRight: '70px',
        marginTop: '-10px',
        marginBottom: '-10px',
        background: 'none',
        boxShadow: 'none',
    },

    // just the search bar
    grow: {
        flexGrow: 1,
    },
    appBar: {
        marginRight: '90px',
        marginTop: '330px',
        maxWidth: '220px',
        maxHeight: '35px',
        borderRadius: '10px',
        backgroundColor: '',
    },
    inlineText: {
        paddingBottom: '14px',
    },

}));

export default function Apfel() {
    const classes = useStyles();

    return(

            // Headline und infoText
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.Headline}>Der APFEL</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.infoText}>
                        enthält über 30 Mineralstoffe und Spurenelemente,
                        zu erwähnen sind vor allem Kalium, das den Wasserhaushalt reguliert,
                        und Eisen.
                    </Paper>
                </Grid>

                {/*searchBar*/}
                <Grid item xs={12}>
                        <AppBar className={classes.appBar}>
                            <Toolbar>
                                <div className={classes.search}>
                                    <InputBase
                                        className={classes.inlineText}
                                        placeholder="Wo willst du suchen?"
                                        inputProps={{ "aria-label": "search" }}
                                    />
                                </div>
                            </Toolbar>
                        </AppBar>
                </Grid>



            </Grid>
        </div>
    );
}