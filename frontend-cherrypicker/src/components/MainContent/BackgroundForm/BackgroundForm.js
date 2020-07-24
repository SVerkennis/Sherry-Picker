import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Route, Switch} from "react-router-dom";
import FruitPage from "../../FruitPage/FruitPage";
import Apfel from "../../FruitPage/Apfel";
import Moehre from "../../VegetablePage/Moehre";
import VegetablePage from "../../VegetablePage/VegetablePage";
import RegisterPage from "../../RegisterPage/RegisterPage";
import LandingPage from "../../LandingPage/LandingPage";
import ShapeContent from "./../ShapeContent";

const useStyles = makeStyles((theme) => ({

    shapeThing: {
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#5CDB95',
        marginLeft: '1.5em',
        marginRight: '1.5em',
        marginTop: '-1rem',
        borderRadius: '22px',
    }
}));

function BackgroundForm() {
    const classes = useStyles();

    return(
<div className={classes.shapeThing}>
    <Grid container>

        <Switch>
            <Route path="/fruits" exact>
                <FruitPage/>
            </Route>

            <Route path="/apfel" exact>
                <Apfel/>
            </Route>

            <Route path="/moehre" exact>
                <Moehre/>
            </Route>

            <Route path="/vegetables" exact>
                <VegetablePage/>
            </Route>

            <Route path="/register" exact>
                <RegisterPage/>
            </Route>

            <Route path="/landing" exact>
                <LandingPage/>
            </Route>

            <Route path="/">
                <ShapeContent/>
            </Route>
        </Switch>

    </Grid>
</div>
    )

}

export default BackgroundForm;