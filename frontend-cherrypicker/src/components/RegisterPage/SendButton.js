import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

function SendButton({SendButtonName}) {

    return(
        <Grid item xs={12}>
            <Button
                variant="contained"
                color= "tertiary"
                className={SendButtonName}
            >
                senden
            </Button>
        </Grid>
    )

}

export default SendButton;