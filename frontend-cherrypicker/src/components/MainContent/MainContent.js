import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        color: "green",
    },
}));

export default function MainContent() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

        {/*Test coloring fpr h1*/}
        <h1>Whaaaat is going on test?"</h1>
            
        </div>
    )
}