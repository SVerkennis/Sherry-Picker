// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         maxWidth: 245,
//         maxHeight: 425,
//         marginTop: '120px',
//         marginLeft: '65px',
//         borderRadius: '20px',
//         backgroundColor: '#5CDB95',
//         boxShadow: 'none',
//     },
//
//     text: {
//         fontFamily: 'Lato-Black, sans-serif',
//     },
//
//     media: {
//         height: 0,
//         paddingTop: '59%', // 16:9
//     },
//
//     expand: {
//         transform: 'rotate(0deg)',
//         marginLeft: 'auto',
//         transition: theme.transitions.create('transform', {
//             duration: theme.transitions.duration.shortest,
//         }),
//     },
//
//     expandOpen: {
//         transform: 'rotate(180deg)',
//     },
// }));
//
// export default function Apfel() {
//     const classes = useStyles();
//     const [expanded, setExpanded] = React.useState(false);
//
//     const handleExpandClick = () => {
//         setExpanded(!expanded);
//     };
//
//     return (
//
//
//         <Card className={classes.root}>
//             <CardHeader className={classes.text}
//                 title="All about Apfel"
//                 subheader="und wo du sie finden kannst"
//             />
//
//             <CardMedia
//                 className={classes.media}
//                 image="images/cardApfel.png"
//                 title="Apfel"
//             />
//             <CardContent>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                     This impressive paella is a perfect party dish and a fun meal to cook together with your
//                     guests.
//                 </Typography>
//             </CardContent>
//             <CardActions disableSpacing>
//                 <IconButton
//                     className={clsx(classes.expand, {
//                         [classes.expandOpen]: expanded,
//                     })}
//                     onClick={handleExpandClick}
//                     aria-expanded={expanded}
//                     aria-label="show more"
//                 >
//                     <ExpandMoreIcon />
//                 </IconButton>
//             </CardActions>
//             <Collapse in={expanded} timeout="auto" unmountOnExit>
//                 <CardContent>
//                     <Typography paragraph>Method:</Typography>
//                     <Typography paragraph>
//                         Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
//                         minutes.
//                     </Typography>
//                 </CardContent>
//             </Collapse>
//         </Card>
//
//     );
// }

import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import myTheme from "../../styling/muiTheme";

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
        marginLeft: '110px',
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
        marginRight: '70px',
        marginTop: '-10px',
        marginBottom: '-10px',
        background: 'none',
        boxShadow: 'none',
    },


}));

export default function Apfel() {
    const classes = useStyles();

    return(

        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.Headline}>Der APFEL</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.SubHeadline}>
                        enthält über 30 Mineralstoffe und Spurenelemente,
                        zu erwähnen sind vor allem Kalium, das den Wasserhaushalt reguliert,
                        und Eisen.
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}