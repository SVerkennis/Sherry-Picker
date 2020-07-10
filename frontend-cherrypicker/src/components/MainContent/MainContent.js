import React from "react";
import BackgroundShape from "./BackgroundShape";
import ShapeContent from "./ShapeContent";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({

    shapeContainer: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: 'url("images/backgroundShape.png")',
        minHeight: "95vh",
        marginTop: "5px",

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
            <div># TEILEN</div>
        </Grid>
    </>
    );
}