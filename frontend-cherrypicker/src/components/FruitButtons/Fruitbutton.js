import React from "react";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";

function FruitButton ({buttonName, buttonImage, buttonLink}) {
    return (

        <Grid item xs={6}>
            <Link to={buttonLink}>
                <img src={buttonImage}
                     alt="fruitbutton-logo"
                     className={buttonName}/>
            </Link>
        </Grid>

    )
}
export default FruitButton;