import React from "react";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({

    shareCircle: {
        maxWidth: '50%',
        position: 'absolute',
        bottom: '-1.6rem',
        right: '0',
    }

}));

function RegisterPageDecoElement() {
    const classes = useStyles();

    return(

        <img src="images/shareCircleEcofriendly.png"
             alt="share-logo"
             className={classes.shareCircle}/>
    )
}

export default RegisterPageDecoElement;