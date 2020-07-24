import React from "react";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";

function BackArrow({arrowLink, arrowName, arrowIcon}) {

    return(


        <Grid item xs={12}>
            <Link to={arrowLink}>
                <div className={arrowName}>
                    {arrowIcon}
                </div>
            </Link>
        </Grid>
    )

}

export default BackArrow;