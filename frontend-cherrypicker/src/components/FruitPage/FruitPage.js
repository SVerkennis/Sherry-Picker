import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import myTheme from "../../styling/muiTheme";
import Paper from "@material-ui/core/Paper";
import {Link} from "react-router-dom";
import SvgIcon from '@material-ui/core/SvgIcon';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },

    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },

    Headline: {
        color: myTheme.palette.primary.contrastText,
        fontSize: '30px',
        fontFamily: 'Lato-Black, sans-serif',
        letterSpacing: '1.6pt',
        textAlign: 'left',
        marginLeft: '145px',
        marginTop: '120px',
        background: 'none',
        boxShadow: 'none',
    },

    SubHeadline: {
        color: myTheme.palette.secondary.contrastText,
        fontFamily: 'Lato-Regular, sans-serif',
        lineHeight: '22px',
        fontSize: '15px',
        textAlign: 'left',
        marginLeft: '80px',
        marginRight: '55px',
        marginTop: '-10px',
        marginBottom: '-10px',
        background: 'none',
        boxShadow: 'none',
    },

    buttonApfel: {
        marginLeft: "65px",
        backgroundRepeat: 'no-repeat',
        boxShadow: 'none',
    },

    buttonTraube: {
        marginLeft: '-15px',
        background: 'none',
        boxShadow: 'none',
    },

    buttonBirne: {
        marginLeft: '65px',
        marginTop: '-40px',
    },

    buttonKirsche: {
        marginLeft: '-15px',
        background: 'none',
        boxShadow: 'none',
        marginTop: '-40px',
    },

    buttonWassermelone: {
        marginLeft: '65px',
        marginTop: '-40px',
    },

    buttonErdbeere: {
        marginLeft: '-15px',
        background: 'none',
        boxShadow: 'none',
        marginTop: '-40px',
    },

    homeIcon: {
        marginTop: '-40px',
        opacity: '80%',
        marginLeft: '-5px',
    },
    backIcon: {
        marginTop: '-40px',
        marginLeft: '155px',
        opacity: '80%',
    },

}));

    // just for homeIcon
function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

export default function FruitPage() {
    const classes = useStyles();

    return (

        // Überschriften
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.Headline}>OBST</Paper>
                </Grid>
{/*          // Subhead
               <Grid item xs={12}>
                    <Paper className={classes.SubHeadline}>
                        -is healthy as fuck-
                    </Paper>
                </Grid>*/}
            </Grid>


            {/*NEW buttons*/}
            <div className={classes.root}>
                <Grid container spacing={3}>

                    {/*apfel button*/}
                    <Grid item xs={6}>
                        <Link to="/apfel">
                            <img src="images/apfel.png" alt="apfel-logo" className={classes.buttonApfel}/>
                        </Link>
                    </Grid>

                    {/*traube button*/}
                    <Grid item xs={6}>
                        <Link to="/">
                            <img src="images/traube.png" alt="traube-logo" className={classes.buttonTraube}/>
                        </Link>
                    </Grid>

                    {/*birne button*/}
                    <Grid item xs={6}>
                        <Link to="/">
                            <img src="images/birne.png" alt="birne-logo" className={classes.buttonBirne}/>
                        </Link>
                    </Grid>

                    {/*kirsche button*/}
                    <Grid item xs={6}>
                        <Link to="/">
                            <img src="images/kirsche.png" alt="kirsche-logo" className={classes.buttonKirsche}/>
                        </Link>
                    </Grid>

                    {/*wassermelone button*/}
                    <Grid item xs={6}>
                        <Link to="/">
                            <img src="images/wassermelone.png" alt="traube-logo" className={classes.buttonWassermelone}/>
                        </Link>
                    </Grid>

                    {/*erdbeere button*/}
                    <Grid item xs={6}>
                        <Link to="/">
                            <img src="images/erdbeere.png" alt="erdbeere-logo" className={classes.buttonErdbeere}/>
                        </Link>
                    </Grid>

                    {/*back icon*/}
                    <Grid item xs={6}>
                        <Link to="/">
                            <div className={classes.backIcon}>
                                <ArrowBackIosIcon fontSize="large"
                                                  color="primary"
                                />
                            </div>
                        </Link>
                    </Grid>

                    {/*home icon*/}
                    <Grid item xs={6}>
                        <Link to="/">
                            <div className={classes.homeIcon}>
                                <HomeIcon fontSize="large"
                                          color="primary"
                                />
                            </div>
                        </Link>
                    </Grid>

                </Grid>
            </div>


        </div>

    );
}