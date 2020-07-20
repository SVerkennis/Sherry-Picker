import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {Box} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
/*    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginTop: '5px',
        marginLeft: '5px',
        marginRight: theme.spacing(1),
    },
    searchButton: {
        marginTop: '25px',
    },
    toolbar: {
        minHeight: 80,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
        alignSelf: 'flex-end',
    },
    logo: {
        marginLeft: '1.8em',
        textAlign: 'center',
        maxWidth: '100%',
        maxHeight: '100%',
    },*/


    headerStuff: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    BurgerButton: {
        marginLeft: '1.5em',
        marginTop: '2rem',
    },
    CherryLogo: {
        size: '200%',
        marginTop: '1.5rem',
        marginLeft: '-1.6em',
    },
    searchIcon: {
        marginTop: '2rem',
        marginLeft: '2.8em',
    }

}));

export default function ProminentAppBar() {
    const classes = useStyles();

    return (

        <div className={classes.headerStuff}>
            <Grid container spacing={0}>

                <Grid item xs={4} sm={3}>
                        <MenuIcon
                            className={classes.BurgerButton}

                        />
                </Grid>

                <Grid item xs={4} sm={3}>
                    <img src="./images/NewLogo.png" alt="" className={classes.CherryLogo}/>
                </Grid>

                <Grid item xs={4} sm={3}>
                        <SearchIcon className={classes.searchIcon}/>
                </Grid>

            </Grid>
        </div>


/*        <div
            boxShadow={0}
            bgcolor="background.paper"
            m={0}
            p={0}
            style={{ width: '0', height: '0' }}
            className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="secondary"
                        aria-label="open drawer">
                        <MenuIcon />

                        {/!*cherrypicker logo*!/}
                        <img src="./images/NewLogo.png" alt="" className={classes.logo}/>

                    </IconButton>
                    <Typography className={classes.title} variant="h5" noWrap>
                    </Typography>
                    <IconButton className={classes.searchButton} aria-label="search" color="secondary">
                        <SearchIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>*/

    );
}