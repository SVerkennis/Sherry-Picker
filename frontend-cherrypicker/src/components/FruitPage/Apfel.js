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
        marginLeft: '140px',
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
        marginTop: '265px',
        maxWidth: '220px',
        maxHeight: '30px',
        borderRadius: '14px',
    },
    inlineText: {
        fontSize: '14px',
        paddingBottom: '20px',
    },
    mapsImage: {
        marginLeft: '40px',
        background: 'none',
        boxShadow: 'none',
    }

}));

export default function Apfel() {
    const classes = useStyles();

    return(

            // Headline und infoText
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.Headline}>APFEL</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.infoText}>
                        Suche dir Anbieter in deiner Nähe & rette ein paar Äpfel.
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

                {/* Maps Ausschnitt*/}
                <Grid item xs={12}>
                    <Paper className={classes.mapsImage}>
                        <img src="images/mapsImage.png" alt="mapsImage-logo"/>
                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
}