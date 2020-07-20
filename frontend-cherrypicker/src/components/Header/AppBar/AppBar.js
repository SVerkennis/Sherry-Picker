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

const useStyles = makeStyles((theme) => ({

    headerStuff: {
        flexGrow: 1,

        // HIER WIEDER ÄNDERN
        marginBottom: '-60px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

 /*   BurgerButton: {
        marginLeft: '1.5em',
        marginTop: '2rem',
    },*/

    CherryLogo: {
        size: '200%',
        marginTop: '3.3rem',
        marginLeft: '-1.6em',
       // marginBottom: '2rem',
    },
    searchIcon: {
        marginTop: '1.4rem',
        marginLeft: '2.8em',
    },

    // all burger icon content
    buttonMenu: {
        marginLeft: '1.8em',
        marginTop: '1.4rem',
    },
    backgroundColor: {
        backgroundColor: 'white',
    },
    underlineText: {
        textDecoration: 'none',
        color: myTheme.palette.secondary.main,
        fontFamily: 'Lato-Regular, sans-serif',
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

        <div className={classes.headerStuff}>

            <Grid container spacing={0}>


                {/*burger icon*/}
                <Grid item xs={4} sm={3}>
{/*                   <MenuIcon className={classes.BurgerButton}/>*/}
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
                                <Link to={"/fruits"} className={classes.underlineText}>Obst</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose} className={classes.backgroundColor}>
                                <Link to={"/vegetables"} className={classes.underlineText}>Gemüse</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose} className={classes.backgroundColor}>
                                <Link to={"/register"} className={classes.underlineText}>Registrieren</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose} className={classes.backgroundColor}>
                                <Link to={"/"} className={classes.underlineText}>Home</Link>
                            </MenuItem>
                        </Menu>
                    </div>
                </Grid>


                {/*logo img*/}
                <Grid item xs={4} sm={3}>
                    <img src="./images/NewLogo.png" alt="" className={classes.CherryLogo}/>
                </Grid>

                {/*search icon*/}
                <Grid item xs={4} sm={3}>
                        <SearchIcon className={classes.searchIcon}/>
                </Grid>

            </Grid>
        </div>



    );
}