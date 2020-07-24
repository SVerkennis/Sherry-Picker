import React from "react";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";

function DoubleBackArrow({doubleArrowName,doubleArrowLink, doubleArrowIcon}) {

    return(

        <Grid item xs={6}>
            <Link to={doubleArrowLink}>
                <div className={doubleArrowName}>
                    {doubleArrowIcon}
                </div>
            </Link>
        </Grid>

    )

}

export default DoubleBackArrow;