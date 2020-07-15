import React from "react";
import BackgroundShape from "./BackgroundShape";
import ShapeContent from "./ShapeContent";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    shapeContainer: {
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url("images/backgroundShape.png")',
        backgroundPosition: 'center',
        minHeight: '100vh',
        minWidth: '70vw',
        marginTop: "35px",
    }

}));

export default function MainContent() {
    const classes = useStyles();

    return (

<>
        <Grid
            container
            className={classes.shapeContainer}
        >
            <ShapeContent/>
        </Grid>
    </>
    );
}