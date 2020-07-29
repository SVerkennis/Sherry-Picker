import React from "react";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import SvgIcon from "@material-ui/core/SvgIcon";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    homeIcon: {
        marginTop: '-1.9rem',
        opacity: '90%',
        marginLeft: '0.em',
    },

}));

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

function HomeButton({homeButtonLink}) {
    const classes = useStyles();

    return(

        <Grid item xs={6}>
            <Link to={homeButtonLink}>
                <div className={classes.homeIcon}>
                    <HomeIcon fontSize="large" color="primary"/>
                </div>
            </Link>
        </Grid>
    )

}

export default HomeButton;