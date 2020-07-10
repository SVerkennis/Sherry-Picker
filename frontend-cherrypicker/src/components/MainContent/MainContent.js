import React from "react";
import BackgroundShape from "./BackgroundShape";
import ShapeContent from "./ShapeContent";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({

    shapeContainer: {
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url("images/backgroundShape.png")',
        backgroundPosition: 'center',
        minHeight: '95vh',
        minWidth: '70vw',
        marginTop: "30px",
    }

}));

export default function MainContent() {
    const classes = styles();

    return (

<>
        <Grid
            container
            className={classes.shapeContainer}
        >
            <div></div>
        </Grid>
    </>
    );
}