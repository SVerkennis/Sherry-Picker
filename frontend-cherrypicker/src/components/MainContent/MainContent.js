import React from "react";
import ShapeContent from "./ShapeContent";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import {Route, Switch} from "react-router-dom";
import FruitPage from "../FruitPage/FruitPage";
import Apfel from "../FruitPage/Apfel";
import VegetablePage from "../VegetablePage/VegetablePage";
import RegisterPage from "../RegisterPage/RegisterPage";

const useStyles = makeStyles((theme) => ({

    shapeContainer: {
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url("images/backgroundShape.png")',
        backgroundPosition: 'center',
        minHeight: '100vh',
        minWidth: '70vw',
        marginTop: "-45px",
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
            <Switch>
                <Route path="/fruits" exact>
                    <FruitPage/>
                </Route>

                <Route path="/apfel" exact>
                    <Apfel/>
                </Route>

                <Route path="/vegetables" exact>
                    <VegetablePage/>
                </Route>

                <Route path="/register" exact>
                    <RegisterPage/>
                </Route>

                <Route path="/">
                    <ShapeContent/>
                </Route>
            </Switch>

        </Grid>
    </>
    );
}