import React from "react";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function DoubleBackArrow({doubleArrowName,doubleArrowLink}) {

    return(

        <Grid item xs={6}>
            <Link to={doubleArrowLink}>
                <div className={doubleArrowName}>
                    <ArrowBackIosIcon fontSize="large" color="primary"/>
                </div>
            </Link>
        </Grid>

    )

}

export default DoubleBackArrow;