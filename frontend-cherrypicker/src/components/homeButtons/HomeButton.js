import React from "react";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import SvgIcon from "@material-ui/core/SvgIcon";


function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

function HomeButton({homeButtonLink, homeButtonName, homeButtonIcon}) {

    return(

        <Grid item xs={6}>
            <Link to={homeButtonLink}>
                <div className={homeButtonName}>
                    <HomeIcon fontSize="large" color="primary"/>
                </div>
            </Link>
        </Grid>
    )

}

export default HomeButton;