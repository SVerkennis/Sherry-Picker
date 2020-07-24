import React from "react";
import Grid from "@material-ui/core/Grid";

function EmptyTextField({TextFieldLabel}) {

    return (

        <Grid item xs={12}>
            {TextFieldLabel}
        </Grid>

    )

}

export default EmptyTextField;