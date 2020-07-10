import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {Box} from '@material-ui/core';
import { shadows } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginTop: '-5px',
        marginRight: theme.spacing(1),
    },
    searchButton: {
        marginTop: '13px',
    },
    toolbar: {
        minHeight: 80,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        boxShadow: "none",
    },
    title: {
        flexGrow: 1,
        alignSelf: 'flex-end',
    },
    logo: {
        marginLeft: '2em',
        textAlign: 'center',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function ProminentAppBar() {
    const classes = useStyles();

    return (

        <Box
            boxShadow={0}
            bgcolor="background.paper"
            m={1}
            p={1}
            style={{ width: '0rem', height: '0rem' }}
            className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="secondary"
                        aria-label="open drawer">
                        <MenuIcon />

                        {/*cherrypicker logo*/}
                        <img src="./images/NewLogo.png" className={classes.logo}/>

                    </IconButton>
                    <Typography className={classes.title} variant="h5" noWrap>
                    </Typography>
                    <IconButton className={classes.searchButton} aria-label="search" color="secondary">
                        <SearchIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}