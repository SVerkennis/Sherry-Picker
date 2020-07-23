import React from "react";
import ShapeContent from "./ShapeContent";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import {Route, Switch} from "react-router-dom";
import FruitPage from "../FruitPage/FruitPage";
import Apfel from "../FruitPage/Apfel";
import VegetablePage from "../VegetablePage/VegetablePage";
import RegisterPage from "../RegisterPage/RegisterPage";
import LandingPage from "../LandingPage/LandingPage";

const useStyles = makeStyles((theme) => ({

    shapeThing: {
        backgroundRepeat: 'no-repeat',
      //  backgroundImage: 'url("images/backgroundShape.png")',
      //  backgroundPosition: 'center',
     //   backgroundSize: 'cover',
        backgroundColor: '#5CDB95',
        marginLeft: '1.5em',
        marginRight: '1.5em',
        marginTop: '-1rem',
        borderRadius: '22px',
      //  paddingBottom: '7.5rem',
     //   clipPath: 'polygon(49%)',
    },


}));

export default function MainContent() {
    const classes = useStyles();

    return (

<>
        <div className={classes.shapeThing}>
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

                <Route path="/landing" exact>
                    <LandingPage/>
                </Route>

                <Route path="/">
                    <ShapeContent/>
                </Route>
            </Switch>

        </Grid>

</div>
    </>
    );
}