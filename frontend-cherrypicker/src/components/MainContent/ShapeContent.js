import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LoginField from "../LoginFields/LoginFields";
import LoginButton from "../LoginFields/LoginButton";
import ShapeContentHeadline from "./ShapeContentHeadline";
import ShapeContentSubheadline from "./ShapeContentSubheadline";
import ShapeContentLoginText from "./ShapeContentLoginText";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },

    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    shareCircle: {
        maxWidth: '50%',
        position: 'absolute',
        bottom: '-1.6rem',
        right: '0',
    },

}));

export default function ShapeContent() {
    const classes = useStyles();

    return (

        <div className={classes.root}>

                <img src="./images/shareCircle.png"
                     alt="share-logo"
                     className={classes.shareCircle}/>

            <Grid container spacing={3}>
              <ShapeContentHeadline/>

              <ShapeContentSubheadline/>
            </Grid>


            <Grid container spacing={3}>

                <ShapeContentLoginText/>

                <LoginField/>

                <LoginButton/>

                <Typography
                    component="div"
                    text="Hello"
                    style={{ backgroundColor: 'none', height: '10vh', marginTop: '5.5rem', }} />

            </Grid>

        </div>
    );
}