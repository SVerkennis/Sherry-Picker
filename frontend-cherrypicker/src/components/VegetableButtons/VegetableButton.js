import React from "react";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";

function VegetableButton({buttonName, buttonImage, buttonLink}) {

    return(

        <Grid item xs={6}>
            <Link to={buttonLink}>
                <img src={buttonImage} className={buttonName}/>
            </Link>
        </Grid>

)

}

export default VegetableButton;