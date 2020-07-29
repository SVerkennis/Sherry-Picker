import React from "react";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";

const useStyles = makeStyles((theme) => ({

    backIcon: {
        marginTop: '-1.9rem',
        marginLeft: '8.7em',
        opacity: '90%',
    },

}));

function DoubleBackArrow({doubleArrowName,doubleArrowLink}) {
    const classes = useStyles();

    return(

        <Grid item xs={6}>
            <Link to={doubleArrowLink}>
                <div className={classes.backIcon}>
                    <ArrowBackIosIcon fontSize="large" color="primary"/>
                </div>
            </Link>
        </Grid>

    )

}

export default DoubleBackArrow;