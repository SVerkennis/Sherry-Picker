import React from "react";
import ShapeContent from "./ShapeContent";
import Grid from "@material-ui/core/Grid";
import {Route, Switch} from "react-router-dom";
import FruitPage from "../FruitPage/FruitPage";
import Apfel from "../FruitPage/Apfel";
import VegetablePage from "../VegetablePage/VegetablePage";
import RegisterPage from "../RegisterPage/RegisterPage";
import LandingPage from "../LandingPage/LandingPage";
import Moehre from "../VegetablePage/Moehre";
import BackgroundForm from "./BackgroundForm";

export default function MainContent() {
    return (

<>
        <BackgroundForm>

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

        </BackgroundForm>

</>

    );
}