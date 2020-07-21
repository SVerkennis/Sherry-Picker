import React from "react";
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import {Box} from '@material-ui/core';
// import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import {Menu, MenuItem} from "@material-ui/core";
import {Link} from "react-router-dom";
import myTheme from "../../../styling/muiTheme";
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({

    headerStuff: {
        flexGrow: 1,
        // HIER WIEDER ÄNDERN
      //  marginBottom: '-105px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    // all burger icon content
    BurgerButton: {
        background: 'none',
        boxShadow: 'none',
    },
    backgroundColor: {
        backgroundColor: 'white',
    },
    buttonMenu: {
        marginLeft: '1.8em',
        marginTop: '1rem',
    },
    underlineText: {
        textDecoration: 'none',
        color: myTheme.palette.secondary.main,
        fontFamily: 'Lato-Regular, sans-serif',
    },

    // oval shape
/*    ovalShape: {
        background: 'none',
        backgroundColor: "yellow",
   //     display: "inline-block",
        height: "50px",
        width: "250px",
        webkitBorderRadius: "0 0 90px 90px",
        mozBorderRadius: "0 0 90px 90px",
        borderRadius: "0 0 90px 90px",
        marginTop: '4rem',
    },*/

    // logo
    CherryLogo: {
        height: '100%',
        marginTop: '2rem',
        marginLeft: '2em',
        background: 'none',
        boxShadow: 'none',
        borderStyle: 'none',
    },

    // Lupe
    searchIcon: {
        background: 'none',
        boxShadow: 'none',
        marginLeft: '0.5em',
        marginTop: '1.4rem',
    },

}));



export default function ProminentAppBar() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

        return (

            <div className={classes.root}>
                <div>
                    <Grid container>

                        <Grid item xs={2}>
                            <Paper MenuIcon className={classes.BurgerButton}/>

                            <div className={classes.buttonMenu}>
                                <MenuIcon variant={"contained"} aria-controls="simple-menu" aria-haspopup="true"
                                          onClick={handleClick}>
                                </MenuIcon>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose} className={classes.backgroundColor}>
                                        <Link to={"/landing"} className={classes.underlineText}>Home</Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose} className={classes.backgroundColor}>
                                        <Link to={"/fruits"} className={classes.underlineText}>Obst</Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose} className={classes.backgroundColor}>
                                        <Link to={"/vegetables"} className={classes.underlineText}>Gemüse</Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose} className={classes.backgroundColor}>
                                        <Link to={"/register"} className={classes.underlineText}>Registrieren</Link>
                                    </MenuItem>
                                </Menu>
                            </div>
                        </Grid>

                        <Grid item xs={8}>
                            <div>
                                <div className={classes.ovalShape}/>
                            </div>

                            <div>
                                <img src="./images/NewLogo.png" alt="" className={classes.CherryLogo}/>
                            </div>
                        </Grid>

                        <Grid item xs={2}>
                            <div>
                                <SearchIcon className={classes.searchIcon}/>
                            </div>
                        </Grid>

                    </Grid>
                </div>
            </div>

    );
}