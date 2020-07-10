import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
    fruitButton: {
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url("images/obst.png")',
        minHeight: '60vh',
        minWidth: '70vw',
        marginTop: '260px',
        marginLeft: '50px',

    }
}));

export default function ShapeContent() {
    const classes = styles();

    return (

<>
        <Grid
            container
            className={classes.fruitButton}
        >
        </Grid>

    </>
    )
}