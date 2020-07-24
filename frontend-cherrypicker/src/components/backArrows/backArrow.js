import React from "react";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    backIcon: {
        marginTop: '-2.5em',
        marginLeft: '10em',
        opacity: '80%',
    },

}));

function BackArrow() {
    const classes = useStyles();

    return(


        <Grid item xs={12}>
            <Link to="/landing">
                <div className={classes.backIcon}>
                    <ArrowBackIosIcon fontSize="large" color="primary"/>
                </div>
            </Link>
        </Grid>
    )

}

export default BackArrow;