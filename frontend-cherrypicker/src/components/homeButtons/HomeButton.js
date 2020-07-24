import React from "react";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";

function HomeButton({homeButtonLink, homeButtonName, homeButtonIcon}) {

    return(

        <Grid item xs={6}>
            <Link to={homeButtonLink}>
                <div className={homeButtonName}>
                    {homeButtonIcon}
                </div>
            </Link>
        </Grid>
    )

}

export default HomeButton;