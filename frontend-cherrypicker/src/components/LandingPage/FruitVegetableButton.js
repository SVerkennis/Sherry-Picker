import React from "react";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";

function FruitVegetableButton({buttonName, buttonImage, buttonLink}) {

    return(

        <Grid item xs={6} container spacing={1}>
            <Link to={buttonLink}>
                <img src={buttonImage} className={buttonName}/>
            </Link>
        </Grid>

    )
}

export default FruitVegetableButton;